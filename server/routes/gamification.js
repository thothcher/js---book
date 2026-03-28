const express = require('express');
const { authenticate, extractBookId } = require('../middleware');

const router = express.Router();

const XP_REWARDS = {
  quiz_pass: 15,
  quiz_good: 25,
  quiz_perfect: 50,
  chapter_complete: 25,
  memory_game: 10,
  flashcard_session: 10,
  daily_login: 5,
  streak_bonus_7: 30,
  note_created: 5,
};

const LEVELS = [
  { level: 1, xp: 0, titleEn: 'Beginner', titleKa: 'დამწყები' },
  { level: 2, xp: 100, titleEn: 'Curious Mind', titleKa: 'ცნობისმოყვარე' },
  { level: 3, xp: 300, titleEn: 'Fast Learner', titleKa: 'სწრაფი მოსწავლე' },
  { level: 4, xp: 600, titleEn: 'Knowledge Seeker', titleKa: 'ცოდნის მაძიებელი' },
  { level: 5, xp: 1000, titleEn: 'Quiz Champion', titleKa: 'ვიქტორინის ჩემპიონი' },
  { level: 6, xp: 1500, titleEn: 'Brain Master', titleKa: 'ტვინის ოსტატი' },
  { level: 7, xp: 2200, titleEn: 'Code Pro', titleKa: 'კოდის პროფი' },
  { level: 8, xp: 3000, titleEn: 'Scholar', titleKa: 'მეცნიერი' },
  { level: 9, xp: 4000, titleEn: 'Expert', titleKa: 'ექსპერტი' },
  { level: 10, xp: 5500, titleEn: 'JSLearn Legend', titleKa: 'JSLearn ლეგენდა' },
];

function getLevel(totalXp) {
  let current = LEVELS[0];
  for (const l of LEVELS) {
    if (totalXp >= l.xp) current = l;
    else break;
  }
  const nextLevel = LEVELS.find(l => l.xp > totalXp);
  return { level: current.level, titleEn: current.titleEn, titleKa: current.titleKa, currentXp: totalXp, nextLevelXp: nextLevel ? nextLevel.xp : null };
}

async function updateStreak(db, userId) {
  const today = new Date().toISOString().slice(0, 10);
  const yesterday = new Date(Date.now() - 86400000).toISOString().slice(0, 10);

  const streakResult = await db.execute({ sql: 'SELECT * FROM streaks WHERE user_id = ?', args: [userId] });
  const streak = streakResult.rows[0];

  if (!streak) {
    await db.execute({ sql: 'INSERT INTO streaks (user_id, current_streak, longest_streak, last_activity_date) VALUES (?, 1, 1, ?)', args: [userId, today] });
    return { currentStreak: 1, longestStreak: 1, isNewDay: true };
  }

  if (streak.last_activity_date === today) {
    return { currentStreak: streak.current_streak, longestStreak: streak.longest_streak, isNewDay: false };
  }

  let newStreak = streak.last_activity_date === yesterday ? streak.current_streak + 1 : 1;
  const newLongest = Math.max(newStreak, streak.longest_streak);

  await db.execute({ sql: 'UPDATE streaks SET current_streak = ?, longest_streak = ?, last_activity_date = ? WHERE user_id = ?', args: [newStreak, newLongest, today, userId] });
  return { currentStreak: newStreak, longestStreak: newLongest, isNewDay: true };
}

async function checkBadges(db, userId) {
  const allBadges = (await db.execute('SELECT * FROM badges')).rows;
  const earnedIds = new Set((await db.execute({ sql: 'SELECT badge_id FROM user_badges WHERE user_id = ?', args: [userId] })).rows.map(b => b.badge_id));

  const totalXp = (await db.execute({ sql: 'SELECT COALESCE(SUM(amount), 0) as total FROM user_xp WHERE user_id = ?', args: [userId] })).rows[0].total;
  const quizzesCompleted = (await db.execute({ sql: 'SELECT COUNT(DISTINCT chapter_id) as c FROM quiz_progress WHERE user_id = ?', args: [userId] })).rows[0].c;
  const perfectQuizzes = (await db.execute({ sql: 'SELECT COUNT(*) as c FROM quiz_progress WHERE user_id = ? AND score = total_questions', args: [userId] })).rows[0].c;
  const chaptersCompleted = (await db.execute({ sql: "SELECT COUNT(*) as c FROM chapter_progress WHERE user_id = ? AND status = 'completed'", args: [userId] })).rows[0].c;
  const streakRow = (await db.execute({ sql: 'SELECT current_streak FROM streaks WHERE user_id = ?', args: [userId] })).rows[0];
  const streakDays = streakRow ? streakRow.current_streak : 0;
  const notesCreated = (await db.execute({ sql: 'SELECT COUNT(*) as c FROM notes WHERE user_id = ?', args: [userId] })).rows[0].c;
  const memoryWins = (await db.execute({ sql: 'SELECT COUNT(DISTINCT level) as c FROM memory_game_scores WHERE user_id = ?', args: [userId] })).rows[0].c;
  const memoryHard = (await db.execute({ sql: "SELECT COUNT(*) as c FROM memory_game_scores WHERE user_id = ? AND level = 'hard'", args: [userId] })).rows[0].c;
  const flashcardSessions = (await db.execute({ sql: "SELECT COUNT(DISTINCT DATE(last_reviewed) || '-' || flashcard_id / 100) as c FROM user_flashcard_progress WHERE user_id = ? AND review_count > 0", args: [userId] })).rows[0].c;

  const stats = {
    xp_total: totalXp, quizzes_completed: quizzesCompleted, perfect_quiz: perfectQuizzes,
    chapters_completed: chaptersCompleted, streak_days: streakDays, notes_created: notesCreated,
    memory_game_win: memoryWins, memory_game_hard: memoryHard, flashcard_sessions: flashcardSessions,
  };

  const newBadges = [];
  for (const badge of allBadges) {
    if (earnedIds.has(badge.id)) continue;
    const statVal = stats[badge.condition_type] || 0;
    if (statVal >= badge.condition_value) {
      await db.execute({ sql: 'INSERT OR IGNORE INTO user_badges (user_id, badge_id) VALUES (?, ?)', args: [userId, badge.id] });
      newBadges.push({ id: badge.id, nameEn: badge.name_en, nameKa: badge.name_ka, descriptionEn: badge.description_en, descriptionKa: badge.description_ka, icon: badge.icon, category: badge.category });
    }
  }
  return newBadges;
}

async function awardXp(db, userId, amount, source, sourceId, bookId = 'psy') {
  await db.execute({ sql: 'INSERT INTO user_xp (user_id, amount, source, source_id, book_id) VALUES (?, ?, ?, ?, ?)', args: [userId, amount, source, sourceId, bookId] });

  const streakResult = await updateStreak(db, userId);
  let bonusXp = 0;
  if (streakResult.isNewDay) {
    await db.execute({ sql: 'INSERT INTO user_xp (user_id, amount, source, book_id) VALUES (?, ?, ?, ?)', args: [userId, XP_REWARDS.daily_login, 'daily_login', bookId] });
    bonusXp += XP_REWARDS.daily_login;
    if (streakResult.currentStreak > 0 && streakResult.currentStreak % 7 === 0) {
      await db.execute({ sql: 'INSERT INTO user_xp (user_id, amount, source, book_id) VALUES (?, ?, ?, ?)', args: [userId, XP_REWARDS.streak_bonus_7, 'streak_bonus', bookId] });
      bonusXp += XP_REWARDS.streak_bonus_7;
    }
  }

  const newBadges = await checkBadges(db, userId);
  const totalXp = (await db.execute({ sql: 'SELECT COALESCE(SUM(amount), 0) as total FROM user_xp WHERE user_id = ?', args: [userId] })).rows[0].total;

  return { xpAwarded: amount + bonusXp, totalXp, level: getLevel(totalXp), streak: streakResult, newBadges };
}

// GET /api/gamification/stats
router.get('/stats', authenticate, async (req, res) => {
  const userId = req.user.id;
  const bookId = extractBookId(req);
  const totalXp = (await req.db.execute({ sql: 'SELECT COALESCE(SUM(amount), 0) as total FROM user_xp WHERE user_id = ?', args: [userId] })).rows[0].total;
  const streak = (await req.db.execute({ sql: 'SELECT * FROM streaks WHERE user_id = ?', args: [userId] })).rows[0];
  const badges = (await req.db.execute({ sql: 'SELECT b.*, ub.earned_at FROM user_badges ub JOIN badges b ON ub.badge_id = b.id WHERE ub.user_id = ? ORDER BY ub.earned_at DESC', args: [userId] })).rows;
  const allBadges = (await req.db.execute('SELECT * FROM badges ORDER BY category, condition_value')).rows;
  const recentXp = (await req.db.execute({ sql: 'SELECT * FROM user_xp WHERE user_id = ? AND book_id = ? ORDER BY created_at DESC LIMIT 20', args: [userId, bookId] })).rows;
  const today = new Date().toISOString().slice(0, 10);
  const todayXp = (await req.db.execute({ sql: "SELECT COALESCE(SUM(amount), 0) as total FROM user_xp WHERE user_id = ? AND DATE(created_at) = ?", args: [userId, today] })).rows[0].total;

  res.json({
    totalXp, todayXp,
    level: getLevel(totalXp),
    streak: streak ? { currentStreak: streak.current_streak, longestStreak: streak.longest_streak, lastActivityDate: streak.last_activity_date } : { currentStreak: 0, longestStreak: 0, lastActivityDate: null },
    earnedBadges: badges.map(b => ({ id: b.id, nameEn: b.name_en, nameKa: b.name_ka, descriptionEn: b.description_en, descriptionKa: b.description_ka, icon: b.icon, category: b.category, earnedAt: b.earned_at })),
    allBadges: allBadges.map(b => ({ id: b.id, nameEn: b.name_en, nameKa: b.name_ka, descriptionEn: b.description_en, descriptionKa: b.description_ka, icon: b.icon, category: b.category, conditionType: b.condition_type, conditionValue: b.condition_value })),
    recentXp: recentXp.map(x => ({ amount: x.amount, source: x.source, sourceId: x.source_id, createdAt: x.created_at })),
  });
});

// GET /api/gamification/leaderboard
router.get('/leaderboard', async (req, res) => {
  const result = await req.db.execute(`
    SELECT u.id, u.username, u.display_name, COALESCE(SUM(x.amount), 0) as total_xp,
           COALESCE(s.current_streak, 0) as current_streak
    FROM users u LEFT JOIN user_xp x ON u.id = x.user_id LEFT JOIN streaks s ON u.id = s.user_id
    WHERE u.role = 'user' GROUP BY u.id HAVING total_xp > 0 ORDER BY total_xp DESC LIMIT 20
  `);

  res.json(result.rows.map((l, i) => ({ rank: i + 1, username: l.username, displayName: l.display_name, totalXp: l.total_xp, level: getLevel(l.total_xp), currentStreak: l.current_streak })));
});

// GET /api/gamification/levels
router.get('/levels', (_req, res) => {
  res.json(LEVELS);
});

module.exports = router;
module.exports.awardXp = awardXp;
module.exports.XP_REWARDS = XP_REWARDS;
module.exports.updateStreak = updateStreak;
module.exports.checkBadges = checkBadges;

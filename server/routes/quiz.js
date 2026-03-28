const express = require('express');
const { authenticate, extractBookId } = require('../middleware');
const { awardXp, XP_REWARDS } = require('./gamification');

const router = express.Router();

// Submit quiz result
router.post('/submit', authenticate, async (req, res) => {
  const { chapterId, quizId, score, totalQuestions } = req.body;
  if (chapterId == null || !quizId || score == null || !totalQuestions) {
    return res.status(400).json({ error: 'All quiz fields are required.' });
  }

  const bookId = extractBookId(req);
  const result = await req.db.execute({
    sql: 'INSERT INTO quiz_progress (user_id, chapter_id, quiz_id, score, total_questions, book_id) VALUES (?, ?, ?, ?, ?, ?)',
    args: [req.user.id, chapterId, quizId, score, totalQuestions, bookId],
  });

  const pct = (score / totalQuestions) * 100;
  let xpAmount = 0;
  let xpSource = 'quiz_pass';
  if (pct === 100) { xpAmount = XP_REWARDS.quiz_perfect; xpSource = 'quiz_perfect'; }
  else if (pct >= 80) { xpAmount = XP_REWARDS.quiz_good; xpSource = 'quiz_good'; }
  else if (pct >= 60) { xpAmount = XP_REWARDS.quiz_pass; xpSource = 'quiz_pass'; }

  let gamification = null;
  if (xpAmount > 0) {
    gamification = await awardXp(req.db, req.user.id, xpAmount, xpSource, `${bookId}:ch${chapterId}`, bookId);
  }

  res.status(201).json({ id: Number(result.lastInsertRowid), chapterId, quizId, score, totalQuestions, gamification });
});

// Get quiz history for a chapter
router.get('/history/:chapterId', authenticate, async (req, res) => {
  const bookId = extractBookId(req);
  const result = await req.db.execute({
    sql: 'SELECT * FROM quiz_progress WHERE user_id = ? AND chapter_id = ? AND book_id = ? ORDER BY completed_at DESC',
    args: [req.user.id, req.params.chapterId, bookId],
  });

  res.json(result.rows.map(h => ({ id: h.id, quizId: h.quiz_id, score: h.score, totalQuestions: h.total_questions, completedAt: h.completed_at })));
});

module.exports = router;

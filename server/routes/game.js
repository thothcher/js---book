const express = require('express');
const { authenticate, extractBookId } = require('../middleware');
const { awardXp, XP_REWARDS } = require('./gamification');

const router = express.Router();

// Submit memory game score
router.post('/score', authenticate, async (req, res) => {
  const { level, moves, timeSeconds } = req.body;
  if (!level || moves == null || timeSeconds == null) return res.status(400).json({ error: 'Level, moves and timeSeconds are required.' });

  const bookId = extractBookId(req);
  const result = await req.db.execute({
    sql: 'INSERT INTO memory_game_scores (user_id, level, moves, time_seconds, book_id) VALUES (?, ?, ?, ?, ?)',
    args: [req.user.id, level, moves, timeSeconds, bookId],
  });

  const today = new Date().toISOString().slice(0, 10);
  const alreadyToday = await req.db.execute({
    sql: "SELECT id FROM user_xp WHERE user_id = ? AND source = 'memory_game' AND source_id = ? AND DATE(created_at) = ? AND book_id = ?",
    args: [req.user.id, level, today, bookId],
  });

  let gamification = null;
  if (alreadyToday.rows.length === 0) {
    gamification = await awardXp(req.db, req.user.id, XP_REWARDS.memory_game, 'memory_game', level, bookId);
  }

  res.status(201).json({ id: Number(result.lastInsertRowid), gamification });
});

// Get leaderboard
router.get('/leaderboard/:level', async (req, res) => {
  const result = await req.db.execute({
    sql: `SELECT u.username, u.display_name, MIN(g.moves) as best_moves, MIN(g.time_seconds) as best_time
          FROM memory_game_scores g JOIN users u ON g.user_id = u.id
          WHERE g.level = ? GROUP BY g.user_id ORDER BY best_moves ASC, best_time ASC LIMIT 10`,
    args: [req.params.level],
  });

  res.json(result.rows.map(s => ({ username: s.username, displayName: s.display_name, bestMoves: s.best_moves, bestTime: s.best_time })));
});

module.exports = router;

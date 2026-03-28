const express = require('express');
const { authenticate, extractBookId } = require('../middleware');
const { awardXp, XP_REWARDS } = require('./gamification');

const router = express.Router();

// Get all notes for current user
router.get('/', authenticate, async (req, res) => {
  const bookId = extractBookId(req);
  const result = await req.db.execute({ sql: 'SELECT * FROM notes WHERE user_id = ? AND book_id = ? ORDER BY updated_at DESC', args: [req.user.id, bookId] });

  res.json(result.rows.map(n => ({
    id: n.id, title: n.title, content: n.content, chapterId: n.chapter_id,
    color: n.color, createdAt: n.created_at, updatedAt: n.updated_at,
  })));
});

// Create note
router.post('/', authenticate, async (req, res) => {
  const { title, content, chapterId, color } = req.body;
  if (!title || !content) return res.status(400).json({ error: 'Title and content are required.' });

  const bookId = extractBookId(req);
  const result = await req.db.execute({
    sql: 'INSERT INTO notes (user_id, title, content, chapter_id, color, book_id) VALUES (?, ?, ?, ?, ?, ?)',
    args: [req.user.id, title, content, chapterId || null, color || '#f0e6ff', bookId],
  });

  let gamification = null;
  const today = new Date().toISOString().slice(0, 10);
  const noteXpToday = await req.db.execute({ sql: "SELECT COUNT(*) as c FROM user_xp WHERE user_id = ? AND source = 'note_created' AND DATE(created_at) = ? AND book_id = ?", args: [req.user.id, today, bookId] });
  if (noteXpToday.rows[0].c < 3) {
    gamification = await awardXp(req.db, req.user.id, XP_REWARDS.note_created, 'note_created', `note${result.lastInsertRowid}`, bookId);
  }

  res.status(201).json({ id: Number(result.lastInsertRowid), title, content, chapterId, color: color || '#f0e6ff', gamification });
});

// Update note
router.put('/:id', authenticate, async (req, res) => {
  const { title, content, color } = req.body;
  const noteResult = await req.db.execute({ sql: 'SELECT * FROM notes WHERE id = ? AND user_id = ?', args: [req.params.id, req.user.id] });
  const note = noteResult.rows[0];
  if (!note) return res.status(404).json({ error: 'Note not found.' });

  await req.db.execute({
    sql: "UPDATE notes SET title = ?, content = ?, color = ?, updated_at = datetime('now') WHERE id = ?",
    args: [title || note.title, content || note.content, color || note.color, req.params.id],
  });
  res.json({ message: 'Note updated.' });
});

// Delete note
router.delete('/:id', authenticate, async (req, res) => {
  const result = await req.db.execute({ sql: 'DELETE FROM notes WHERE id = ? AND user_id = ?', args: [req.params.id, req.user.id] });
  if (result.rowsAffected === 0) return res.status(404).json({ error: 'Note not found.' });
  res.json({ message: 'Note deleted.' });
});

module.exports = router;

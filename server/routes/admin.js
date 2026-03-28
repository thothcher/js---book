const express = require('express');
const { authenticate, requireAdmin } = require('../middleware');

const router = express.Router();

// Get all users (admin only)
router.get('/users', authenticate, requireAdmin, async (req, res) => {
  const result = await req.db.execute('SELECT id, email, username, display_name, role, created_at, last_login FROM users ORDER BY created_at DESC');

  res.json(result.rows.map(u => ({
    id: u.id, email: u.email, username: u.username, displayName: u.display_name,
    role: u.role,
    createdAt: u.created_at, lastLogin: u.last_login,
  })));
});

// Get dashboard stats (admin only)
router.get('/stats', authenticate, requireAdmin, async (req, res) => {
  const totalUsers = (await req.db.execute('SELECT COUNT(*) as count FROM users')).rows[0].count;
  const totalQuizzes = (await req.db.execute('SELECT COUNT(*) as count FROM quiz_progress')).rows[0].count;
  const totalNotes = (await req.db.execute('SELECT COUNT(*) as count FROM notes')).rows[0].count;

  res.json({ totalUsers, totalQuizzes, totalNotes });
});

// Delete user (admin only)
router.delete('/users/:id', authenticate, requireAdmin, async (req, res) => {
  if (Number(req.params.id) === req.user.id) return res.status(400).json({ error: 'Cannot delete yourself.' });

  await req.db.execute({ sql: 'DELETE FROM users WHERE id = ?', args: [req.params.id] });
  res.json({ message: 'User deleted.' });
});

module.exports = router;

const express = require('express');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { authenticate, JWT_SECRET } = require('../middleware');
const { generateOTP, sendVerificationEmail, sendPasswordResetEmail } = require('../mailer');

const router = express.Router();

// Register
router.post('/register', async (req, res) => {
  const { email, username, password, displayName } = req.body;

  if (!email || !username || !password || !displayName) {
    return res.status(400).json({ error: 'All fields are required.' });
  }
  if (password.length < 6) {
    return res.status(400).json({ error: 'Password must be at least 6 characters.' });
  }

  const existing = await req.db.execute({ sql: 'SELECT id FROM users WHERE email = ? OR username = ?', args: [email, username] });
  if (existing.rows.length > 0) {
    return res.status(409).json({ error: 'Email or username already exists.' });
  }

  const hash = await bcrypt.hash(password, 10);
  const result = await req.db.execute({
    sql: 'INSERT INTO users (email, username, password_hash, display_name, email_verified) VALUES (?, ?, ?, ?, 0)',
    args: [email, username, hash, displayName],
  });

  const userId = Number(result.lastInsertRowid);

  const code = generateOTP();
  const expiresAt = new Date(Date.now() + 30 * 60 * 1000).toISOString();
  await req.db.execute({ sql: 'DELETE FROM email_verification_codes WHERE user_id = ?', args: [userId] });
  await req.db.execute({ sql: 'INSERT INTO email_verification_codes (user_id, code, expires_at) VALUES (?, ?, ?)', args: [userId, code, expiresAt] });

  const token = jwt.sign({ id: userId, username, role: 'user' }, JWT_SECRET, { expiresIn: '7d' });

  // Send response immediately — don't wait for email
  res.status(201).json({
    token,
    user: { id: userId, email, username, displayName, role: 'user', emailVerified: false, avatar: null },
    requiresVerification: true,
  });

  // Fire-and-forget: send verification email in background
  sendVerificationEmail(email, code, displayName)
    .then(() => console.log('[AUTH] Verification email sent to', email))
    .catch(err => console.error('[AUTH] Failed to send verification email:', err.message, err.code, err.responseCode));
});

// Verify email
router.post('/verify-email', authenticate, async (req, res) => {
  const { code } = req.body;
  if (!code) return res.status(400).json({ error: 'Verification code is required.' });

  const result = await req.db.execute({ sql: 'SELECT * FROM email_verification_codes WHERE user_id = ? AND code = ? ORDER BY created_at DESC LIMIT 1', args: [req.user.id, code] });
  const record = result.rows[0];
  if (!record) return res.status(400).json({ error: 'Invalid verification code.' });
  if (new Date(record.expires_at) < new Date()) return res.status(400).json({ error: 'Verification code has expired. Request a new one.' });

  await req.db.execute({ sql: 'UPDATE users SET email_verified = 1 WHERE id = ?', args: [req.user.id] });
  await req.db.execute({ sql: 'DELETE FROM email_verification_codes WHERE user_id = ?', args: [req.user.id] });

  const userResult = await req.db.execute({ sql: 'SELECT * FROM users WHERE id = ?', args: [req.user.id] });
  const user = userResult.rows[0];

  res.json({
    message: 'Email verified successfully.',
    user: { id: user.id, email: user.email, username: user.username, displayName: user.display_name, role: user.role, emailVerified: true, avatar: user.avatar || null },
  });
});

// Resend verification
router.post('/resend-verification', authenticate, async (req, res) => {
  const userResult = await req.db.execute({ sql: 'SELECT * FROM users WHERE id = ?', args: [req.user.id] });
  const user = userResult.rows[0];
  if (!user) return res.status(404).json({ error: 'User not found.' });
  if (user.email_verified) return res.status(400).json({ error: 'Email already verified.' });

  const code = generateOTP();
  const expiresAt = new Date(Date.now() + 30 * 60 * 1000).toISOString();
  await req.db.execute({ sql: 'DELETE FROM email_verification_codes WHERE user_id = ?', args: [user.id] });
  await req.db.execute({ sql: 'INSERT INTO email_verification_codes (user_id, code, expires_at) VALUES (?, ?, ?)', args: [user.id, code, expiresAt] });

  // Send response immediately — don't wait for email
  res.json({ message: 'Verification code sent.' });

  // Fire-and-forget: send verification email in background
  sendVerificationEmail(user.email, code, user.display_name)
    .then(() => console.log('[AUTH] Resend verification email sent to', user.email))
    .catch(err => console.error('[AUTH] Failed to resend verification email:', err.message));
});

// Login
router.post('/login', async (req, res) => {
  const { login, password } = req.body;
  if (!login || !password) return res.status(400).json({ error: 'Login and password are required.' });

  const userResult = await req.db.execute({ sql: 'SELECT * FROM users WHERE email = ? OR username = ?', args: [login, login] });
  const user = userResult.rows[0];
  if (!user) return res.status(401).json({ error: 'Invalid credentials.' });
  if (!bcrypt.compareSync(password, user.password_hash)) return res.status(401).json({ error: 'Invalid credentials.' });

  await req.db.execute({ sql: 'UPDATE users SET last_login = datetime(?) WHERE id = ?', args: [new Date().toISOString(), user.id] });

  const token = jwt.sign({ id: user.id, username: user.username, role: user.role }, JWT_SECRET, { expiresIn: '7d' });
  const emailVerified = !!user.email_verified;

  res.json({
    token,
    user: { id: user.id, email: user.email, username: user.username, displayName: user.display_name, role: user.role, emailVerified, avatar: user.avatar || null },
    requiresVerification: !emailVerified,
  });
});

// Forgot password
router.post('/forgot-password', async (req, res) => {
  const { email } = req.body;
  if (!email) return res.status(400).json({ error: 'Email is required.' });

  const userResult = await req.db.execute({ sql: 'SELECT * FROM users WHERE email = ?', args: [email] });
  const user = userResult.rows[0];
  if (!user) return res.json({ message: 'If an account exists with this email, a reset code has been sent.' });

  const code = generateOTP();
  const expiresAt = new Date(Date.now() + 15 * 60 * 1000).toISOString();
  await req.db.execute({ sql: 'DELETE FROM password_reset_codes WHERE user_id = ?', args: [user.id] });
  await req.db.execute({ sql: 'INSERT INTO password_reset_codes (user_id, code, expires_at) VALUES (?, ?, ?)', args: [user.id, code, expiresAt] });

  // Send response immediately — don't wait for email
  res.json({ message: 'If an account exists with this email, a reset code has been sent.' });

  // Fire-and-forget: send reset email in background
  sendPasswordResetEmail(user.email, code, user.display_name)
    .then(() => console.log('[AUTH] Password reset email sent to', user.email))
    .catch(err => console.error('[AUTH] Failed to send password reset email:', err.message));
});

// Reset password
router.post('/reset-password', async (req, res) => {
  const { email, code, newPassword } = req.body;
  if (!email || !code || !newPassword) return res.status(400).json({ error: 'Email, code, and new password are required.' });
  if (newPassword.length < 6) return res.status(400).json({ error: 'Password must be at least 6 characters.' });

  const userResult = await req.db.execute({ sql: 'SELECT * FROM users WHERE email = ?', args: [email] });
  const user = userResult.rows[0];
  if (!user) return res.status(400).json({ error: 'Invalid email or code.' });

  const recordResult = await req.db.execute({ sql: 'SELECT * FROM password_reset_codes WHERE user_id = ? AND code = ? ORDER BY created_at DESC LIMIT 1', args: [user.id, code] });
  const record = recordResult.rows[0];
  if (!record) return res.status(400).json({ error: 'Invalid reset code.' });
  if (new Date(record.expires_at) < new Date()) return res.status(400).json({ error: 'Reset code has expired. Request a new one.' });

  const hash = bcrypt.hashSync(newPassword, 10);
  await req.db.execute({ sql: 'UPDATE users SET password_hash = ? WHERE id = ?', args: [hash, user.id] });
  await req.db.execute({ sql: 'DELETE FROM password_reset_codes WHERE user_id = ?', args: [user.id] });

  res.json({ message: 'Password reset successfully. You can now log in.' });
});

// Get current user
router.get('/me', authenticate, async (req, res) => {
  const userResult = await req.db.execute({ sql: 'SELECT * FROM users WHERE id = ?', args: [req.user.id] });
  const user = userResult.rows[0];
  if (!user) return res.status(404).json({ error: 'User not found.' });

  res.json({
    id: user.id, email: user.email, username: user.username, displayName: user.display_name,
    role: user.role,
    createdAt: user.created_at, lastLogin: user.last_login, emailVerified: !!user.email_verified,
    avatar: user.avatar || null,
  });
});

// Upload avatar
router.put('/me/avatar', authenticate, async (req, res) => {
  const { avatar } = req.body;
  if (!avatar || typeof avatar !== 'string') return res.status(400).json({ error: 'Avatar data is required.' });
  // Limit to ~500KB base64
  if (avatar.length > 700000) return res.status(400).json({ error: 'Image too large. Max 500KB.' });
  // Validate it's a data URI for images
  if (!avatar.startsWith('data:image/')) return res.status(400).json({ error: 'Invalid image format.' });

  await req.db.execute({ sql: 'UPDATE users SET avatar = ? WHERE id = ?', args: [avatar, req.user.id] });
  res.json({ message: 'Avatar updated.', avatar });
});

// Update profile
router.put('/me', authenticate, async (req, res) => {
  const { displayName, email } = req.body;
  const updates = [];
  const params = [];

  if (displayName) { updates.push('display_name = ?'); params.push(displayName); }
  if (email) {
    const existing = await req.db.execute({ sql: 'SELECT id FROM users WHERE email = ? AND id != ?', args: [email, req.user.id] });
    if (existing.rows.length > 0) return res.status(409).json({ error: 'Email already in use.' });
    updates.push('email = ?'); params.push(email);
  }

  if (updates.length === 0) return res.status(400).json({ error: 'No fields to update.' });

  params.push(req.user.id);
  await req.db.execute({ sql: `UPDATE users SET ${updates.join(', ')} WHERE id = ?`, args: params });
  res.json({ message: 'Profile updated.' });
});

module.exports = router;

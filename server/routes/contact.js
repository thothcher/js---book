const express = require('express');
const { sendContactNotification } = require('../mailer');
const router = express.Router();

// POST /api/contact
router.post('/', async (req, res) => {
  const { username, email, message } = req.body;
  if (!username || !email || !message) return res.status(400).json({ error: 'All fields are required' });
  if (typeof username !== 'string' || username.trim().length === 0) return res.status(400).json({ error: 'Username is required' });
  if (typeof email !== 'string' || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return res.status(400).json({ error: 'Valid email is required' });
  if (typeof message !== 'string' || message.trim().length < 10) return res.status(400).json({ error: 'Message must be at least 10 characters' });

  try {
    await req.db.execute({
      sql: 'INSERT INTO contact_messages (username, email, message) VALUES (?, ?, ?)',
      args: [username.trim(), email.trim(), message.trim()],
    });

    // Send response immediately — don't wait for email
    res.status(201).json({ message: 'Message sent successfully! We will get back to you soon.' });

    // Fire-and-forget: send notification email in background
    sendContactNotification({ username: username.trim(), email: email.trim(), message: message.trim() })
      .then(() => console.log('[CONTACT] Notification email sent'))
      .catch(mailErr => console.error('[CONTACT] Failed to send email:', mailErr.message));
  } catch (err) {
    console.error('Contact submission error:', err);
    res.status(500).json({ error: 'Failed to send message' });
  }
});

// GET /api/contact
router.get('/', async (req, res) => {
  try {
    const result = await req.db.execute('SELECT * FROM contact_messages ORDER BY created_at DESC');
    res.json(result.rows);
  } catch (err) {
    console.error('Contact fetch error:', err);
    res.status(500).json({ error: 'Failed to fetch messages' });
  }
});

module.exports = router;

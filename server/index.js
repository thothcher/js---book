require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { initDatabase } = require('./database');
const authRoutes = require('./routes/auth');
const notesRoutes = require('./routes/notes');
const progressRoutes = require('./routes/progress');
const adminRoutes = require('./routes/admin');
const quizRoutes = require('./routes/quiz');
const gameRoutes = require('./routes/game');
const contactRoutes = require('./routes/contact');
const gamificationRoutes = require('./routes/gamification');
const flashcardRoutes = require('./routes/flashcards');

const app = express();
const PORT = process.env.PORT || 3000;

// Initialize database and start server
(async () => {
  const db = await initDatabase();

  // Middleware
  const allowedOrigins = process.env.ALLOWED_ORIGINS
    ? process.env.ALLOWED_ORIGINS.split(',').map(s => s.trim())
    : ['http://localhost:4200', 'http://localhost:4201', 'http://localhost:4202'];
  app.use(cors({ origin: allowedOrigins, credentials: true }));
  app.use(express.json());

  // Attach db to request
  app.use((req, _res, next) => {
    req.db = db;
    next();
  });

  // Routes
  app.use('/api/auth', authRoutes);
  app.use('/api/notes', notesRoutes);
  app.use('/api/progress', progressRoutes);
  app.use('/api/admin', adminRoutes);
  app.use('/api/quiz', quizRoutes);
  app.use('/api/game', gameRoutes);
  app.use('/api/contact', contactRoutes);
  app.use('/api/gamification', gamificationRoutes);
  app.use('/api/flashcards', flashcardRoutes);

  // Health check
  app.get('/api/health', (_req, res) => {
    res.json({ status: 'ok', timestamp: new Date().toISOString() });
  });

  app.listen(PORT, () => {
    console.log(`JSLearn API running on http://localhost:${PORT}`);
  });
})().catch(err => {
  console.error('Failed to start server:', err);
  process.exit(1);
});

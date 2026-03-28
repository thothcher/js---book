const bcrypt = require('bcryptjs');
const { createClient } = require('@libsql/client');
const path = require('path');

const db = createClient({ url: 'file:' + path.join(__dirname, 'server', 'psylearn.db') });

(async () => {
  const r = await db.execute({ sql: 'SELECT id FROM users WHERE username = ?', args: ['test'] });
  if (r.rows.length === 0) {
    const h = bcrypt.hashSync('test123', 10);
    await db.execute({
      sql: "INSERT INTO users (email, username, password_hash, display_name, role, subscription_status, email_verified) VALUES (?, ?, ?, ?, 'user', 'active', 1)",
      args: ['test@psylearn.ge', 'test', h, 'Test User'],
    });
    console.log('Test user created!');
  } else {
    console.log('Test user already exists');
  }
  process.exit(0);
})();

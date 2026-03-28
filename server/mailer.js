const nodemailer = require('nodemailer');

const ADMIN_EMAIL = process.env.ADMIN_EMAIL;

// Gmail App Password transporter
// To use: enable 2FA on your Google account, then generate an App Password at
// https://myaccount.google.com/apppasswords
const transporter = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 587,
  secure: false,
  family: 4,
  connectionTimeout: 10000,
  greetTimeout: 10000,
  socketTimeout: 30000,
  auth: {
    user: ADMIN_EMAIL,
    pass: process.env.GMAIL_APP_PASSWORD
  }
});

// Verify SMTP connection on startup
if (ADMIN_EMAIL && process.env.GMAIL_APP_PASSWORD) {
  transporter.verify()
    .then(() => console.log('[MAILER] SMTP connection verified successfully'))
    .catch(err => console.error('[MAILER] SMTP connection FAILED:', err.message));
} else {
  console.warn('[MAILER] Email credentials missing — ADMIN_EMAIL:', !!ADMIN_EMAIL, 'GMAIL_APP_PASSWORD:', !!process.env.GMAIL_APP_PASSWORD);
}

function generateOTP() {
  return Math.floor(100000 + Math.random() * 900000).toString();
}

async function sendContactNotification({ username, email, message }) {
  const mailOptions = {
    from: `"JSLearn Contact" <${ADMIN_EMAIL}>`,
    to: ADMIN_EMAIL,
    replyTo: email,
    subject: `[JSLearn] New contact message from ${username}`,
    html: `
      <h2>New Contact Message</h2>
      <p><strong>From:</strong> ${escapeHtml(username)} (${escapeHtml(email)})</p>
      <p><strong>Message:</strong></p>
      <blockquote style="border-left: 3px solid #ccc; padding-left: 12px; color: #333;">
        ${escapeHtml(message)}
      </blockquote>
      <hr>
      <small>Sent from JSLearn contact form</small>
    `
  };

  return transporter.sendMail(mailOptions);
}

async function sendVerificationEmail(toEmail, code, displayName) {
  const mailOptions = {
    from: `"JSLearn" <${ADMIN_EMAIL}>`,
    to: toEmail,
    subject: 'Verify your JSLearn account',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto;">
        <h2 style="color: #0a1628;">Welcome to JSLearn, ${escapeHtml(displayName)}!</h2>
        <p>Your verification code is:</p>
        <div style="text-align: center; margin: 24px 0;">
          <span style="font-size: 32px; font-weight: bold; letter-spacing: 6px; background: #f5f5f5; padding: 16px 32px; border-radius: 8px; display: inline-block;">
            ${code}
          </span>
        </div>
        <p>Enter this code on the verification page to activate your account.</p>
        <p style="color: #888; font-size: 13px;">This code expires in 30 minutes. If you didn't create an account, you can ignore this email.</p>
      </div>
    `
  };

  return transporter.sendMail(mailOptions);
}

async function sendPasswordResetEmail(toEmail, code, displayName) {
  const mailOptions = {
    from: `"JSLearn" <${ADMIN_EMAIL}>`,
    to: toEmail,
    subject: 'Reset your JSLearn password',
    html: `
      <div style="font-family: Arial, sans-serif; max-width: 480px; margin: 0 auto;">
        <h2 style="color: #1a237e;">Password Reset Request</h2>
        <p>Hello ${escapeHtml(displayName)},</p>
        <p>Your password reset code is:</p>
        <div style="text-align: center; margin: 24px 0;">
          <span style="font-size: 32px; font-weight: bold; letter-spacing: 6px; background: #f5f5f5; padding: 16px 32px; border-radius: 8px; display: inline-block;">
            ${code}
          </span>
        </div>
        <p>Enter this code on the password reset page to set a new password.</p>
        <p style="color: #888; font-size: 13px;">This code expires in 15 minutes. If you didn't request a password reset, you can ignore this email.</p>
      </div>
    `
  };

  return transporter.sendMail(mailOptions);
}

function escapeHtml(text) {
  const map = { '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#039;' };
  return String(text).replace(/[&<>"']/g, (c) => map[c]);
}

module.exports = {
  generateOTP,
  sendContactNotification,
  sendVerificationEmail,
  sendPasswordResetEmail
};

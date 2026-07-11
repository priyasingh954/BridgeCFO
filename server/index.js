import express from 'express';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
dotenv.config({ path: path.join(__dirname, '.env') });

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/health', (_req, res) => {
  res.json({ status: 'ok', project: 'BridgeCFO React + Node' });
});

function requiredText(value) {
  return typeof value === 'string' && value.trim().length > 0;
}

function hasRealValue(value) {
  return requiredText(value) && !value.includes('your-');
}

function buildMessage({ name, phone, email, subject, request }) {
  return `New BridgeCFO enquiry\n\nName: ${name}\nPhone: ${phone}\nEmail: ${email}\nSubject: ${subject}\n\nRequest:\n${request}`;
}

async function sendEmail(formData) {
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO, MAIL_FROM } = process.env;

  if (![SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, MAIL_TO].every(hasRealValue)) {
    console.log('Email not sent: SMTP configuration is missing.');
    return { configured: false, sent: false };
  }

  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: Number(SMTP_PORT) === 465,
    auth: { user: SMTP_USER, pass: SMTP_PASS }
  });

  await transporter.sendMail({
    from: MAIL_FROM || SMTP_USER,
    to: MAIL_TO,
    replyTo: formData.email,
    subject: `BridgeCFO Enquiry: ${formData.subject}`,
    text: buildMessage(formData)
  });

  return { configured: true, sent: true };
}

app.post('/api/contact', async (req, res) => {
  const { name, phone, email, subject, request } = req.body || {};

  if (![name, phone, email, subject, request].every(requiredText)) {
    return res.status(400).json({ message: 'Please fill Name, Phone, Email, Subject and Request.' });
  }

  if (!/^\d{10}$/.test(phone.trim())) {
    return res.status(400).json({ message: 'Please enter a valid 10 digit phone number.' });
  }

  const formData = {
    name: name.trim(),
    phone: phone.trim(),
    email: email.trim(),
    subject: subject.trim(),
    request: request.trim()
  };

  try {
    const emailResult = await sendEmail(formData);

    if (!emailResult.sent) {
      console.log('Contact form received:', formData);

      return res.json({
        message: 'Request submitted. Email credentials are not fully configured, so the enquiry was logged on the server.',
        emailConfigured: emailResult.configured,
        emailSent: emailResult.sent
      });
    }

    return res.json({ message: 'Thank you. Your request has been sent by email.' });
  } catch (error) {
    console.log('Contact form received:', formData);
    console.error('Email send error:', error.message);

    return res.json({
      message: 'Request submitted. Email delivery failed, so the enquiry was logged on the server.',
      emailConfigured: true,
      emailSent: false
    });
  }
});

const clientDist = path.join(__dirname, '..', 'client', 'dist');
app.use(express.static(clientDist));

app.get(/.*/, (_req, res) => {
  res.sendFile(path.join(clientDist, 'index.html'));
});

app.listen(PORT, () => {
  console.log(`BridgeCFO server running on http://localhost:${PORT}`);
});

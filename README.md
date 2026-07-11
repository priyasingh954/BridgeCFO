# BridgeCFO React + Node Website

This project converts the BridgeCFO Home, About Us and Services HTML designs into a React + Node website.

## Pages

- `/` - Home
- `/about` - About Us
- `/services` - Services
- `/contact` - Contact form

The top navigation Contact tab, Get Consultation, Discuss Requirement and Start a Conversation buttons open the Contact page.

## Contact Form Fields

The Contact page captures:

- Name
- Phone
- Email
- Subject
- Request

On submit, the React form calls the Node API at:

```bash
POST /api/contact
```

The backend sends email using SMTP / Nodemailer.

## Setup

```bash
npm run install:all
npm run dev
```

Open:

```bash
http://localhost:5173
```

Backend runs on:

```bash
http://localhost:5000
```

## Configure Email

Copy the example environment file:

```bash
cp server/.env.example server/.env
```

Then edit `server/.env`:

```env
PORT=5000
SMTP_HOST=smtp.gmail.com
SMTP_PORT=465
SMTP_USER=your-email@gmail.com
SMTP_PASS=your-gmail-app-password
MAIL_FROM=BridgeCFO Website <your-email@gmail.com>
MAIL_TO=atul@bridgecfo.in
```

For Gmail SMTP, create a Gmail App Password and use that as `SMTP_PASS`.

If SMTP credentials are not configured, the form will still submit locally and the request will be logged in the Node server console.

## Production Build

```bash
npm run build
npm start
```

Then open:

```bash
http://localhost:5000
```

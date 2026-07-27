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
RESEND_API_KEY=your-resend-api-key
MAIL_FROM=BridgeCFO Website <enquiry@your-verified-domain.com>
MAIL_TO=atul@bridgecfo.in
```

Verify the sender domain in Resend before using it in `MAIL_FROM`. The backend sends email through Resend's HTTPS API.

## Production Build

```bash
npm run build
npm start
```

Then open:

```bash
http://localhost:5000
```

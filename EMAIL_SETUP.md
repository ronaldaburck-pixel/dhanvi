# Email Enquiry Setup Guide

The contact form currently uses a `mailto:` link that opens the user's email client. Here are better options for receiving form submissions:

## Option 1: Formspree (Recommended - Free & Easy)

1. Go to https://formspree.io/
2. Sign up for a free account
3. Create a new form
4. Copy your form endpoint (looks like: `https://formspree.io/f/YOUR_FORM_ID`)
5. Update the form endpoint in `script.js`:

```javascript
const response = await fetch('https://formspree.io/f/YOUR_FORM_ID', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(formData)
});
```

**Benefits:**
- Free for up to 50 submissions/month
- No server needed
- Emails sent directly to your inbox
- Spam protection included

## Option 2: EmailJS (Free - No Backend)

1. Go to https://www.emailjs.com/
2. Sign up for free account
3. Connect your email service (Gmail, Outlook, etc.)
4. Create an email template
5. Get your Service ID, Template ID, and Public Key
6. Add EmailJS script to `index.html`:

```html
<script src="https://cdn.jsdelivr.net/npm/@emailjs/browser@3/dist/email.min.js"></script>
```

7. Update `script.js`:

```javascript
emailjs.init('YOUR_PUBLIC_KEY');
emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', {
    from_name: formData.name,
    from_email: formData.email,
    phone: formData.phone,
    message: formData.projectDetails
});
```

**Benefits:**
- Free for 200 emails/month
- Works directly from browser
- No server needed

## Option 3: Backend Server (PHP/Node.js)

If you have a server, you can create a backend endpoint to send emails using:
- PHP with `mail()` function
- Node.js with Nodemailer
- Python with SMTP

## Current Setup (mailto:)

The current setup uses `mailto:` which:
- Opens user's email client
- Pre-fills the email with form data
- Requires user to manually send
- Works without any setup

**To change the recipient email**, edit `script.js` line 305:
```javascript
window.location.href = `mailto:dhanvitpc@gmail.com?subject=${subject}&body=${body}`;
```

Replace `dhanvitpc@gmail.com` with your desired email address.

## Recommended: Use Formspree

For the easiest setup with no server required, I recommend Formspree. It's free and emails come directly to your inbox.


# Email Form Setup Guide

## Overview
The contact form on `/contact` now sends emails directly to your inbox and sends confirmation emails to users.

## Quick Setup (Gmail)

### Step 1: Enable 2-Factor Authentication
1. Go to https://myaccount.google.com/security
2. Enable 2-Step Verification if not already enabled

### Step 2: Generate App Password
1. Go to https://myaccount.google.com/apppasswords
2. Select "Mail" and "Windows Computer" (or your platform)
3. Google will generate a 16-character password
4. Copy this password (without spaces)

### Step 3: Update `.env.local`
```
EMAIL_USER=your-email@gmail.com
EMAIL_PASSWORD=paste-16-char-password-here-without-spaces
CONTACT_EMAIL=hello@noonealone.com
```

### Step 4: Restart Dev Server
```bash
npm run dev
# or
.\node_modules\.bin\next.cmd dev
```

## Testing
1. Go to `http://localhost:3000/en/contact`
2. Fill in the form
3. Click "Send Message"
4. Check your inbox for:
   - **Admin email**: Form submission to `CONTACT_EMAIL`
   - **User confirmation**: Sent to the user's email address

## Alternative Email Providers

### SendGrid (Recommended for Production)
1. Sign up at https://sendgrid.com
2. Get API key from Settings → API Keys
3. Update API route to use SendGrid:
   ```typescript
   const sgMail = require('@sendgrid/mail');
   sgMail.setApiKey(process.env.SENDGRID_API_KEY);
   ```

### AWS SES
1. Set up AWS account and verify email in SES
2. Get SMTP credentials
3. Configure in `.env.local`:
   ```
   SMTP_HOST=email-smtp.region.amazonaws.com
   SMTP_PORT=587
   SMTP_USER=your-username
   SMTP_PASSWORD=your-password
   ```

### Custom SMTP (Office 365, Outlook, etc.)
Update `.env.local` with your provider's SMTP details:
```
SMTP_HOST=smtp.office365.com
SMTP_PORT=587
SMTP_USER=your-email@company.com
SMTP_PASSWORD=your-password
```

Then modify `/app/api/send-email/route.ts` to use custom SMTP:
```typescript
const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: parseInt(process.env.SMTP_PORT || '587'),
    secure: false,
    auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASSWORD,
    },
});
```

## Email Customization

### Personalize Admin Email
Edit `/app/api/send-email/route.ts` - modify the `adminMailOptions` object to change:
- Subject line formatting
- Email body HTML
- Reply-to address

### Personalize User Confirmation Email
Modify the `userMailOptions` object to customize:
- Greeting and closing
- Confirmation message
- Additional information or resources

## Troubleshooting

### "Failed to send email" Error
- Check `.env.local` variables are correct
- Gmail: Verify app password (no spaces)
- Check Gmail security: Less secure apps might need to be enabled
- Restart dev server after changing `.env.local`

### Emails not received
- Check spam/junk folder
- Verify `CONTACT_EMAIL` is correct
- Check email logs in API response

### Rate Limiting
Gmail limits ~100 emails/hour. For production with higher volume, use SendGrid or AWS SES.

## Security Notes
- ✅ Never commit `.env.local` to git (already in `.gitignore`)
- ✅ App passwords are safer than using account password
- ✅ User email is only used for confirmation and reply
- ✅ Implement rate limiting for production

## Files Added/Modified
- ✅ `/app/api/send-email/route.ts` - Email API endpoint
- ✅ `/app/[locale]/(site)/contact/page.tsx` - Updated form with API integration
- ✅ `.env.local` - Configuration file (NEVER commit)
- ✅ `package.json` - Added `nodemailer` + `@types/nodemailer`

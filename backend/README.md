# Portfolio Backend

Backend for portfolio website with contact form and projects API.

## Setup

1. Create `.env` file (copy from `.env.example`):
   ```bash
   cp .env.example .env
   ```

2. Add your email credentials:
   - `EMAIL_USER`: Your Gmail address
   - `EMAIL_PASSWORD`: Gmail app password (not your regular password)
   - `NOTIFY_EMAIL`: Where you want to receive contact notifications

3. Install dependencies:
   ```bash
   npm install
   ```

4. Run locally:
   ```bash
   npm run dev
   ```

## API Endpoints

### GET `/api/projects`
Returns all portfolio projects.

### POST `/api/contact`
Submit a contact form.

**Body:**
```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "subject": "Inquiry",
  "message": "Your message here"
}
```

## Deployment to Vercel

1. Push code to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your repository
4. Add environment variables from `.env`
5. Deploy!

## Email Setup (Gmail)

1. Enable 2-Factor Authentication on Gmail
2. Generate an App Password: https://myaccount.google.com/apppasswords
3. Use the 16-character password in `EMAIL_PASSWORD`

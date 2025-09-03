# 🚀 Render Deployment Guide

## Prerequisites

1. **GitHub Account** - Your code needs to be in a GitHub repository
2. **Render Account** - Sign up at https://render.com
3. **Environment Variables** - Prepare your credentials

## Step 1: Push to GitHub

```bash
git init
git add .
git commit -m "Initial commit: Fashion portfolio with Cyworld blog"
git branch -M main
git remote add origin https://github.com/yourusername/fashion-portfolio.git
git push -u origin main
```

## Step 2: Create PostgreSQL Database on Render

1. Go to https://dashboard.render.com
2. Click **"New"** → **"PostgreSQL"**
3. Settings:
   - **Name**: `fashion-portfolio-db`
   - **Plan**: Free tier
   - **Region**: Choose closest to your users
4. Click **"Create Database"**
5. **Save the connection string** - you'll need it!

## Step 3: Create Web Service

1. Click **"New"** → **"Web Service"**
2. Connect your GitHub repository
3. Settings:
   - **Name**: `fashion-portfolio`
   - **Branch**: `main`
   - **Runtime**: `Node`
   - **Build Command**: `npm install && npm run build`
   - **Start Command**: `npm start`

## Step 4: Environment Variables

Add these in Render dashboard:

| Key | Value |
|-----|-------|
| `NODE_ENV` | `production` |
| `DATABASE_URL` | *From your PostgreSQL database* |
| `EMAIL_USER` | Your Gmail address |
| `EMAIL_PASSWORD` | Gmail app password |
| `EMAIL_TO` | Where contact forms go |
| `UPLOADCARE_PUBLIC_KEY` | Your Uploadcare public key |
| `UPLOADCARE_SECRET_KEY` | Your Uploadcare secret key |

## Step 5: Deploy

1. Click **"Create Web Service"**
2. Wait for build to complete (5-10 minutes)
3. Visit your URL: `https://your-app-name.onrender.com`

## Step 6: Initialize Database

Once deployed, run database migrations:

1. Go to your service dashboard
2. Open **"Shell"** 
3. Run: `npm run db:push`

## Gmail Setup (for Contact Form)

1. Enable 2FA on your Google account
2. Generate App Password:
   - Google Account → Security → App passwords
   - Select "Mail" and generate password
3. Use this password for `EMAIL_PASSWORD`

## Uploadcare Setup (for Images)

1. Sign up at https://uploadcare.com
2. Get API keys from dashboard
3. Add to environment variables

## Custom Domain (Optional)

1. In Render dashboard: Settings → Custom Domains
2. Add your domain
3. Update DNS records as shown

## Troubleshooting

### Build Fails
- Check Node.js version in `package.json`
- Ensure all dependencies are in `dependencies`, not `devDependencies`

### Database Connection
- Verify `DATABASE_URL` is exactly from Render PostgreSQL
- Make sure database is in same region as web service

### Environment Variables
- Double-check all required env vars are set
- No extra spaces or quotes needed

## Performance Tips

1. **Image Optimization**: Use Uploadcare for automatic optimization
2. **Caching**: Render automatically caches static assets
3. **CDN**: Consider Cloudflare for global distribution

## Monitoring

- **Logs**: Available in Render dashboard
- **Metrics**: CPU, memory, response times
- **Alerts**: Set up notifications for downtime

---

Your Cyworld-inspired fashion portfolio is now live! 🌸✨

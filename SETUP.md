# Setup Instructions

## 1. Install Node.js
- Download from https://nodejs.org (LTS version)
- Install the package
- Verify: `node --version`

## 2. Install Dependencies
```bash
cd "/Users/Soobs/Desktop/Website Build"
npm install
```

## 3. Set up Environment Variables
Edit `.env.local` with your actual values:
- Database URL (get from Render PostgreSQL)
- Email credentials (Gmail App Password)
- Uploadcare keys (for image uploads)

## 4. Start Development Server
```bash
npm run dev
```
Visit http://localhost:3000

## 5. Deploy to Render
1. Push code to GitHub
2. Create Web Service on Render
3. Add PostgreSQL database
4. Set environment variables
5. Deploy!

## Current Status ✅
- [x] Homepage with hero section
- [x] Portfolio gallery with filtering
- [x] Blog listing page
- [x] Contact form with email API
- [x] Responsive navigation
- [x] Clean, minimalist design

## Next: Add your content!
- Replace placeholder images
- Update text content
- Add your actual portfolio pieces
- Write blog posts

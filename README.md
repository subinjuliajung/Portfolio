# Fashion Portfolio Website

A minimalist fashion portfolio website built with Next.js, inspired by clean, image-focused design aesthetics.

## Features

- **Portfolio Gallery**: Grid-based layout with category filtering
- **Blog System**: Dynamic blog with commenting functionality
- **Contact Form**: Email integration for client inquiries
- **Responsive Design**: Mobile-first approach
- **Image Optimization**: Integrated with Uploadcare/Cloudinary
- **Database**: PostgreSQL with Prisma ORM

## Getting Started

### Prerequisites

- Node.js 18+ 
- PostgreSQL database
- Uploadcare account (for image hosting)

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.local.example .env.local

# Set up database
npx prisma generate
npx prisma db push

# Run development server
npm run dev
```

### Environment Variables

```
DATABASE_URL="postgresql://..."
EMAIL_USER="your-email@gmail.com"
EMAIL_PASSWORD="your-app-password"
EMAIL_TO="contact@yourdomain.com"
UPLOADCARE_PUBLIC_KEY="your-uploadcare-public-key"
UPLOADCARE_SECRET_KEY="your-uploadcare-secret-key"
```

## Deployment on Render

1. **Create Web Service**: Connect your GitHub repository
2. **Add PostgreSQL**: Create managed PostgreSQL database
3. **Environment Variables**: Add all env vars in Render dashboard
4. **Build Command**: `npm install && npm run build`
5. **Start Command**: `npm start`

## Project Structure

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx
│   ├── portfolio/
│   ├── blog/
│   └── contact/
├── components/
│   ├── Navigation.tsx
│   ├── Hero.tsx
│   └── Portfolio.tsx
├── lib/
└── styles/
```

## Technology Stack

- **Framework**: Next.js 14 with App Router
- **Styling**: Tailwind CSS
- **Database**: PostgreSQL + Prisma
- **Images**: Uploadcare CDN
- **Email**: Nodemailer
- **Deployment**: Render

## License

MIT

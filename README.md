# Everhealth Client - Next.js Application

## 🎯 Overview

This is the client-facing application for Everhealth, built with Next.js 14 (App Router). It provides a modern, performant e-commerce experience for health and wellness products.

## 🏗️ Architecture

- **Framework:** Next.js 14 with App Router
- **Styling:** Tailwind CSS
- **State Management:** Redux Toolkit
- **Database:** MongoDB with Mongoose
- **Authentication:** JWT with httpOnly cookies (`userToken`)
- **UI Components:** Radix UI, Lucide React, Material-UI

## 🚀 Getting Started

### Prerequisites

- Node.js 18+ 
- MongoDB database
- npm or yarn

### Installation

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local
# Edit .env.local with your MongoDB URI and JWT secret

# Run development server
npm run dev
```

The application will be available at `http://localhost:5173`

### Environment Variables

Create a `.env.local` file with:

```env
MONGODB_URI=your_mongodb_connection_string
MONGODBLIVE_URI=your_mongodb_live_connection_string
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRES_TIME=7d
COOKIE_EXPIRES_TIME=7
NODE_ENV=development
```

## 📁 Project Structure

```
src/
├── app/
│   ├── api/                    # API routes (backend)
│   │   └── auth/              # Authentication endpoints
│   ├── components/            # Reusable React components
│   ├── pages/                 # Page components (legacy from Vite)
│   ├── redux/                 # Redux store and slices
│   ├── utils/                 # Utility functions
│   ├── layout.tsx             # Root layout
│   ├── template.tsx           # Template with Header/Footer
│   ├── page.tsx               # Home page
│   ├── about/page.tsx         # About page
│   ├── products/page.tsx      # Products listing
│   ├── product/[id]/page.tsx  # Product detail
│   ├── cart/page.tsx          # Shopping cart
│   ├── profile/page.tsx       # User profile
│   └── ...
├── lib/
│   └── db/                    # Database utilities
├── middlewares/               # Authentication middleware
├── models/                    # Mongoose models
├── styles/                    # Global styles
└── assets/                    # Static assets
```

## 🔐 Authentication

This application uses **separate authentication** from the admin panel:

- **Cookie Name:** `userToken` (vs `adminToken` for admin)
- **User Role:** `user` (vs `admin` for admin panel)
- **No Cookie Conflicts:** Admin and client sessions are completely isolated

### API Endpoints

- `POST /api/auth/register` - Register new user
- `POST /api/auth/login` - Login user
- `GET /api/auth/getMe` - Get current user
- `GET /api/auth/logout` - Logout user

## 🎨 Features

- ✅ Server-side rendering (SSR)
- ✅ Static site generation (SSG)
- ✅ Image optimization
- ✅ Responsive design
- ✅ Dark mode support (via next-themes)
- ✅ SEO optimized
- ✅ Progressive Web App (PWA) ready
- ✅ TypeScript support

## 📱 Pages

- **Home** (`/`) - Landing page with hero, products, wellness info
- **About** (`/about`) - Company information
- **Products** (`/products`) - Product listing
- **Product Detail** (`/product/[id]`) - Individual product page
- **Cart** (`/cart`) - Shopping cart
- **Checkout** (`/checkout`) - Checkout process
- **Billing Address** (`/billing-address`) - Address entry
- **Profile** (`/profile`) - User account management
- **Contact** (`/contact`) - Contact form

## 🛠️ Development

### Scripts

```bash
# Development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Lint code
npm run lint
```

### Code Style

- Use TypeScript for type safety
- Follow Next.js best practices
- Use `'use client'` directive for client components
- Use Server Components by default
- Keep components small and focused

## 🔄 Migration from Vite

This project was migrated from Vite to Next.js. See migration documentation:

- `MIGRATION_GUIDE.md` - Comprehensive migration overview
- `MIGRATION_TASKS.md` - Detailed task list
- `MIGRATION_SUMMARY.md` - Executive summary

## 🧪 Testing

```bash
# Run tests (when configured)
npm test

# Run tests in watch mode
npm test -- --watch
```

## 📦 Building for Production

```bash
# Create production build
npm run build

# Start production server
npm run start
```

## 🚢 Deployment

### Vercel (Recommended)

```bash
# Install Vercel CLI
npm i -g vercel

# Deploy
vercel
```

### Other Platforms

The application can be deployed to any platform that supports Next.js:
- AWS Amplify
- Netlify
- Railway
- DigitalOcean App Platform

## 🤝 Related Projects

- **Everhealth Admin** - Admin panel for managing products, orders, users

## 📝 License

Private - All rights reserved

## 👥 Support

For support, contact the development team.

---

**Built with ❤️ using Next.js**
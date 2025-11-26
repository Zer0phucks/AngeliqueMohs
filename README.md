# Angelique Mohs Portfolio

A beautiful, modern portfolio website showcasing fine art pieces by Angelique Mohs. Built with React, TypeScript, and Vite.

## Features

- **Gallery**: Browse and filter artwork by category (Wildlife, Abstract, Portrait, Botanical)
- **Shopping Cart**: Add artwork to cart with quantity management
- **News/Blog**: Read about the artist's latest work and creative process
- **About**: Learn about the artist
- **Contact**: Get in touch
- **Responsive Design**: Beautiful UI with smooth animations using Framer Motion

## Tech Stack

- **React 19** - UI framework
- **TypeScript** - Type safety
- **Vite** - Build tool and dev server
- **React Router** - Client-side routing (BrowserRouter with Vercel rewrites)
- **Framer Motion** - Animations
- **Lucide React** - Icons
- **Tailwind CSS** - Styling (via index.css)

## Project Structure

```text
├── components/          # Reusable components (Navbar, Footer, CartModal)
├── pages/              # Page components (Home, Gallery, About, News, Contact)
├── public/images/      # Artwork images
├── data.ts             # Artwork and blog post data
├── types.ts            # TypeScript type definitions
└── App.tsx             # Main app component with routing
```

## Run Locally

**Prerequisites:** Node.js (v18 or higher recommended)

1. Install dependencies:

   ```bash
   npm install
   ```

2. Run the development server:

   ```bash
   npm run dev
   ```

3. Open your browser to `http://localhost:3000`

## Build

To build the project for production:

```bash
npm run build
```

The built files will be in the `dist` directory.

## Deploy to Vercel

This repository is configured for deployment to Vercel.

### Configuration

- The base path is set to `/` in `vite.config.ts`
- The site uses BrowserRouter for clean URLs
- A `vercel.json` file handles routing rewrites for client-side routing

### Deployment Options

#### Option 1: Vercel CLI

1. Install Vercel CLI globally:
   ```bash
   npm i -g vercel
   ```

2. Deploy:
   ```bash
   vercel
   ```

3. For production deployment:
   ```bash
   vercel --prod
   ```

#### Option 2: GitHub Integration (Recommended)

1. Push your code to GitHub
2. Go to [vercel.com](https://vercel.com) and sign in
3. Click **Add New Project**
4. Import your GitHub repository
5. Vercel will automatically detect the Vite configuration
6. Click **Deploy**

Vercel will automatically deploy on every push to your main branch.

#### Option 3: Custom Domain

1. In your Vercel project dashboard, go to **Settings** → **Domains**
2. Add your custom domain
3. Configure DNS records as instructed by Vercel
4. Vercel will automatically provision SSL certificates

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Alias for `npm run build`

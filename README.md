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
- **React Router** - Client-side routing (HashRouter for GitHub Pages compatibility)
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

## Deploy to GitHub Pages

This repository is configured for deployment to GitHub Pages at <http://pubwon.me/AngeliqueMohs/>

### Configuration

- The base path is configured as `/AngeliqueMohs/` in `vite.config.ts`
- The site uses HashRouter, which works perfectly with GitHub Pages static hosting
- All assets and routes are configured to work with the `/AngeliqueMohs/` base path

### Deployment Options

#### Option 1: Manual Deployment

1. Build the project: `npm run build`
2. Copy the contents of the `dist` folder to your GitHub Pages branch
3. Push to deploy

#### Option 2: GitHub Actions (if configured)

1. Enable GitHub Pages in your repository settings
2. Set the source to **GitHub Actions**
3. Push to the `main` branch to trigger automatic deployment

#### Option 3: Custom Domain

- In **Settings** → **Pages**, under **Custom domain**, enter your domain
- Configure DNS records to point to GitHub Pages
- The base path configuration will still apply

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build locally
- `npm run deploy` - Alias for `npm run build`

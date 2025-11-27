# Angelique Mohs Portfolio

A beautiful, modern portfolio website showcasing fine art pieces by Angelique Mohs. Built with React, TypeScript, and Vite.

## Features

- **Gallery**: Browse and filter artwork by category (Wildlife, Abstract, Portrait, Botanical)
- **Shopping Cart**: Add artwork to cart with quantity management
- **Stripe Payment Processing**: Secure checkout with Stripe
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
- **Stripe** - Payment processing

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

2. Set up environment variables:

   Create a `.env` file in the root directory with:
   ```env
   # Frontend variables (exposed to client - safe to include in bundle)
   VITE_STRIPE_PUBLISHABLE_KEY=pk_test_your_publishable_key_here
   VITE_API_URL=/api

   # Backend variables (serverless functions only - NEVER exposed to frontend)
   STRIPE_SECRET_KEY=sk_test_your_secret_key_here
   RESEND_API_KEY=re_your_resend_api_key_here
   ```

   **Important Notes:**
   - `STRIPE_SECRET_KEY` and `RESEND_API_KEY` are **backend-only** and used by Vercel serverless functions
   - These backend secrets should **NEVER** have the `VITE_` prefix (only frontend variables use `VITE_`)
   - Get your Stripe keys from [Stripe Dashboard](https://dashboard.stripe.com/apikeys)
   - Get your Resend API key from [Resend Dashboard](https://resend.com/api-keys)

   **For Vercel deployment:**
   - Add all environment variables in your Vercel project settings (Settings → Environment Variables)
   - Backend variables (`STRIPE_SECRET_KEY`, `RESEND_API_KEY`) are automatically available to serverless functions
   - Frontend variables (`VITE_STRIPE_PUBLISHABLE_KEY`) are available during build

3. Run the development server:

   ```bash
   npm run dev
   ```

4. Open your browser to `http://localhost:3000`

## Stripe Payment & Email Setup

This application uses **Vercel Serverless Functions** for all backend operations - no separate backend server needed!

### Environment Variables

Add these to your `.env` file for local development, and to Vercel project settings for production:

```env
# Stripe Keys (get from https://dashboard.stripe.com/apikeys)
VITE_STRIPE_PUBLISHABLE_KEY=pk_test_...
STRIPE_SECRET_KEY=sk_test_...

# Resend API Key (get from https://resend.com/api-keys)
RESEND_API_KEY=re_...

# Optional: Custom from email domain (defaults to onboarding.resend.dev)
RESEND_FROM_EMAIL=Portfolio Contact <noreply@yourdomain.com>
```

### Vercel Serverless Functions

The API routes are already set up in the `api/` directory:

- **`/api/create-checkout-session`** - Creates Stripe checkout sessions
- **`/api/send-contact-email`** - Sends contact form emails
- **`/api/send-order-confirmation`** - Sends order confirmation emails
- **`/api/get-order-details`** - Retrieves order details from Stripe

These automatically work on Vercel - just deploy and they'll be available at `yourdomain.com/api/...`

### Email Configuration

- **Contact Form**: Sends emails to `nsnfrd@gmail.com` and sends confirmation to the user
- **Order Confirmations**: Sends confirmation emails to customers and notification emails to `nsnfrd@gmail.com`

**Note**: For production, verify your domain with Resend and update the `from` email in the API functions, or set `RESEND_FROM_EMAIL` environment variable.

### Testing

Use Stripe's test cards:
- Success: `4242 4242 4242 4242`
- Decline: `4000 0000 0000 0002`

See [Stripe Testing](https://stripe.com/docs/testing) for more test cards.

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

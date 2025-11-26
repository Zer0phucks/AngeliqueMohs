<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Angelique Mohs Portfolio

A beautiful portfolio website showcasing fine art pieces.

View your app in AI Studio: https://ai.studio/apps/drive/1WOh67_9N3Zwe-eQtdMNGZlB2ZDRrdOlD

## Run Locally

**Prerequisites:** Node.js

1. Install dependencies:
   ```bash
   npm install
   ```
2. Set the `GEMINI_API_KEY` in `.env.local` to your Gemini API key (if needed)
3. Run the app:
   ```bash
   npm run dev
   ```

## Deploy to GitHub Pages

This repository is configured for automatic deployment to GitHub Pages at **http://pubwon.me/AngeliqueMohs/**

### Setup Instructions

1. **Enable GitHub Pages in your repository:**
   - Go to your repository on GitHub
   - Navigate to **Settings** → **Pages**
   - Under **Source**, select **GitHub Actions**

2. **Configure custom domain (if using pubwon.me):**
   - In **Settings** → **Pages**, under **Custom domain**, enter: `pubwon.me`
   - GitHub will create a CNAME file automatically
   - Configure DNS records for your domain to point to GitHub Pages

3. **Push to main branch:**
   - The GitHub Actions workflow will automatically build and deploy your site when you push to the `main` branch
   - Your site will be available at: **http://pubwon.me/AngeliqueMohs/**

4. **Manual deployment:**
   - You can also trigger deployment manually from the **Actions** tab in your repository

### Configuration

- The base path is configured as `/AngeliqueMohs/` to match the deployment URL
- The site uses HashRouter, which works perfectly with GitHub Pages static hosting
- All assets and routes are configured to work with the `/AngeliqueMohs/` base path

### Build

To build the project locally:
```bash
npm run build
```

The built files will be in the `dist` directory.

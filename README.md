This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

### Option 1: Deploy from GitHub (recommended)

1. Push this repo to GitHub.
2. Go to [Vercel](https://vercel.com/new) and import the repository.
3. Keep the defaults for a Next.js project.
4. Add environment variables in Vercel Project Settings if needed.
5. Click **Deploy**.

Every push to `main` will trigger a production deployment by default.

### Option 2: Deploy with Vercel CLI

```bash
# First-time project link
npm run vercel:pull

# Build using Vercel build pipeline
npm run vercel:build

# Preview deployment
npm run vercel:deploy

# Production deployment
npm run vercel:deploy:prod
```

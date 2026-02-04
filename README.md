# OneClickAI.io

Affiliate review site for AI SaaS productivity tools. Built with Next.js 14+, TypeScript, and Tailwind CSS.

## Overview

OneClickAI is the trusted advisor for AI productivity tools. We provide honest, ROI-focused reviews to help small business owners, freelancers, and professionals choose the right AI tools for their workflow.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Language:** TypeScript
- **Styling:** Tailwind CSS v4
- **Email:** Brevo (Sendinblue) API
- **Deployment:** Vercel
- **Content:** File-based (TypeScript data files)

## Getting Started

```bash
# Install dependencies
npm install

# Set up environment variables
cp .env.example .env.local

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## Environment Variables

| Variable | Description |
|----------|-------------|
| `BREVO_API_KEY` | Brevo API key for newsletter signups |

## Project Structure

```
src/
  app/              # Next.js App Router pages
    api/newsletter/ # Newsletter API endpoint
    reviews/        # Tool review pages
    compare/        # Comparison pages
    blog/           # Blog posts
    about/          # About page
    newsletter/     # Newsletter signup page
    affiliate-disclosure/
  components/       # Reusable React components
  data/             # Tool data, blog data, comparisons
  lib/              # Utility functions
```

## Pages

- `/` — Homepage with featured tools, categories, ROI calculator
- `/reviews` — Filterable grid of all reviewed tools
- `/reviews/[slug]` — Individual tool review with pricing, features, pros/cons
- `/compare/[slug]` — Side-by-side tool comparison
- `/blog` — Blog index
- `/blog/[slug]` — Blog posts
- `/about` — About page with methodology
- `/newsletter` — Newsletter signup
- `/affiliate-disclosure` — FTC-compliant disclosure

## Adding a New Tool Review

1. Add tool data to `src/data/tools.ts`
2. The review page is automatically generated at `/reviews/[slug]`
3. Run `npm run build` to verify

## Deployment

Deploy to Vercel:

```bash
npx vercel
```

Set `BREVO_API_KEY` in Vercel environment variables.

## License

Private. All rights reserved.

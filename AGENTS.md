<!-- BEGIN:nextjs-agent-rules -->
# This is NOT the Next.js you know

This version has breaking changes — APIs, conventions, and file structure may all differ from your training data. Read the relevant guide in `node_modules/next/dist/docs/` before writing any code. Heed deprecation notices.
<!-- END:nextjs-agent-rules -->

# Farchódev Blog — Project Guide

## Architecture

- **Atomic Design**: atoms/ → molecules/ → organisms/
- **Route groups**: (public)/ for blog pages with navbar/footer
- **Mock data**: Placeholder posts in page files; Sanity CMS in production
- **Theme**: dark mode first, .theme-day class for light mode

## Tech Stack

- Next.js 16.2.6 (App Router), TypeScript strict
- TailwindCSS v4 (uses @theme directive, NO tailwind.config.js)
- Framer Motion 12 for page transitions
- Sanity CMS for content management
- Shadcn/ui with Radix primitives

## Key Conventions

- All Sanity queries in src/lib/queries.ts
- CSS transitions: `cubic-bezier(0.22, 1, 0.36, 1)`
- Framer Motion v12: use `mode="popLayout"` NOT deprecated `mode="wait"`
- Colors: cyan #22D3EE (dark), #0891B2 (light), bg #05070E (dark), #F5F1E8 (light/.theme-day)
- Fonts: Inter (sans), JetBrains Mono (mono) via next/font/google

## Pages

| Route | File | Description |
|---|---|---|
| `/` | `(public)/page.tsx` | Blog index with hero + featured + recent posts |
| `/blog` | `(public)/blog/page.tsx` | All posts listing |
| `/blog/[slug]` | `(public)/blog/[slug]/page.tsx` | Individual post with PortableText |
| `/categoria/[slug]` | `(public)/categoria/[slug]/page.tsx` | Posts by category |
| `/tag/[slug]` | `(public)/tag/[slug]/page.tsx` | Posts by tag |
| `/about` | `(public)/about/page.tsx` | About the author |

## Sanity Studio

Admin panel at `/admin`. Schemas in `sanity/schemas/`.

## Build

```bash
npm run build    # type-check + production build
npm run dev      # dev server
```

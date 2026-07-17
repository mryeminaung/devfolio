# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

A developer portfolio site for Ye Min Aung, built with Next.js 16 (App Router), React 19, Tailwind CSS v4, and shadcn/ui. Deployed on Vercel at yeminaung-dev.vercel.app.

## Commands

- **Dev server:** `pnpm dev` (runs on localhost:3000)
- **Build:** `pnpm build`
- **Lint:** `pnpm lint` (ESLint)
- **Type check:** `npx tsc --noEmit`
- **Add shadcn component:** `npx shadcn@latest add <component>`

Package manager is **pnpm**. Do not use npm or yarn.

## Architecture

### Feature-based structure

Pages in `app/` are thin wrappers that render feature modules from `features/`. Each feature module exports a main page component via `index.ts` barrel files:

```
app/page.tsx → imports HomePage from features/home
app/about-me/page.tsx → imports AboutMePage from features/about-me
app/projects/page.tsx → imports ProjectsPage from features/projects
app/contact-me/page.tsx → imports ContactMePage from features/contact-me
```

Features contain their own components, constants, and types in isolated folders.

### Layout system

`layouts/app-layout.tsx` wraps all pages with `PageWrapper`, which provides the nav, footer, scroll indicator, page transitions, and the main content container with decorative corner accents.

### Component layers

- `components/ui/` — shadcn primitives (button, card, input, textarea, dialog, badge, dropdown-menu)
- `components/` — shared layout/decoration components (site-nav, site-footer, corner-accent, theme-toggle, scrollbar-indicator)
- `features/*/components/` — feature-specific components

### Styling

- Tailwind CSS v4 with `@import "tailwindcss"` (no `tailwind.config.ts`)
- shadcn/ui uses `base-nova` style with CSS variables defined in `app/globals.css`
- Dark mode via `next-themes` with class strategy (`.dark` class on `<html>`)
- `cn()` utility from `lib/utils.ts` for merging Tailwind classes
- Color scales: primary (slate), secondary (cyan) — defined as CSS custom properties in `:root` and `.dark`

### Theming

Theme toggle uses `next-themes` `ThemeProvider` in `app/layout.tsx`. The `ScrollTopBtn` and `ThemeProvider` wrap the entire app. Components use `dark:` Tailwind variants for dark mode styling.

### Animation

Uses `motion` (Framer Motion v12). Most animated components use `whileInView` with viewport detection. Animation easing pattern: `[0.22, 1, 0.36, 1]` (ease-out-expo).

### Path alias

`@/*` maps to the project root — use `@/components/...`, `@/features/...`, `@/lib/...`, `@/layouts/...`.

## Key Conventions

- Pages (`app/**/page.tsx`) are server components by default; only add `"use client"` when the component needs browser APIs or React hooks
- Feature modules export through `index.ts` barrel files
- Project data lives in `features/projects/constants/projects.ts`
- Skills data in `features/about-me/constants/skills.ts`
- Contact/social data in `features/contact-me/constants/`
- Local font loaded via `next/font/local` in `app/layout.tsx` — add `display: "swap"` when modifying
- Images: local assets in `public/`, external from `images.unsplash.com` (configured in `next.config.ts` remotePatterns)

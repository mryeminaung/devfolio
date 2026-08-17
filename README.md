## `About Devfolio`

**Devfolio** is a modern developer portfolio built with Next.js, React, and Tailwind CSS. This portfolio showcases my projects, skills, certifications, and experience as a web developer.

> **Status:** Under Active Development. New features and UI refinements are pushed regularly.

### `Features`

#### Core
- **Responsive Design:** Fully responsive layouts for all devices (mobile, tablet, desktop)
- **Light/Dark Mode:** Seamless theme switching with system preference support
- **Smooth Animations:** Enhanced user experience with Framer Motion animations
- **Accessibility:** Skip-to-content link, keyboard navigation, prefers-reduced-motion support
- **SEO Optimized:** Per-page metadata, OpenGraph images, Twitter cards, auto-generated sitemap.xml and robots.txt
- **Performance:** Lazy-loaded components, optimized images, `display: swap` fonts

#### Pages & Components
- **Hero Section:** Animated avatar with rotating rings, typewriter effect, and Download CV CTA
- **Projects Gallery:** Filterable project cards with category tabs and detailed modals
- **Certifications:** Filterable by issuer, sortable by year, with preview modals and credential verification links
- **Experience Timeline:** Animated vertical timeline with project experiences
- **Contact Form:** EmailJS integration for direct contact
- **Floating Controls:** Theme toggle and scroll-to-top button with frosted glass effect

#### Technical
- **Feature-Based Architecture:** Isolated business logic and feature-specific components
- **Type-Safe:** Full TypeScript coverage
- **Modern Stack:** Next.js 16 (App Router), React 19, Tailwind CSS v4, shadcn/ui

### `Tech Stack`

- **Framework:** [Next.js](https://nextjs.org/) (App Router)
- **UI Library:** [React](https://react.dev/)
- **Styling:** [Tailwind CSS](https://tailwindcss.com/) v4
- **Components:** [shadcn/ui](https://ui.shadcn.com/)
- **Animations:** [Framer Motion](https://www.framer.com/motion/)
- **Email:** [EmailJS](https://www.emailjs.com/)
- **Deployment:** [Vercel](https://vercel.com/)

### `Live Demo`

Check out the live demo: 👉 [yeminaung-dev.vercel.app](https://yeminaung-dev.vercel.app)

### `Project Structure`

Feature-based folder structure for isolated, maintainable code:

```
.
├── app/                    # Next.js App Router
│   ├── page.tsx           # Home page
│   ├── about-me/          # About page
│   ├── projects/          # Projects listing & detail pages
│   ├── achievements/      # Certifications & experience
│   └── contact-me/        # Contact form
├── components/             # Reusable global UI components
│   ├── ui/                # shadcn/ui primitives
│   ├── site-nav.tsx       # Navigation bar
│   ├── site-footer.tsx    # Footer
│   └── floating-theme-toggle.tsx
├── features/               # Feature-based modules
│   ├── home/              # Hero, CTA, stats
│   ├── projects/          # Project cards, modals, data
│   ├── achievements/      # Certificates, timeline, skills
│   ├── about-me/          # Bio, skills, education
│   └── contact-me/        # Contact form, social links
├── layouts/                # Page layout wrappers
├── lib/                    # Utilities (cn helper, etc.)
└── public/                 # Static assets (images, CV, logos)
```

### `Getting Started`

#### Prerequisites
- Node.js 18+ 
- pnpm (package manager)

#### Installation

1. Clone the repository:
```bash
git clone https://github.com/mryeminaung/devfolio.git
cd devfolio
```

2. Install dependencies:
```bash
pnpm install
```

3. Start the development server:
```bash
pnpm dev
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

### `Scripts`

| Command | Description |
|---------|-------------|
| `pnpm dev` | Start development server |
| `pnpm build` | Build for production |
| `pnpm start` | Start production server |
| `pnpm lint` | Run ESLint |

### `Deployment`

This portfolio is deployed on [Vercel](https://vercel.com). To deploy your own:

1. Fork this repository
2. Import the project on Vercel
3. Deploy with zero configuration

Or use the Vercel CLI:
```bash
npx vercel
```

### `License`

This project is open source and available for reference. Please give credit if you use it as inspiration for your own portfolio.

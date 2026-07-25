## `About Devfolio`

**Devfolio** is a developer portfolio built with Next.js. This portfolio showcases my projects, skills, and experience as a developer.

> **Status:** Under Active Development. New features and UI refinements are pushed regularly.

### `Features`
- **Responsive Design:** Fully responsive layouts for all devices.
- **Light/Dark Mode:** Seamless theme switching with light and dark mode support.
- **Smooth Animations:** Enhanced user experience with motion-based animations.
- **Accessibility:** Skip-to-content link, keyboard-navigable project cards, prefers-reduced-motion support, semantic heading hierarchy.
- **SEO:** Per-page metadata, auto-generated sitemap.xml and robots.txt.
- **Performance:** Lazy-loaded below-fold components, `display: swap` font loading, lazy image loading, CLS-free Typewriter.
- **Feature Modules:** Isolated business logic and feature-specific components.
- **Project Detail Modal:** Click on any project to view its details in a dedicated modal popup.

### `Live Demo`

I deployed the portfolio on Vercel for easy access and sharing.

Check out the live demo: 👉 [yeminaung-dev.vercel.app](https://yeminaung-dev.vercel.app)

### `Project Structure`

I use a feature-based folder structure to make it easy to add and integrate new features in isolation, so changes in one area have minimal impact on others. 

The main folders and files in this project are:

```
.
├── app/                # Next.js App Router (pages, API, layouts, sitemap, robots)
├── components/         # Reusable global UI components
├── features/           # Feature-based modules (logic, specific components)
├── layouts/            # Page-level layout templates
├── lib/                # Shared utility functions and configurations
├── public/             # Static assets (images, icons, etc.)
├── components.json     # shadcn/ui configuration
├── next.config.ts      # Next.js configuration
├── package.json        # Project dependencies and scripts
├── pnpm-lock.yaml      # pnpm lockfile
├── pnpm-workspace.yaml # pnpm workspace configuration
└── tsconfig.json       # TypeScript configuration
```

### `Usage`

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
pnpm run dev
```

4. Open your browser and navigate to `http://localhost:3000` to see my portfolio.

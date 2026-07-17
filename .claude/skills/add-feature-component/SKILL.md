---
name: add-feature-component
description: Scaffold a new component inside an existing feature module with proper patterns
---

# Add Feature Component

Creates a new component inside a feature module following the project's conventions.

## Steps

1. Ask which feature module the component belongs to (`home`, `about-me`, `projects`, `contact-me`). If it's a new feature, create the full feature folder structure first.

2. Ask for the component name in PascalCase (e.g., `ProjectCard`, `SkillBadge`).

3. Ask whether the component needs client-side interactivity (`"use client"`). Default to no — only add it if the component uses hooks, browser APIs, or event handlers.

4. Create the component file at `features/<feature>/components/<component-name>.tsx` following these patterns:

**Server component (default):**
```tsx
import Underline from "@/components/underline";

type ComponentNameProps = {
  // define props
};

export default function ComponentName({ /* props */ }: ComponentNameProps) {
  return (
    <div>
      {/* content */}
    </div>
  );
}
```

**Client component (only when needed):**
```tsx
"use client";

import { motion } from "motion/react";
import CornerAccent from "@/components/corner-accent";

type ComponentNameProps = {
  delay?: number;
};

export default function ComponentName({ delay = 0 }: ComponentNameProps) {
  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.55, delay, ease: [0.22, 1, 0.36, 1] }}
      viewport={{ once: true, amount: 0.2 }}
      className="border overflow-hidden relative border-secondary-400/30 p-5 md:p-8 rounded-xl dark:bg-primary-950 dark:text-white transform-gpu"
    >
      <CornerAccent position="top-right" />
      <CornerAccent position="bottom-left" />
      {/* content */}
    </motion.div>
  );
}
```

5. Export the component from the feature's `index.ts` barrel file.

6. Remind the user to import and use the component in the parent page/component.

## Conventions to follow

- Use `motion` from `"motion/react"` for animations (not `framer-motion`)
- Use `CornerAccent` for decorative card borders
- Animation easing: `[0.22, 1, 0.36, 1]` (ease-out-expo)
- Use `cn()` from `@/lib/utils` for conditional classes
- Use shadcn components from `@/components/ui/` where applicable
- Color tokens: `secondary-400` for accents, `primary-950` for dark backgrounds
- Use Tailwind `dark:` variants for dark mode

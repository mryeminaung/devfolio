export const BLOG_TAGS = {
  nextjs: "Next.js",
  react: "React",
  typescript: "TypeScript",
  tailwind: "Tailwind CSS",
  laravel: "Laravel",
  portfolio: "Portfolio",
  tutorial: "Tutorial",
  beginner: "Beginner",
  tips: "Tips",
  css: "CSS",
  deployment: "Deployment",
  blogging: "Blogging",
  tools: "Tools",
} as const;

export type BlogTag = keyof typeof BLOG_TAGS;

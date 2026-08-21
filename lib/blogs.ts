import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";

const BLOGS_DIR = path.join(process.cwd(), "content/blogs");

export interface BlogFrontmatter {
  title: string;
  description: string;
  date: string;
  tags: string[];
  thumbnail?: string;
  status?: "draft" | "publish";
}

export interface BlogPost extends BlogFrontmatter {
  slug: string;
  readingTime: string;
  content: string;
}

/**
 * Get all blog slugs (file names without extension)
 */
function getAllSlugs(): string[] {
  const files = fs.readdirSync(BLOGS_DIR);
  return files
    .filter((file) => file.endsWith(".mdx"))
    .map((file) => file.replace(/\.mdx$/, ""));
}

/**
 * Get all blog posts sorted by date (newest first)
 */
export function getAllBlogs(): BlogPost[] {
  const slugs = getAllSlugs();

  const posts = slugs.map((slug) => {
    const filePath = path.join(BLOGS_DIR, `${slug}.mdx`);
    const fileContent = fs.readFileSync(filePath, "utf-8");
    const { content, data } = matter(fileContent);
    const stats = readingTime(content);

    return {
      slug,
      ...(data as BlogFrontmatter),
      readingTime: stats.text,
      content,
    };
  });

  return posts
    .filter((post) => post.status !== "draft")
    .sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

/**
 * Get a single blog post by slug
 */
export function getBlogBySlug(slug: string): BlogPost | null {
  const filePath = path.join(BLOGS_DIR, `${slug}.mdx`);

  if (!fs.existsSync(filePath)) {
    return null;
  }

  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { content, data } = matter(fileContent);
  const frontmatter = data as BlogFrontmatter;

  if (frontmatter.status === "draft") {
    return null;
  }

  const stats = readingTime(content);

  return {
    slug,
    ...frontmatter,
    readingTime: stats.text,
    content,
  };
}

/**
 * Get all blog slugs for generateStaticParams
 */
export function generateBlogStaticParams() {
  const posts = getAllBlogs();
  return posts.map((post) => ({ slug: post.slug }));
}

/**
 * Get all unique tags from all blog posts
 */
export function getAllBlogTags(): string[] {
  const posts = getAllBlogs();
  const tags = new Set<string>();
  posts.forEach((post) => post.tags.forEach((tag) => tags.add(tag)));
  return Array.from(tags);
}

/**
 * Get related posts based on shared tags (excluding the current post)
 */
export function getRelatedPosts(slug: string, limit = 3): BlogPost[] {
  const posts = getAllBlogs();
  const current = posts.find((p) => p.slug === slug);
  if (!current) return [];

  const scored = posts
    .filter((p) => p.slug !== slug)
    .map((p) => {
      const shared = p.tags.filter((t) => current.tags.includes(t)).length;
      return { post: p, shared };
    })
    .filter((item) => item.shared > 0)
    .sort((a, b) => b.shared - a.shared || new Date(b.post.date).getTime() - new Date(a.post.date).getTime());

  return scored.slice(0, limit).map((item) => item.post);
}

/**
 * Get previous and next posts relative to current post (newest-first order)
 */
export function getAdjacentPosts(slug: string): { prev: BlogPost | null; next: BlogPost | null } {
  const posts = getAllBlogs();
  const index = posts.findIndex((p) => p.slug === slug);
  if (index === -1) return { prev: null, next: null };

  return {
    prev: index < posts.length - 1 ? posts[index + 1] : null,
    next: index > 0 ? posts[index - 1] : null,
  };
}

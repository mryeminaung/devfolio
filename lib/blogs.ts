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

  return posts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );
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
  const stats = readingTime(content);

  return {
    slug,
    ...(data as BlogFrontmatter),
    readingTime: stats.text,
    content,
  };
}

/**
 * Get all blog slugs for generateStaticParams
 */
export function generateBlogStaticParams() {
  const slugs = getAllSlugs();
  return slugs.map((slug) => ({ slug }));
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

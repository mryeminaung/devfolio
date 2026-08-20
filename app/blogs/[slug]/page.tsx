import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BlogDetailPage } from "@/features/blogs";
import { getAllBlogs, getBlogBySlug, generateBlogStaticParams } from "@/lib/blogs";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return generateBlogStaticParams();
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) return {};

  return {
    title: `${post.title} | Blog | Ye Min Aung`,
    description: post.description,
    openGraph: {
      title: post.title,
      description: post.description,
      url: `https://yeminaung-dev.vercel.app/blogs/${post.slug}`,
      siteName: "Ye Min Aung's Devfolio",
      type: "article",
      publishedTime: post.date,
      tags: post.tags,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.description,
    },
  };
}

export default async function Page({ params }: Props) {
  const { slug } = await params;
  const post = getBlogBySlug(slug);
  if (!post) notFound();

  return <BlogDetailPage post={post} />;
}

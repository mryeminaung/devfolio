"use client";

import CornerAccent from "@/components/corner-accent";
import { BLOG_TAGS } from "@/features/blogs/constants/tags";
import { motion, useReducedMotion } from "motion/react";
import { Clock, Calendar } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { BlogPost } from "../blogs.types";

const DIAGONALS = [
  ["top-left", "bottom-right"],
  ["top-right", "bottom-left"],
] as const;

function Card({ post, index = 0 }: { post: BlogPost; index?: number }) {
  const [c1, c2] = DIAGONALS[index % 2];

  return (
    <Link
      href={`/blogs/${post.slug}`}
      className="group relative w-full overflow-hidden rounded-3xl hover:shadow-lg hover:shadow-secondary-400/20 border border-secondary-400/30 dark:bg-primary-950 shadow-xs transition-[border-color,box-shadow] duration-300 transform-gpu hover:border-secondary-500/50 flex flex-col">
      <CornerAccent position={c1} className="z-10" />
      <CornerAccent position={c2} />

      {/* Thumbnail */}
      {post.thumbnail && (
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={post.thumbnail}
            alt={post.title}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-cover transition-transform duration-500 group-hover:scale-105"
          />
        </div>
      )}

      <div className="p-6 flex flex-col flex-1">
        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-3">
          {post.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="rounded-full border border-secondary-500/30 bg-secondary-500/5 px-3 py-1 text-xs font-medium uppercase tracking-wide dark:text-secondary-400">
              {BLOG_TAGS[tag as keyof typeof BLOG_TAGS] ?? tag}
            </span>
          ))}
        </div>

        {/* Title */}
        <h3 className="mb-2 text-lg font-semibold tracking-tight dark:text-white group-hover:text-secondary-400 transition-colors line-clamp-1">
          {post.title}
        </h3>

        {/* Description */}
        <p className="mb-4 line-clamp-2 text-sm dark:text-primary-400 text-gray-500">
          {post.description}
        </p>

        {/* Meta */}
        <div className="flex items-center gap-4 mt-auto pt-3 border-t border-primary-800 text-xs text-gray-400 dark:text-primary-500">
          <span className="flex items-center gap-1">
            <Calendar size={12} />
            {new Date(post.date).toLocaleDateString("en-US", {
              month: "short",
              day: "numeric",
              year: "numeric",
            })}
          </span>
          <span className="flex items-center gap-1">
            <Clock size={12} />
            {post.readingTime}
          </span>
        </div>
      </div>
    </Link>
  );
}

export const BlogCard = ({ post, index = 0 }: { post: BlogPost; index?: number }) => {
  const prefersReducedMotion = useReducedMotion();

  if (prefersReducedMotion) return <Card post={post} index={index} />;

  return (
    <motion.div
      initial={{ y: 30, opacity: 0 }}
      whileInView={{ y: 0, opacity: 1 }}
      whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
      transition={{
        duration: 0.55,
        delay: index * 0.1,
        ease: [0.22, 1, 0.36, 1],
      }}
      viewport={{ once: true, amount: 0.2 }}>
      <Card post={post} index={index} />
    </motion.div>
  );
};

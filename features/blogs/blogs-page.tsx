"use client";

import Underline from "@/components/underline";
import { ArrowDown, ArrowUp } from "lucide-react";
import { useState } from "react";
import type { BlogPost } from "./blogs.types";
import { BlogCard } from "./components/blog-card";

interface BlogsPageProps {
	blogs: BlogPost[];
}

export default function BlogsPage({ blogs }: BlogsPageProps) {
	const allTags = Array.from(new Set(blogs.flatMap((b) => b.tags)));
	const [activeTag, setActiveTag] = useState<string | null>(null);
	const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

	const filtered = activeTag
		? blogs.filter((b) => b.tags.includes(activeTag))
		: blogs;

	const sorted = [...filtered].sort((a, b) => {
		const dateA = new Date(a.date).getTime();
		const dateB = new Date(b.date).getTime();
		return sortOrder === "newest" ? dateB - dateA : dateA - dateB;
	});

	return (
		<section>
			{/* Heading */}
			<div className="flex flex-col mb-10 gap-y-3">
				<h2 className="text-2xl md:text-3xl font-semibold text-center dark:text-white">
					Blogs
				</h2>
				<Underline />
			</div>

			{/* Tag filter */}
			{allTags.length > 0 && (
				<div className="flex flex-wrap items-center gap-3 mb-8">
					<div className="flex flex-wrap gap-2">
						<button
							onClick={() => setActiveTag(null)}
							className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
								activeTag === null
									? "border-secondary-400 bg-secondary-400/10 text-secondary-500 dark:text-secondary-400"
									: "border-primary-700 text-gray-500 dark:text-primary-400 hover:border-secondary-400/40"
							}`}>
							All
						</button>
						{allTags.map((tag) => (
							<button
								key={tag}
								onClick={() => setActiveTag(tag)}
								className={`px-4 py-1.5 rounded-full text-sm font-medium capitalize border transition-all duration-200 ${
									activeTag === tag
										? "border-secondary-400 bg-secondary-400/10 text-secondary-500 dark:text-secondary-400"
										: "border-primary-700 text-gray-500 dark:text-primary-400 hover:border-secondary-400/40"
								}`}>
								{tag}
							</button>
						))}
					</div>

					{/* Sort by date */}
					<div className="flex items-center gap-2 ml-auto">
						<span className="text-xs text-gray-500 dark:text-primary-400">
							Sort:
						</span>
						<button
							onClick={() => setSortOrder("newest")}
							className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
								sortOrder === "newest"
									? "border-secondary-400 bg-secondary-400/10 text-secondary-500 dark:text-secondary-400"
									: "border-primary-700 text-gray-500 dark:text-primary-400 hover:border-secondary-400/40"
							}`}>
							<ArrowDown size={12} /> Newest
						</button>
						<button
							onClick={() => setSortOrder("oldest")}
							className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
								sortOrder === "oldest"
									? "border-secondary-400 bg-secondary-400/10 text-secondary-500 dark:text-secondary-400"
									: "border-primary-700 text-gray-500 dark:text-primary-400 hover:border-secondary-400/40"
							}`}>
							<ArrowUp size={12} /> Oldest
						</button>
					</div>
				</div>
			)}

			{/* Blog grid */}
			<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
				{sorted.map((post, index) => (
					<BlogCard
						key={post.slug}
						post={post}
						index={index}
					/>
				))}
				{sorted.length === 0 && (
					<p className="col-span-3 text-center text-gray-400 py-16">
						No posts found for this tag.
					</p>
				)}
			</div>
		</section>
	);
}

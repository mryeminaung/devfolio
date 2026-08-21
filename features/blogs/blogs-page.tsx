"use client";

import Underline from "@/components/underline";
import { BLOG_TAGS } from "@/features/blogs/constants/tags";
import { ArrowDown, ArrowUp, Search, X } from "lucide-react";
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
	const [searchQuery, setSearchQuery] = useState("");

	const searched = searchQuery.trim()
		? blogs.filter(
				(b) =>
					b.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
					b.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
					b.tags.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()))
			)
		: blogs;

	const filtered = activeTag ? searched.filter((b) => b.tags.includes(activeTag)) : searched;

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

			{/* Search */}
			<div className="relative mb-6">
				<Search
					size={16}
					className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 dark:text-primary-500"
				/>
				<input
					type="text"
					placeholder="Search posts..."
					value={searchQuery}
					onChange={(e) => setSearchQuery(e.target.value)}
					className="w-full rounded-full border border-primary-700 bg-transparent py-2.5 pl-11 pr-10 text-sm text-gray-700 dark:text-primary-300 placeholder:text-gray-400 dark:placeholder:text-primary-500 outline-none transition-colors focus:border-secondary-400"
				/>
				{searchQuery && (
					<button
						onClick={() => setSearchQuery("")}
						className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600 dark:text-primary-500 dark:hover:text-primary-300 transition-colors">
						<X size={14} />
					</button>
				)}
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
								{BLOG_TAGS[tag as keyof typeof BLOG_TAGS] ?? tag}
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
						{searchQuery ? "No posts found matching your search." : "No posts found for this tag."}
					</p>
				)}
			</div>
		</section>
	);
}

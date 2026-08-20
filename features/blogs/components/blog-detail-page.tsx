import CornerAccent from "@/components/corner-accent";
import Underline from "@/components/underline";
import { BLOG_TAGS } from "@/features/blogs/constants/tags";
import { ArrowLeft, ArrowRight, Calendar, Clock } from "lucide-react";
import { MDXRemote } from "next-mdx-remote/rsc";
import Image from "next/image";
import Link from "next/link";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypePrettyCode from "rehype-pretty-code";
import rehypeSlug from "rehype-slug";
import remarkGfm from "remark-gfm";
import type { BlogPost } from "../blogs.types";
import ShareBar from "./share-bar";
import TableOfContents from "./table-of-contents";

import { BlogCard } from "./blog-card";

interface BlogDetailPageProps {
	post: BlogPost;
	relatedPosts: BlogPost[];
	prevPost: BlogPost | null;
	nextPost: BlogPost | null;
}

export default function BlogDetailPage({ post, relatedPosts, prevPost, nextPost }: BlogDetailPageProps) {
	return (
		<article className="max-w-7xl mx-auto">
			{/* Back link */}
			<Link
				href="/blogs"
				className="inline-flex items-center gap-2 text-sm text-gray-500 dark:text-primary-400 hover:text-secondary-400 transition-colors mb-8">
				<ArrowLeft size={16} />
				Back to Blog
			</Link>

			{/* TOC — fixed on left */}
			<div className="hidden lg:block">
				<TableOfContents />
			</div>

			<div className="lg:ml-65 relative rounded-3xl border border-secondary-400/30 dark:bg-primary-950/60 p-5 md:p-8 overflow-hidden">
				{/* Subtle glow */}
				<div className="absolute inset-0 bg-linear-to-br from-secondary-400/5 via-transparent to-transparent pointer-events-none" />
				<CornerAccent
					position="top-left"
					className="z-10"
				/>
				<CornerAccent
					position="top-right"
					className="z-10"
				/>
				<CornerAccent position="bottom-left" />
				<CornerAccent position="bottom-right" />
				{/* Header */}
				<div className="mb-10">
					{/* Tags */}
					<div className="flex flex-wrap gap-2 mb-4">
						{post.tags.map((tag) => (
							<span
								key={tag}
								className="rounded-full border border-secondary-500/30 bg-secondary-500/5 px-3 py-1 text-xs font-medium uppercase tracking-wide dark:text-secondary-400">
								{BLOG_TAGS[tag as keyof typeof BLOG_TAGS] ?? tag}
							</span>
						))}
					</div>

					<h1 className="text-3xl md:text-4xl font-bold dark:text-white mb-4">
						{post.title}
					</h1>

					<p className="text-lg text-gray-500 dark:text-primary-400 mb-4">
						{post.description}
					</p>

					{/* Meta */}
					<div className="flex items-center gap-4 text-sm text-gray-400 dark:text-primary-500">
						<span className="flex items-center gap-1.5">
							<Calendar size={14} />
							{new Date(post.date).toLocaleDateString("en-US", {
								month: "long",
								day: "numeric",
								year: "numeric",
							})}
						</span>
						<span className="flex items-center gap-1.5">
							<Clock size={14} />
							{post.readingTime}
						</span>
					</div>
				</div>

				{/* Thumbnail */}
				{post.thumbnail && (
					<div className="relative w-full aspect-video rounded-2xl overflow-hidden mb-10">
						<Image
							src={post.thumbnail}
							alt={post.title}
							fill
							sizes="(max-width: 768px) 100vw, 50vw"
							className="object-cover"
						/>
					</div>
				)}

				<Underline className="mb-10 w-full bg-linear-to-r" />

				{/* MDX Content */}
				<div className="prose-blog">
					<MDXRemote
						source={post.content}
						components={{
							table: (props) => (
								<div className="overflow-x-auto">
									<table {...props} />
								</div>
							),
						}}
						options={{
							mdxOptions: {
								remarkPlugins: [remarkGfm],
								rehypePlugins: [
									rehypeSlug,
									[rehypeAutolinkHeadings, { behavior: "wrap" }],
									[rehypePrettyCode, { theme: "github-dark" }],
								],
							},
						}}
					/>
				</div>

				<Underline className="mb-6 w-full bg-linear-to-l" />

				<ShareBar title={post.title} />
			</div>

			{/* Previous / Next navigation */}
			{(prevPost || nextPost) && (
				<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
					{prevPost ? (
						<Link
							href={`/blogs/${prevPost.slug}`}
							className="group rounded-2xl border border-secondary-400/30 dark:bg-primary-950/60 p-5 transition-colors hover:border-secondary-500/50">
							<span className="text-xs text-gray-400 dark:text-primary-500 flex items-center gap-1 mb-2">
								<ArrowLeft size={12} /> Previous
							</span>
							<span className="text-sm font-semibold dark:text-white group-hover:text-secondary-400 transition-colors line-clamp-1">
								{prevPost.title}
							</span>
						</Link>
					) : (
						<div />
					)}
					{nextPost ? (
						<Link
							href={`/blogs/${nextPost.slug}`}
							className="group rounded-2xl border border-secondary-400/30 dark:bg-primary-950/60 p-5 text-right transition-colors hover:border-secondary-500/50">
							<span className="text-xs text-gray-400 dark:text-primary-500 flex items-center gap-1 justify-end mb-2">
								Next <ArrowRight size={12} />
							</span>
							<span className="text-sm font-semibold dark:text-white group-hover:text-secondary-400 transition-colors line-clamp-1">
								{nextPost.title}
							</span>
						</Link>
					) : (
						<div />
					)}
				</div>
			)}

			{/* Related Posts */}
			{relatedPosts.length > 0 && (
				<div className="mt-12">
					<h3 className="text-xl font-semibold dark:text-white mb-6">Related Posts</h3>
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
						{relatedPosts.map((rp, i) => (
							<BlogCard key={rp.slug} post={rp} index={i} />
						))}
					</div>
				</div>
			)}
		</article>
	);
}

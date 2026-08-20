import CornerAccent from "@/components/corner-accent";
import Underline from "@/components/underline";
import { ArrowLeft, Calendar, Clock } from "lucide-react";
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

interface BlogDetailPageProps {
	post: BlogPost;
}

export default function BlogDetailPage({ post }: BlogDetailPageProps) {
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
								{tag}
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
		</article>
	);
}

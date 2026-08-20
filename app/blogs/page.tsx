import { BlogsPage } from "@/features/blogs";
import { getAllBlogs } from "@/lib/blogs";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Blogs | Ye Min Aung",
	description:
		"Thoughts on web development, React, Next.js, and things I'm learning along the way.",
	openGraph: {
		title: "Blog | Ye Min Aung",
		description:
			"Thoughts on web development, React, Next.js, and things I'm learning along the way.",
		url: "https://yeminaung-dev.vercel.app/blogs",
		siteName: "Ye Min Aung's Devfolio",
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Blog | Ye Min Aung",
		description:
			"Thoughts on web development, React, Next.js, and things I'm learning along the way.",
	},
};

export default function Page() {
	const blogs = getAllBlogs();
	return <BlogsPage blogs={blogs} />;
}

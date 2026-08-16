import { AboutMePage } from "@/features/about-me";
import type { Metadata } from "next";

const BASE = "https://yeminaung-dev.vercel.app";

export const metadata: Metadata = {
	title: "About Me | Ye Min Aung",
	description:
		"Learn about Ye Min Aung — a Junior Web Developer and ECE student at MIIT, skilled in React, Next.js, Laravel, and modern web technologies.",
	alternates: { canonical: `${BASE}/about-me` },
	openGraph: {
		title: "About Me | Ye Min Aung",
		description:
			"Learn about Ye Min Aung — a Junior Web Developer and ECE student at MIIT.",
		url: `${BASE}/about-me`,
		images: [
			{
				url: `${BASE}/devfolio.png`,
				width: 1200,
				height: 630,
				alt: "Ye Min Aung Devfolio",
			},
		],
	},
	twitter: {
		title: "About Me | Ye Min Aung",
		description:
			"Learn about Ye Min Aung — a Junior Web Developer and ECE student at MIIT.",
		images: [`${BASE}/devfolio.png`],
	},
};

export default function AboutMe() {
	return <AboutMePage />;
}

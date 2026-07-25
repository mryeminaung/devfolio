import { AboutMePage } from "@/features/about-me";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "About Me | Ye Min Aung",
	description:
		"Learn about Ye Min Aung — a Junior Web Developer and ECE student at MIIT, skilled in React, Next.js, Laravel, and modern web technologies.",
	openGraph: {
		title: "About Me | Ye Min Aung",
		description:
			"Learn about Ye Min Aung — a Junior Web Developer and ECE student at MIIT.",
	},
	twitter: {
		title: "About Me | Ye Min Aung",
		description:
			"Learn about Ye Min Aung — a Junior Web Developer and ECE student at MIIT.",
	},
};

export default function AboutMe() {
	return <AboutMePage />;
}

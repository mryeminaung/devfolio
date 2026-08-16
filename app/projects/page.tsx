import { ProjectsPage } from "@/features/projects";
import type { Metadata } from "next";

const BASE = "https://yeminaung-dev.vercel.app";

export const metadata: Metadata = {
	title: "Projects | Ye Min Aung",
	description:
		"Explore the portfolio of Ye Min Aung — full-stack web applications and open-source projects built with React, Next.js, Laravel, and more.",
	alternates: { canonical: `${BASE}/projects` },
	openGraph: {
		title: "Projects | Ye Min Aung",
		description: "Explore the portfolio of Ye Min Aung — full-stack web applications and open-source projects.",
		url: `${BASE}/projects`,
		images: [{ url: `${BASE}/devfolio.png`, width: 1200, height: 630, alt: "Ye Min Aung Projects" }],
	},
	twitter: {
		title: "Projects | Ye Min Aung",
		description: "Explore the portfolio of Ye Min Aung — full-stack web applications and open-source projects.",
		images: [`${BASE}/devfolio.png`],
	},
};

export default function Projects() {
	return <ProjectsPage />;
}

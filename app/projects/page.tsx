import { ProjectsPage } from "@/features/projects";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Projects | Ye Min Aung",
	description:
		"Explore the portfolio of Ye Min Aung — full-stack web applications, Android apps, and open-source projects built with React, Next.js, Laravel, and more.",
	openGraph: {
		title: "Projects | Ye Min Aung",
		description:
			"Explore the portfolio of Ye Min Aung — full-stack web applications, Android apps, and open-source projects.",
	},
	twitter: {
		title: "Projects | Ye Min Aung",
		description:
			"Explore the portfolio of Ye Min Aung — full-stack web applications, Android apps, and open-source projects.",
	},
};

export default function Projects() {
	return <ProjectsPage />;
}

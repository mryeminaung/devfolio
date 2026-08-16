import AchievementsPage from "@/features/achievements/achievements-page";
import type { Metadata } from "next";

const BASE = "https://yeminaung-dev.vercel.app";

export const metadata: Metadata = {
	title: "Achievements | Ye Min Aung",
	description:
		"Certificates, key achievements, and project experiences of Ye Min Aung — Junior Web Developer.",
	alternates: { canonical: `${BASE}/achievements` },
	openGraph: {
		title: "Achievements | Ye Min Aung",
		description: "Certificates, key achievements, and project experiences of Ye Min Aung.",
		url: `${BASE}/achievements`,
		images: [{ url: `${BASE}/devfolio.png`, width: 1200, height: 630, alt: "Ye Min Aung Achievements" }],
	},
	twitter: {
		title: "Achievements | Ye Min Aung",
		description: "Certificates, key achievements, and project experiences of Ye Min Aung.",
		images: [`${BASE}/devfolio.png`],
	},
};

export default function Achievements() {
	return <AchievementsPage />;
}

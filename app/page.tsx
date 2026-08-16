import { HomePage } from "@/features/home";
import type { Metadata } from "next";

const BASE = "https://yeminaung-dev.vercel.app";

export const metadata: Metadata = {
	alternates: { canonical: BASE },
	openGraph: {
		url: BASE,
		images: [{ url: `${BASE}/devfolio.png`, width: 1200, height: 630, alt: "Ye Min Aung Devfolio" }],
	},
	twitter: {
		images: [`${BASE}/devfolio.png`],
	},
};

export default function Home() {
	return <HomePage />;
}

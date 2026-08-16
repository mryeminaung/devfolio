import { ContactMePage } from "@/features/contact-me";
import type { Metadata } from "next";

const BASE = "https://yeminaung-dev.vercel.app";

export const metadata: Metadata = {
	title: "Contact Me | Ye Min Aung",
	description:
		"Get in touch with Ye Min Aung — hire me for web development projects, collaborate on open source, or just say hello.",
	alternates: { canonical: `${BASE}/contact-me` },
	openGraph: {
		title: "Contact Me | Ye Min Aung",
		description: "Get in touch with Ye Min Aung — hire me for web development projects or just say hello.",
		url: `${BASE}/contact-me`,
		images: [{ url: `${BASE}/devfolio.png`, width: 1200, height: 630, alt: "Ye Min Aung Contact" }],
	},
	twitter: {
		title: "Contact Me | Ye Min Aung",
		description: "Get in touch with Ye Min Aung — hire me for web development projects or just say hello.",
		images: [`${BASE}/devfolio.png`],
	},
};

export default function ContactMe() {
	return <ContactMePage />;
}

import { ContactMePage } from "@/features/contact-me";
import type { Metadata } from "next";

export const metadata: Metadata = {
	title: "Contact Me | Ye Min Aung",
	description:
		"Get in touch with Ye Min Aung — hire me for web development projects, collaborate on open source, or just say hello.",
	openGraph: {
		title: "Contact Me | Ye Min Aung",
		description:
			"Get in touch with Ye Min Aung — hire me for web development projects, collaborate on open source, or just say hello.",
	},
	twitter: {
		title: "Contact Me | Ye Min Aung",
		description:
			"Get in touch with Ye Min Aung — hire me for web development projects, collaborate on open source, or just say hello.",
	},
};

export default function ContactMe() {
	return <ContactMePage />;
}

import { type LucideIcon } from "lucide-react";

export type Achievement = {
	icon: LucideIcon;
	title: string;
	description: string;
	color: "cyan" | "magenta" | "purple";
};

export interface Certificate {
	slug: string;
	title: string;
	issuer: string;
	date: string;
	image: string;
	description: string;
	story: string;
	skills: string[];
	resources?: { title: string; url: string }[];
	credentialUrl?: string;
}

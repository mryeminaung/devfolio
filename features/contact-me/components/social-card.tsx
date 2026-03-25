"use client";

import CornerAccent from "@/components/corner-accent";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import type { SocialIconName, SocialLink } from "../constants/social-links";

const iconMap: Record<SocialIconName, typeof Github> = {
	github: Github,
	linkedin: Linkedin,
	twitter: Twitter,
	instagram: Instagram,
};

export default function SocialCard({ social }: { social: SocialLink }) {
	const Icon = iconMap[social.iconName];

	return (
		<Link
			href={social.url}
			target="_blank"
			rel="noopener noreferrer"
			className={`flex relative overflow-hidden items-center gap-3 p-4 dark:bg-primary-950 border border-cyan-400/30 rounded-xl hover:border-cyan-400/50 hover:shadow-cyan-500/20 shadow-xs transition-all group hover:-translate-y-1.25`}>
			<CornerAccent position="top-right" />
			<CornerAccent position="bottom-left" />
			<Icon className={`w-4 h-4 md:w-6 md:h-6 dark:text-white`} />
			<span className="dark:text-white text-xs md:text-base font-medium">
				{social.name}
			</span>
		</Link>
	);
}

"use client";

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
			className={`flex items-center gap-3 p-4 bg-slate-950 border border-cyan-400/30 rounded-xl hover:border-cyan-400/50 hover:shadow-cyan-500/20 shadow-xs transition-all group`}>
			<Icon className={`w-6 h-6 text-white`} />
			<span className="text-white font-semibold">{social.name}</span>
		</Link>
	);
}

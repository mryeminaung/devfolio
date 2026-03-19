"use client";

import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import type { SocialIconName, SocialLink } from "../constants/social-links";

const MotionLink = motion.create(Link);

const iconMap: Record<SocialIconName, typeof Github> = {
	github: Github,
	linkedin: Linkedin,
	twitter: Twitter,
	instagram: Instagram,
};

export default function SocialCard({ social }: { social: SocialLink }) {
	const Icon = iconMap[social.iconName];

	return (
		<MotionLink
			initial={{ opacity: 0, y: 14 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.35 }}
			transition={{ duration: 0.32, ease: "easeOut" }}
			whileHover={{ y: -2 }}
			whileTap={{ scale: 0.98 }}
			href={social.url}
			target="_blank"
			rel="noopener noreferrer"
			className={`flex items-center gap-3 p-4 bg-slate-950 border border-${social.color}-400/30 rounded-xl hover:border-${social.color}-400/50 hover:shadow-${social.color}-500/20 shadow-lg transition-all group`}>
			<Icon className={`w-6 h-6 text-white`} />
			<span className="text-white font-semibold">{social.name}</span>
		</MotionLink>
	);
}

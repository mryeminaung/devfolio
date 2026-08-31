"use client";

import CornerAccent from "@/components/corner-accent";
import { Github, Instagram, Linkedin, Twitter } from "lucide-react";
import { motion } from "motion/react";
import Link from "next/link";
import type { SocialIconName, SocialLink } from "../constants/social-links";

const iconMap: Record<SocialIconName, typeof Github> = {
	github: Github,
	linkedin: Linkedin,
	twitter: Twitter,
	instagram: Instagram,
};

export default function SocialCard({
	social,
	index = 0,
}: {
	social: SocialLink;
	index?: number;
}) {
	const Icon = iconMap[social.iconName];

	return (
		<motion.div
			initial={{ y: 28, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
			transition={{
				duration: 0.5,
				delay: index * 0.1,
				ease: [0.22, 1, 0.36, 1],
			}}
			viewport={{ once: true, amount: 0.2 }}>
			<Link
				href={social.url}
				target="_blank"
				rel="noopener noreferrer"
				className={`flex relative overflow-hidden items-center gap-3 p-4 bg-white dark:bg-primary-950 border border-cyan-400/30 rounded-xl hover:border-cyan-400/50 hover:shadow-cyan-500/20 shadow-xs transition-[border-color,box-shadow,background-color] duration-300 group transform-gpu`}>
				<CornerAccent position="top-right" />
				<CornerAccent position="bottom-left" />
				<Icon className={`w-4 h-4 md:w-6 md:h-6 dark:text-white`} />
				<span className="dark:text-white text-xs md:text-base font-medium">
					{social.name}
				</span>
			</Link>
		</motion.div>
	);
}

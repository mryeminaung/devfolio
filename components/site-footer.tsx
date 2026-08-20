"use client";

import { motion } from "motion/react";

import { Github, Linkedin, Mail, Twitter } from "lucide-react";
import Link from "next/link";
import CornerAccent from "./corner-accent";

export default function SiteFooter() {
	const socialLinks = [
		{ icon: Github, href: "https://github.com/mryeminaung", label: "GitHub" },
		{
			icon: Linkedin,
			href: "https://linkedin.com/in/mryeminaung",
			label: "LinkedIn",
		},
		{
			icon: Twitter,
			href: "https://twitter.com/mryeminaung",
			label: "Twitter",
		},
		{ icon: Mail, href: "mailto:yeminaung.dev@gmail.com", label: "Email" },
	];

	return (
		<motion.footer
			initial={{ y: 40, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
			transition={{
				duration: 0.55,
				delay: 0.12,
				ease: [0.22, 1, 0.36, 1],
			}}
			viewport={{ once: true, amount: 0.2 }}
			className="max-w-7xl mx-auto w-full py-5 mt-auto px-3 lg:px-0">
			<div className="bg-white dark:bg-primary-950 backdrop-blur-md border dark:border-secondary-500/30 relative overflow-hidden border-secondary-300 rounded-xl px-4 sm:px-6 lg:px-8 py-4">
				<CornerAccent position="top-left" />
				<CornerAccent position="bottom-right" />
				<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
					<p className="text-sm text-black dark:text-gray-400 flex items-center gap-1.5 order-2 sm:order-1">
						© 2026,{" "}
						<Link
							href="https://github.com/mryeminaung"
							target="_blank"
							rel="noopener noreferrer"
							className="hover:underline underline-offset-4 hover:text-secondary-400 transition-colors">
							Ye Min Aung
						</Link>
					</p>

					{/* Social Links */}
					<div className="flex items-center gap-3 order-1 sm:order-2">
						{socialLinks.map((social, index) => {
							const Icon = social.icon;
							return (
								<Link
									key={index}
									href={social.href}
									target="_blank"
									rel="noopener noreferrer"
									aria-label={social.label}
									className="w-9 h-9 rounded-full dark:bg-gray-900/50 border dark:border-secondary-400/20 flex items-center justify-center  bg-secondary-400/10 hover:border-secondary-400 transition-all text-secondary-400 hover:-translate-y-1.25">
									<Icon className="w-4 h-4" />
								</Link>
							);
						})}
					</div>
				</div>
			</div>
		</motion.footer>
	);
}

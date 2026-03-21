"use client";

import { Github, Heart, Linkedin, Mail, Twitter } from "lucide-react";
import { motion } from "motion/react";

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
		{ icon: Mail, href: "mailto:yeminaung.dev@gamil.com", label: "Email" },
	];

	return (
		<footer className="">
			<div className="max-w-7xl mx-auto">
				<div className="bg-slate-950/30 backdrop-blur-md border border-cyan-500/10 rounded-xl px-4 sm:px-6 lg:px-8 py-4">
					<div className="flex flex-col sm:flex-row items-center justify-between gap-4">
						<p className="text-sm text-gray-400 flex items-center gap-1.5 order-2 sm:order-1">
							Made with{" "}
							<Heart className="w-4 h-4 text-magenta-500 fill-magenta-500 animate-pulse" />{" "}
							by <b>Ye Min Aung</b>
						</p>

						{/* Social Links */}
						<div className="flex items-center gap-3 order-1 sm:order-2">
							{socialLinks.map((social, index) => {
								const Icon = social.icon;
								return (
									<motion.a
										key={index}
										href={social.href}
										target="_blank"
										rel="noopener noreferrer"
										aria-label={social.label}
										whileHover={{ scale: 1.1, y: -2 }}
										whileTap={{ scale: 0.95 }}
										className="w-9 h-9 rounded-full bg-gray-900/50 border border-cyan-400/20 flex items-center justify-center hover:bg-cyan-400/10 hover:border-cyan-400 transition-all text-cyan-400">
										<Icon className="w-4 h-4" />
									</motion.a>
								);
							})}
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}

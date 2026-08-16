"use client";

import CornerAccent from "@/components/corner-accent";
import { motion } from "motion/react";
import Link from "next/link";
import { Mail } from "lucide-react";

export default function CtaSection() {
	return (
		<motion.div
			initial={{ y: 30, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
			viewport={{ once: true, amount: 0.4 }}
			className="relative overflow-hidden rounded-3xl border border-secondary-400/30 dark:bg-primary-950/60 p-10 md:p-16 text-center mt-16 mb-4">
			<CornerAccent position="top-left" />
			<CornerAccent position="top-right" />
			<CornerAccent position="bottom-left" />
			<CornerAccent position="bottom-right" />

			{/* Subtle glow */}
			<div className="absolute inset-0 bg-gradient-to-br from-secondary-400/5 via-transparent to-transparent pointer-events-none" />

			<h2 className="text-2xl md:text-4xl font-bold dark:text-white mb-4 relative">
				Let's build something together
			</h2>
			<p className="text-gray-500 dark:text-primary-400 text-sm md:text-base max-w-xl mx-auto mb-8 relative">
				I'm open to freelance work, internships, and full-time roles. If you
				have a project in mind or just want to say hi — my inbox is always open.
			</p>
			<Link
				href="/contact-me"
				className="inline-flex items-center gap-2.5 px-8 py-3 rounded-xl border border-secondary-400/60 dark:bg-primary-950 bg-white hover:bg-gray-50 dark:hover:bg-primary-900 font-semibold text-sm transition-all duration-200 dark:text-white hover:border-secondary-400 hover:shadow-md hover:shadow-secondary-400/20 relative">
				<CornerAccent position="top-left" size={12} />
				<CornerAccent position="bottom-right" size={12} />
				<Mail size={16} />
				Get in touch
			</Link>
		</motion.div>
	);
}

"use client";

import CornerAccent from "@/components/corner-accent";
import { BookOpen, Cloud, Layers, Smartphone } from "lucide-react";
import { motion } from "motion/react";

const items = [
	{
		icon: Layers,
		title: "Data Analytics",
		description:
			"Exploring data processing, visualization, and analytical techniques to turn data into meaningful insights.",
		corner1: "top-left" as const,
		corner2: "bottom-right" as const,
	},
	{
		icon: Cloud,
		title: "ExpressJS",
		description:
			"Building scalable REST APIs with ExpressJS, including authentication, validation, middleware, and service-layer architecture.",
		corner1: "top-right" as const,
		corner2: "bottom-left" as const,
	},
	{
		icon: Smartphone,
		title: "React Native",
		description:
			"Building cross-platform mobile applications with React Native, TypeScript, and Expo for modern mobile experiences.",
		corner1: "bottom-left" as const,
		corner2: "top-right" as const,
	},
	{
		icon: BookOpen,
		title: "Deployment",
		description:
			"Deploying applications to production with environment configuration, hosting, CI/CD, monitoring, and scalability practices.",
		corner1: "bottom-right" as const,
		corner2: "top-left" as const,
	},
];

export default function CurrentlyLearning() {
	return (
		<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
			{items.map((item, i) => (
				<motion.div
					key={item.title}
					initial={{ y: 30, opacity: 0 }}
					whileInView={{ y: 0, opacity: 1 }}
					whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
					transition={{
						duration: 0.5,
						delay: i * 0.09,
						ease: [0.22, 1, 0.36, 1],
					}}
					viewport={{ once: true, amount: 0.2 }}
					className="relative overflow-hidden rounded-2xl border border-secondary-400/20 dark:bg-primary-950/50 p-6 hover:border-secondary-400/50 hover:shadow-md hover:shadow-secondary-400/10 transition-all duration-300 group">
					<CornerAccent position={item.corner1} />
					<CornerAccent position={item.corner2} />

					<div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-secondary-400/30 bg-secondary-400/5 text-secondary-400 group-hover:bg-secondary-400/10 transition-colors duration-300">
						<item.icon
							size={20}
							strokeWidth={1.8}
						/>
					</div>

					<h4 className="text-lg font-semibold dark:text-white mb-2">
						{item.title}
					</h4>
					<p className="text-[15px] text-gray-500 dark:text-primary-400 leading-relaxed">
						{item.description}
					</p>
				</motion.div>
			))}
		</div>
	);
}

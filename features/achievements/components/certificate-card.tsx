"use client";

import CornerAccent from "@/components/corner-accent";
import { Award } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { Certificate } from "../achievements.types";

const DIAGONALS = [
	["top-left", "bottom-right"],
	["top-right", "bottom-left"],
] as const;

export default function CertificateCard({
	cert,
	index = 0,
	onClick,
}: {
	cert: Certificate;
	index?: number;
	onClick: () => void;
}) {
	const [c1, c2] = DIAGONALS[index % 2];

	return (
		<motion.div
			initial={{ y: 28, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
			transition={{
				duration: 0.5,
				delay: index * 0.08,
				ease: [0.22, 1, 0.36, 1],
			}}
			viewport={{ once: true, amount: 0.15 }}>
			<div
				onClick={onClick}
				className="group relative overflow-hidden rounded-2xl border border-secondary-400/20 bg-white dark:bg-primary-950/50 hover:border-secondary-400/50 hover:shadow-lg hover:shadow-secondary-400/10 transition-all duration-300 flex flex-col h-full cursor-pointer">
				<CornerAccent position={c1} />
				<CornerAccent position={c2} />

				{/* Certificate image */}
				<div className="relative h-44 w-full overflow-hidden bg-primary-900/30">
					{cert.image ? (
						<Image
							src={cert.image}
							alt={cert.title}
							fill
							sizes="(max-width: 768px) 100vw, 33vw"
							className="object-cover transition-transform duration-500 group-hover:scale-105"
						/>
					) : (
						<div className="absolute inset-0 flex items-center justify-center">
							<Award
								size={48}
								className="text-secondary-400/30"
							/>
						</div>
					)}
					<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
				</div>

				<div className="p-5 flex flex-col flex-1">
					<div className="flex items-center justify-between mb-2">
						<span className="text-xs text-secondary-500 dark:text-secondary-400 font-medium">
							{cert.issuer}
						</span>
						<span className="text-xs text-gray-400 dark:text-primary-500">
							{cert.date}
						</span>
					</div>

					<h3 className="text-lg tracking-tight font-semibold dark:text-white mb-2 truncate">
						{cert.title}
					</h3>

					<p className="leading-relaxed line-clamp-2 mb-4 text-[14px] text-gray-500 dark:text-gray-400">
						{cert.description}
					</p>

					<div className="flex flex-wrap gap-1.5 mt-auto">
						{cert.skills.slice(0, 3).map((s) => (
							<span
								key={s}
								className="text-[10px] px-2 py-0.5 rounded-full border border-secondary-400/20 dark:text-secondary-400 text-secondary-600">
								{s}
							</span>
						))}
						{cert.skills.length > 3 && (
							<span className="text-[10px] px-2 py-0.5 rounded-full border border-primary-700 text-gray-400">
								+{cert.skills.length - 3}
							</span>
						)}
					</div>
				</div>
			</div>
		</motion.div>
	);
}

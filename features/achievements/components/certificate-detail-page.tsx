"use client";

import CornerAccent from "@/components/corner-accent";
import { Badge } from "@/components/ui/badge";
import { Award, BookOpen, ExternalLink, MoveLeft } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Certificate } from "../achievements.types";

export default function CertificateDetailPage({ cert }: { cert: Certificate }) {
	return (
		<div className="max-w-6xl mx-auto">
			{/* Back */}
			<Link
				href="/achievements"
				className="inline-flex items-center gap-2 text-sm text-secondary-500 dark:text-secondary-400 hover:text-secondary-400 dark:hover:text-secondary-300 mb-8 transition-colors">
				<MoveLeft size={16} />
				Back to Achievements
			</Link>

			<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 items-start">

				{/* LEFT — big cert image + meta + story */}
				<motion.div
					initial={{ y: 20, opacity: 0 }}
					animate={{ y: 0, opacity: 1 }}
					transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
					className="lg:col-span-2 flex flex-col gap-6">

					{/* Certificate image */}
					<div className="relative overflow-hidden rounded-2xl border border-secondary-400/30 dark:bg-primary-950/60">
						<CornerAccent position="top-left" />
						<CornerAccent position="bottom-right" />

						<div className="relative w-full h-96 sm:h-[28rem]">
							{cert.image ? (
								<Image src={cert.image} alt={cert.title} fill className="object-contain" />
							) : (
								<div className="absolute inset-0 flex items-center justify-center dark:bg-primary-900/30">
									<Award size={56} className="text-secondary-400/40" />
								</div>
							)}
							<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
							<div className="absolute bottom-0 left-0 right-0 p-6">
								<div className="flex flex-wrap gap-2 mb-2">
									<Badge variant="outline" className="border-secondary-400/60 text-secondary-300 bg-black/40 backdrop-blur-sm text-xs">
										{cert.issuer}
									</Badge>
									<Badge variant="outline" className="border-white/20 text-white/70 bg-black/40 backdrop-blur-sm text-xs">
										{cert.date}
									</Badge>
								</div>
								<h1 className="text-xl sm:text-2xl font-bold text-white leading-snug">
									{cert.title}
								</h1>
							</div>
						</div>

						<div className="p-6">
							<p className="text-sm text-gray-500 dark:text-primary-400 leading-relaxed">
								{cert.description}
							</p>
							{cert.credentialUrl && (
								<Link
									href={cert.credentialUrl}
									target="_blank"
									rel="noopener noreferrer"
									className="inline-flex items-center gap-1.5 mt-4 text-xs text-secondary-400 hover:text-secondary-300 transition-colors">
									<ExternalLink size={12} /> Verify credential
								</Link>
							)}
						</div>
					</div>

					{/* Story */}
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
						className="relative overflow-hidden rounded-2xl border border-secondary-400/20 dark:bg-primary-950/50 p-6 md:p-8">
						<CornerAccent position="top-right" />
						<CornerAccent position="bottom-left" />

						<h2 className="text-base font-semibold dark:text-white mb-5 flex items-center gap-2">
							<BookOpen size={16} className="text-secondary-400" />
							How I learned it
						</h2>
						<div className="space-y-4">
							{cert.story.split("\n\n").map((para, i) => (
								<p key={i} className="text-sm md:text-base text-gray-600 dark:text-primary-300 leading-relaxed">
									{para}
								</p>
							))}
						</div>
					</motion.div>
				</motion.div>

				{/* RIGHT — skills + resources sidebar */}
				<div className="flex flex-col gap-6">

					{/* Skills */}
					<motion.div
						initial={{ y: 20, opacity: 0 }}
						animate={{ y: 0, opacity: 1 }}
						transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
						className="relative overflow-hidden rounded-2xl border border-secondary-400/20 dark:bg-primary-950/50 p-6">
						<CornerAccent position="top-left" />

						<h2 className="text-base font-semibold dark:text-white mb-4">Skills Validated</h2>
						<div className="flex flex-wrap gap-2">
							{cert.skills.map((s) => (
								<span
									key={s}
									className="px-3 py-1 text-xs rounded-full border border-secondary-400/30 bg-secondary-400/5 dark:text-secondary-400 text-secondary-600">
									{s}
								</span>
							))}
						</div>
					</motion.div>

					{/* Resources */}
					{cert.resources && cert.resources.length > 0 && (
						<motion.div
							initial={{ y: 20, opacity: 0 }}
							animate={{ y: 0, opacity: 1 }}
							transition={{ duration: 0.5, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
							className="relative overflow-hidden rounded-2xl border border-secondary-400/20 dark:bg-primary-950/50 p-6">
							<CornerAccent position="bottom-right" />

							<h2 className="text-base font-semibold dark:text-white mb-4">Resources I Used</h2>
							<ul className="space-y-3">
								{cert.resources.map((r) => (
									<li key={r.title}>
										<Link
											href={r.url}
											target="_blank"
											rel="noopener noreferrer"
											className="flex items-start gap-2.5 text-sm text-gray-500 dark:text-primary-400 hover:text-secondary-400 dark:hover:text-secondary-400 transition-colors group">
											<ExternalLink size={13} className="mt-0.5 shrink-0 text-secondary-400/60 group-hover:text-secondary-400 transition-colors" />
											{r.title}
										</Link>
									</li>
								))}
							</ul>
						</motion.div>
					)}
				</div>

			</div>
		</div>
	);
}

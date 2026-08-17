"use client";

import CornerAccent from "@/components/corner-accent";
import { Award, ExternalLink, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Certificate } from "../achievements.types";

interface CertificateModalProps {
	cert: Certificate | null;
	isOpen: boolean;
	onClose: () => void;
}

export default function CertificateModal({
	cert,
	isOpen,
	onClose,
}: CertificateModalProps) {
	if (!cert) return null;

	return (
		<AnimatePresence>
			{isOpen && (
				<>
					{/* Backdrop */}
					<motion.div
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						transition={{ duration: 0.2 }}
						onClick={onClose}
						className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50"
					/>

					{/* Modal */}
					<motion.div
						initial={{ opacity: 0, scale: 0.95, y: 20 }}
						animate={{ opacity: 1, scale: 1, y: 0 }}
						exit={{ opacity: 0, scale: 0.95, y: 20 }}
						transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
						className="fixed inset-0 z-50 flex items-center justify-center p-4"
						onClick={onClose}>
						<div
							onClick={(e) => e.stopPropagation()}
							className="relative w-full max-w-lg overflow-hidden rounded-2xl border border-secondary-400/30 dark:bg-primary-950/95 bg-white shadow-2xl shadow-secondary-400/20">
							<CornerAccent position="top-left" />
							<CornerAccent position="bottom-right" />

							{/* Close button */}
							<button
								onClick={onClose}
								className="absolute top-4 right-4 z-10 p-1.5 rounded-full bg-black/40 text-white hover:bg-black/60 transition-colors">
								<X size={18} />
							</button>

							{/* Certificate image */}
							<div className="relative h-64 w-full overflow-hidden">
								{cert.image ? (
									<Image
										src={cert.image}
										alt={cert.title}
										fill
										className="object-contain"
									/>
								) : (
									<div className="absolute inset-0 flex items-center justify-center dark:bg-primary-900/30 bg-gray-100">
										<Award size={64} className="text-secondary-400/40" />
									</div>
								)}
								<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
								<div className="absolute bottom-0 left-0 right-0 p-6">
									<div className="flex flex-wrap gap-2 mb-2">
										<span className="px-3 py-1 text-xs font-medium text-white/90 bg-secondary-500/30 border border-secondary-400/30 rounded-full backdrop-blur-sm">
											{cert.issuer}
										</span>
										<span className="px-3 py-1 text-xs font-medium text-white/70 bg-black/30 border border-white/20 rounded-full backdrop-blur-sm">
											{cert.date}
										</span>
									</div>
									<h3 className="text-xl font-bold text-white leading-snug truncate">
										{cert.title}
									</h3>
								</div>
							</div>

							{/* Content */}
							<div className="p-6">
								<p className="text-sm text-gray-500 dark:text-primary-400 leading-relaxed mb-4">
									{cert.description}
								</p>

								{/* Skills */}
								<div className="flex flex-wrap gap-2 mb-6">
									{cert.skills.slice(0, 4).map((s) => (
										<span
											key={s}
											className="text-[11px] px-2.5 py-1 rounded-full border border-secondary-400/20 dark:text-secondary-400 text-secondary-600">
											{s}
										</span>
									))}
									{cert.skills.length > 4 && (
										<span className="text-[11px] px-2.5 py-1 rounded-full border border-primary-700 text-gray-400">
											+{cert.skills.length - 4} more
										</span>
									)}
								</div>

								{/* Actions */}
								<div className="flex items-center gap-3">
									<Link
										href={`/achievements/certificates/${cert.slug}`}
										className="flex-1 inline-flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-medium text-white bg-secondary-500 hover:bg-secondary-600 rounded-xl transition-colors">
										View Full Details
									</Link>
									{cert.credentialUrl && (
										<a
											href={cert.credentialUrl}
											target="_blank"
											rel="noopener noreferrer"
											className="inline-flex items-center gap-1.5 px-4 py-2.5 text-sm font-medium text-secondary-400 hover:text-secondary-300 border border-secondary-400/30 hover:border-secondary-400/50 rounded-xl transition-colors">
											<ExternalLink size={14} /> Verify
										</a>
									)}
								</div>
							</div>
						</div>
					</motion.div>
				</>
			)}
		</AnimatePresence>
	);
}

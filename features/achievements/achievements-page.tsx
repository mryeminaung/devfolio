"use client";

import { ArrowDown, ArrowUp } from "lucide-react";
import { useState } from "react";
import CertificateCard from "./components/certificate-card";
import CertificateModal from "./components/certificate-modal";
import ExperienceTimeline from "./components/experience-timeline";
import KeyAchievements from "./components/key-achievements";
import { certificates } from "./constants/certificates";
import { Certificate } from "./achievements.types";

const ISSUERS = ["All", ...Array.from(new Set(certificates.map((c) => c.issuer)))];

function SectionHeading({ title }: { title: string }) {
	return (
		<div className="flex mb-12 flex-col gap-y-3">
			<h3 className="text-2xl md:text-3xl font-semibold text-center dark:text-white">
				{title}
			</h3>
			<span className="border w-37.5 rounded-full mx-auto bg-secondary-400 h-0.5 border-secondary-400" />
		</div>
	);
}

export default function AchievementsPage() {
	const [active, setActive] = useState("All");
	const [selectedCert, setSelectedCert] = useState<Certificate | null>(null);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const [sortOrder, setSortOrder] = useState<"newest" | "oldest">("newest");

	const filtered =
		active === "All" ? certificates : certificates.filter((c) => c.issuer === active);

	const sorted = [...filtered].sort((a, b) => {
		const yearA = parseInt(a.date);
		const yearB = parseInt(b.date);
		return sortOrder === "newest" ? yearB - yearA : yearA - yearB;
	});

	const handleCertClick = (cert: Certificate) => {
		setSelectedCert(cert);
		setIsModalOpen(true);
	};

	const handleCloseModal = () => {
		setIsModalOpen(false);
		setSelectedCert(null);
	};

	return (
		<section>
			{/* Key Achievements */}
			<div className="mb-20">
				<SectionHeading title="Key Achievements" />
				<KeyAchievements />
			</div>

			{/* Certificates */}
			<div className="mb-20">
				<SectionHeading title="Certificates" />

				{/* Filter tabs and sort */}
				<div className="flex flex-wrap items-center gap-3 mb-8">
					<div className="flex flex-wrap gap-2">
						{ISSUERS.map((issuer) => (
							<button
								key={issuer}
								onClick={() => setActive(issuer)}
								className={`px-4 py-1.5 rounded-full text-sm font-medium border transition-all duration-200 ${
									active === issuer
										? "border-secondary-400 bg-secondary-400/10 text-secondary-500 dark:text-secondary-400"
										: "border-primary-700 text-gray-500 dark:text-primary-400 hover:border-secondary-400/40"
								}`}>
								{issuer}
							</button>
						))}
					</div>

					{/* Sort by year */}
					<div className="flex items-center gap-2 ml-auto">
						<span className="text-xs text-gray-500 dark:text-primary-400">Sort:</span>
						<button
							onClick={() => setSortOrder("newest")}
							className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
								sortOrder === "newest"
									? "border-secondary-400 bg-secondary-400/10 text-secondary-500 dark:text-secondary-400"
									: "border-primary-700 text-gray-500 dark:text-primary-400 hover:border-secondary-400/40"
							}`}>
							<ArrowDown size={12} /> Newest
						</button>
						<button
							onClick={() => setSortOrder("oldest")}
							className={`flex items-center gap-1 px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
								sortOrder === "oldest"
									? "border-secondary-400 bg-secondary-400/10 text-secondary-500 dark:text-secondary-400"
									: "border-primary-700 text-gray-500 dark:text-primary-400 hover:border-secondary-400/40"
							}`}>
							<ArrowUp size={12} /> Oldest
						</button>
					</div>
				</div>

				{/* Grid */}
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{sorted.map((cert, i) => (
						<CertificateCard
							key={cert.slug}
							cert={cert}
							index={i}
							onClick={() => handleCertClick(cert)}
						/>
					))}
				</div>
				{sorted.length === 0 && (
					<p className="text-center text-gray-400 py-16">
						No certificates from this issuer yet.
					</p>
				)}
			</div>

			{/* Project Experience Timeline */}
			<div className="mb-5">
				<SectionHeading title="Project Experiences" />
				<ExperienceTimeline />
			</div>

			{/* Certificate Modal */}
			<CertificateModal
				cert={selectedCert}
				isOpen={isModalOpen}
				onClose={handleCloseModal}
			/>
		</section>
	);
}

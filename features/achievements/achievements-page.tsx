import CertificateCard from "./components/certificate-card";
import ExperienceTimeline from "./components/experience-timeline";
import KeyAchievements from "./components/key-achievements";
import { certificates } from "./constants/certificates";

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
				<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
					{certificates.map((cert, i) => (
						<CertificateCard key={cert.slug} cert={cert} index={i} />
					))}
				</div>
			</div>

			{/* Project Experience Timeline */}
			<div className="mb-5">
				<SectionHeading title="Project Experiences" />
				<ExperienceTimeline />
			</div>
		</section>
	);
}

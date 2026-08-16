import CornerAccent from "@/components/corner-accent";
import Underline from "@/components/underline";
import { Download } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import CurrentlyLearning from "./components/currently-learning";
import EducationSection from "./components/education-section";
import SkillsListByCategory from "./components/skills-list-by-category";

function SectionHeading({ title }: { title: string }) {
	return (
		<div className="flex mb-12 flex-col gap-y-3">
			<h3 className="text-xl md:text-2xl font-semibold dark:text-white text-center">
				{title}
			</h3>
			<span className="border w-37.5 rounded-full mx-auto bg-secondary-400 h-0.5 border-secondary-400" />
		</div>
	);
}

export default function AboutMePage() {
	return (
		<section>
			{/* Page title */}
			<div className="flex flex-col mb-10 gap-y-3">
				<h2 className="text-2xl md:text-3xl font-semibold text-center dark:text-white">
					About Me
				</h2>
				<Underline />
			</div>

			{/* Bio + photo */}
			<div className="relative overflow-hidden rounded-3xl border border-secondary-400/20 dark:bg-primary-950/40 mb-20">
				<CornerAccent position="top-left" />
				<CornerAccent position="bottom-right" />

				<div className="grid grid-cols-1 lg:grid-cols-[600px_1fr]">
					{/* Photo — full bleed left column */}
					<div className="relative min-h-72 lg:min-h-full overflow-hidden lg:rounded-l-3xl">
						<Image
							src="/me/about-me-pic.png"
							alt="Ye Min Aung - Developer"
							fill
							className="object-cover object-top"
						/>
						<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-primary-950/60" />
					</div>

					{/* Bio */}
					<div className="dark:text-white space-y-5 p-6 md:p-10">
						<h3 className="text-2xl md:text-3xl font-bold">
							Hello! I&apos;m Ye Min Aung
						</h3>
						<div className="space-y-3 text-sm md:text-base text-gray-600 dark:text-primary-300 leading-relaxed">
							<p>
								I&apos;m a passionate Junior Web Developer and final year ECE
								student at MIIT (Myanmar Institute of Information Technology).
								My journey in web development started during my studies, and
								I&apos;ve been continuously learning and building exciting
								projects ever since.
							</p>
							<p>
								I specialize in building modern web applications using React,
								Next.js, PHP, Laravel, and various databases. I believe in
								writing clean, maintainable code and creating user experiences
								that are both beautiful and functional.
							</p>
							<p>
								When I&apos;m not coding, you can find me exploring new
								technologies, working on personal projects, and constantly
								improving my skills to become a better developer. I&apos;m
								excited to graduate soon and start my professional career in web
								development.
							</p>
						</div>

						<Link
							href="/YeMinAung-CV.pdf"
							download
							className="inline-flex items-center gap-2.5 px-6 py-2.5 rounded-xl border border-secondary-400/60 dark:bg-primary-950 bg-white hover:bg-gray-50 dark:hover:bg-primary-900 font-medium text-sm transition-all duration-200 dark:text-white hover:border-secondary-400 hover:shadow-md hover:shadow-secondary-400/15 relative overflow-hidden">
							<CornerAccent
								position="top-right"
								size={12}
							/>
							<CornerAccent
								position="bottom-left"
								size={12}
							/>
							<Download size={15} />
							Download CV
						</Link>
					</div>
				</div>
			</div>

			{/* Currently Learning */}
			<div className="mb-20">
				<SectionHeading title="Currently Learning" />
				<CurrentlyLearning />
			</div>

			{/* Technical Skills */}
			<div className="mb-20">
				<SectionHeading title="Technical Skills" />
				<SkillsListByCategory />
			</div>

			{/* Education */}
			<div className="mb-5">
				<SectionHeading title="Education" />
				<EducationSection />
			</div>
		</section>
	);
}

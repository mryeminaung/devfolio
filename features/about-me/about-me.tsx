import Underline from "@/components/underline";
import Image from "next/image";
import ExperienceTimeline from "./components/experience-timeline";
import KeyAchievements from "./components/key-achievements";
import SkillsListByCategory from "./components/skills-list-by-category";

export default function AboutMePage() {
	return (
		<section>
			<div className="flex flex-col mb-10 gap-y-3">
				<h2 className="text-2xl md:text-3xl font-semibold text-center dark:text-white">
					About Me
				</h2>
				<Underline />
			</div>

			<div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-x-14 gap-y-10 mb-20">
				{/* Image Container - Simplified Modern Style */}
				<div className="relative group">
					<div className="relative rounded-2xl overflow-hidden shadow-2xl">
						<Image
							src="/about-me-pic.jpg"
							alt="Ye Min Aung - Developer"
							width={400}
							height={400}
							className="w-full h-auto object-cover"
						/>
					</div>
				</div>
				<div className="dark:text-white space-y-5">
					<h3 className="text-2xl md:text-3xl font-bold">
						Hello! I'm Ye Min Aung
					</h3>
					<div className="space-y-3">
						<p>
							I'm a passionate Junior Web Developer and final year ECE student
							at MIIT (Myanmar Institute of Information Technology). My journey
							in web development started during my studies, and I've been
							continuously learning and building exciting projects ever since.
						</p>
						<p>
							I specialize in building modern web applications using React,
							Next.js, PHP, Laravel, and various databases. I believe in writing
							clean, maintainable code and creating user experiences that are
							both beautiful and functional.
						</p>
						<p>
							When I'm not coding, you can find me exploring new technologies,
							working on personal projects, and constantly improving my skills
							to become a better developer. I'm excited to graduate soon and
							start my professional career in web development.
						</p>
					</div>
				</div>
			</div>

			{/* techinical skills section */}
			<div className="mb-20">
				<div className="flex my-8 flex-col gap-y-3">
					<h3 className="text-xl md:text-2xl font-semibold dark:text-white text-center">
						Technical Skills
					</h3>
					<span className="border w-37.5 rounded-full mx-auto bg-secondary-400 h-0.5 border-secondary-400"></span>
				</div>
				<SkillsListByCategory />
			</div>

			{/* key achievements section */}
			<div className="mb-20">
				<div className="flex mb-16 flex-col gap-y-3">
					<h3 className="text-xl md:text-2xl font-semibold dark:text-white text-center">
						Key Achievements
					</h3>
					<span className="border w-37.5 rounded-full mx-auto bg-secondary-400 h-0.5 border-secondary-400"></span>
				</div>
				<KeyAchievements />
			</div>

			{/* experience timeline section */}
			<div className="mb-5">
				<div className="flex mb-16 flex-col gap-y-3">
					<h3 className="text-xl md:text-2xl font-semibold dark:text-white text-center">
						Project Experiences
					</h3>
					<span className="border w-37.5 rounded-full mx-auto bg-secondary-400 h-0.5 border-secondary-400"></span>
				</div>
				<ExperienceTimeline />
			</div>
		</section>
	);
}

import Image from "next/image";
import ExperienceTimeline from "./components/experience-timeline";
import KeyAchievements from "./components/key-achievements";
import SkillsSlider from "./components/skills-slider";

export default function AboutMePage() {
	return (
		<div>
			<h2 className="text-4xl md:text-5xl text-center mt-5 mb-10 text-white">
				About Me
			</h2>
			<div className="grid grid-cols-1 items-center lg:grid-cols-2 gap-x-14 gap-y-10 mb-10">
				<div className="">
					<Image
						src="https://images.unsplash.com/photo-1604964432806-254d07c11f32?q=80&w=880&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
						alt="Professional Worker"
						// fill
						loading="eager"
						width={100}
						height={100}
						className="h-96 w-full object-center rounded-xl"
					/>
				</div>
				<div className=" text-white space-y-5">
					<h4 className="text-2xl md:text-3xl font-semibold">
						Hello! I'm Ye Min Aung
					</h4>
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

			<SkillsSlider />

			<KeyAchievements />

			<ExperienceTimeline />
		</div>
	);
}

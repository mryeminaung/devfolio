import CornerAccent from "@/components/corner-accent";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink, Terminal } from "lucide-react";
import Link from "next/link";
import Typewriter from "./type-writer";

export default function HeroInfo() {
	return (
		<div className="space-y-5">
			<Badge
				// initial={{ scale: 0 }}
				// animate={{ scale: 1 }}
				// transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
				className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 mb-5 backdrop-blur-sm p-3 bg-slate-900 dark:text-white">
				<Terminal className="w-3.5 h-3.5" />
				<span className="text-[12px] tracking-wider">Available For work</span>
			</Badge>

			<div className="space-y-3">
				<h1 className="text-xl md:text-2xl font-semibold tracking-tight">
					Hi there!, My name is
				</h1>
				<h1 className="text-2xl md:text-3xl font-bold gap-x-2 tracking-tight flex items-center">
					Ye Min Aung,
					<Typewriter words={["Junior Web Developer", "ECE Student @ MIIT"]} />
				</h1>
				<p>
					I'm a Junior Web Developer skilled in React, Next.js, and Laravel. I
					enjoy building fast, user-friendly web applications and continuously
					learning new technologies to deliver impactful digital solutions.
				</p>
			</div>

			<div className="flex items-center gap-5">
				<Link
					href="/my_resume.pdf"
					download
					className="py-2.5 px-7 hover:cursor-pointer rounded-xl border border-secondary-400/80 gap-x-3 relative overflow-hidden hover:bg-gray-100 dark:bg-primary-900 inline-flex dark:hover:bg-primary-950 bg-white font-medium text-black dark:text-white">
					<CornerAccent position="top-left" />
					<CornerAccent position="bottom-right" />
					Download CV <Download size={20} />
				</Link>

				<Link
					href={"/projects"}
					className="py-2.5 px-7 hover:cursor-pointer rounded-xl border border-secondary-400/80 gap-x-3 relative overflow-hidden hover:bg-gray-100 dark:bg-primary-900 inline-flex dark:hover:bg-primary-950 bg-white font-medium text-black dark:text-white">
					<CornerAccent position="top-left" />
					<CornerAccent position="bottom-right" />
					View Projects <ExternalLink size={18} />
				</Link>
			</div>
		</div>
	);
}

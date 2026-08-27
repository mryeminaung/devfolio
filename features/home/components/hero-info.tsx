"use client";

import CornerAccent from "@/components/corner-accent";
import { Badge } from "@/components/ui/badge";
import { Download, ExternalLink, Terminal } from "lucide-react";
import Link from "next/link";
import Typewriter from "./type-writer";

export default function HeroInfo() {
	return (
		<div className="space-y-5">
			<div className="flex justify-start">
				<Badge className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-cyan-400/30 mb-5 backdrop-blur-sm p-3 bg-slate-900 dark:text-white">
					<Terminal className="w-3.5 h-3.5" />
					<span className="text-[12px] tracking-wider">Available For work</span>
				</Badge>
			</div>

			<div className="space-y-3">
				<p className="text-md md:text-xl lg:text-2xl font-semibold tracking-tight">
					Hi there! My name is Ye Min Aung,
				</p>
				<h1 className="text-xl md:text-2xl lg:text-3xl font-bold gap-x-2 tracking-tight flex">
					<Typewriter
						words={["a Junior FullStack Developer", "an ECE Student @ MIIT"]}
					/>
				</h1>

				<p className="text-sm lg:text-base">
					Skilled in React, Next.js, and Laravel. I enjoy building fast,
					user-friendly web applications and continuously learning new
					technologies to deliver impactful digital solutions.
				</p>
			</div>

			<div className="flex items-center justify-center md:justify-start flex-col md:flex-row gap-5">
				<Link
					href="/cv/YeMinAung-CV.pdf"
					download
					className="w-full justify-center md:w-fit py-2.5 px-7 hover:cursor-pointer rounded-xl border border-secondary-400/80 gap-x-3 relative overflow-hidden hover:bg-gray-100 dark:bg-primary-950 inline-flex dark:hover:bg-primary-900 bg-white font-medium text-black text-sm dark:text-white">
					<CornerAccent position="top-left" />
					<CornerAccent position="bottom-right" />
					Download CV <Download size={20} />
				</Link>

				{/* <Link
					href={"/projects"}
					className="w-full justify-center md:w-fit py-2.5 px-7 hover:cursor-pointer rounded-xl border border-secondary-400/80 gap-x-3 relative overflow-hidden hover:bg-gray-100 dark:bg-primary-950 inline-flex dark:hover:bg-primary-900 bg-white font-medium text-black text-sm dark:text-white">
					<CornerAccent position="top-left" />
					<CornerAccent position="bottom-right" />
					View Projects <ExternalLink size={18} />
				</Link> */}
			</div>
		</div>
	);
}

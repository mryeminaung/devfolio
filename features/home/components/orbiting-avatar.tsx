"use client";

import { OrbitingCircles } from "@/components/orbiting-circles";
import { motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";

const innerOrbit = [
	{ name: "React", logo: "/skills/react.svg" },
	{ name: "Next.js", logo: "/skills/nextjs.svg" },
	{ name: "TypeScript", logo: "/skills/typescript.svg" },
	{ name: "Tailwind CSS", logo: "/skills/tailwindcss.svg" },
	{ name: "PHP", logo: "/skills/php.svg" },
	{ name: "Laravel", logo: "/skills/laravel.svg" },
];

const outerOrbit = [
	{ name: "MySQL", logo: "/skills/mysql.svg" },
	{ name: "Docker", logo: "/skills/docker.svg" },
	{ name: "Git", logo: "/skills/git.svg" },
	{ name: "GitHub", logo: "/skills/github.svg" },
	{ name: "Kotlin", logo: "/skills/kotlin.svg" },
	{ name: "React Native", logo: "/skills/react-native.svg" },
	{ name: "Prisma", logo: "/skills/prisma.svg" },
	{ name: "Figma", logo: "/skills/figma.svg" },
];

function LogoBadge({ logo, name }: { logo: string; name: string }) {
	return (
		<div className="flex size-10 md:size-11 items-center justify-center rounded-full border border-secondary-400/30 bg-secondary-400/5 shadow-sm backdrop-blur-sm dark:bg-secondary-400/10">
			<Image
				src={logo}
				alt={name}
				width={24}
				height={24}
				className="size-5 md:size-6"
			/>
		</div>
	);
}

export default function OrbitingAvatar() {
	const [loaded, setLoaded] = useState(false);

	return (
		<div className="relative flex items-center justify-center w-[26rem] h-[26rem] md:w-96 md:h-96 sm:m-0">
			{/* Inner orbit — core technologies */}
			<OrbitingCircles
				radius={120}
				duration={25}
				// speed={0.8}
				iconSize={44}
				pathClassName="stroke-secondary-400/30 dark:stroke-secondary-400/20"
				path>
				{innerOrbit.map((tech) => (
					<LogoBadge key={tech.name} logo={tech.logo} name={tech.name} />
				))}
			</OrbitingCircles>

			{/* Outer orbit — tools & extras, reversed */}
			<OrbitingCircles
				radius={180}
				duration={35}
				// speed={0.6}
				reverse
				iconSize={44}
				pathClassName="stroke-secondary-400/30 dark:stroke-secondary-400/20"
				path>
				{outerOrbit.map((tech) => (
					<LogoBadge key={tech.name} logo={tech.logo} name={tech.name} />
				))}
			</OrbitingCircles>

			{/* Avatar — centered */}
			<div className="relative w-48 h-48 md:w-52 md:h-52 rounded-full border-2 border-cyan-400/30 overflow-hidden z-10">
				{/* Skeleton shimmer */}
				{!loaded && (
					<div className="absolute inset-0 avatar-skeleton rounded-full z-10">
						<motion.div
							className="absolute inset-0 rounded-full border-2 border-secondary-400/40"
							animate={{ scale: [1, 1.05, 1], opacity: [0.6, 0.2, 0.6] }}
							transition={{ repeat: Infinity, duration: 1.6, ease: "easeInOut" }}
						/>
					</div>
				)}

				<Image
					src="/me/home-pic.png"
					alt="Ye Min Aung"
					fill
					sizes="(max-width: 768px) 100vw, 50vw"
					loading="eager"
					fetchPriority="high"
					className={`object-cover object-center transition-opacity duration-700 ${loaded ? "opacity-100" : "opacity-0"}`}
					onLoad={() => setLoaded(true)}
				/>
			</div>
		</div>
	);
}

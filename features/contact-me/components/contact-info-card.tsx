"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { motion } from "motion/react";
import type {
	ContactInfo,
	ContactInfoIconName,
} from "../constants/contact-info";

const iconMap: Record<ContactInfoIconName, typeof Mail> = {
	mail: Mail,
	phone: Phone,
	location: MapPin,
};

const colorClasses = {
	cyan: {
		containerHover: "hover:border-cyan-500/50",
		iconBox: "border-cyan-500/20 bg-cyan-500/10 text-cyan-400",
		glow: "bg-cyan-500/5",
	},
	magenta: {
		containerHover: "hover:border-fuchsia-500/50",
		iconBox: "border-fuchsia-500/20 bg-fuchsia-500/10 text-fuchsia-400",
		glow: "bg-fuchsia-500/5",
	},
	purple: {
		containerHover: "hover:border-purple-500/50",
		iconBox: "border-purple-500/20 bg-purple-500/10 text-purple-400",
		glow: "bg-purple-500/5",
	},
} as const;

export const ContactInfoCard = ({ info }: { info: ContactInfo }) => {
	const Icon = iconMap[info.iconName];
	const palette = colorClasses[info.color];

	return (
		<motion.div
			initial={{ opacity: 0, y: 14 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, amount: 0.4 }}
			transition={{ duration: 0.35, ease: "easeOut" }}
			className={`group relative flex items-center gap-4 rounded-2xl border bg-slate-950 p-4 transition-all hover:bg-slate-900 ${palette.containerHover}`}>
			<div
				className={`flex h-14 w-14 items-center justify-center rounded-xl border transition-colors ${palette.iconBox}`}>
				<Icon
					size={24}
					strokeWidth={2}
				/>
			</div>

			<div className="flex flex-col">
				<span className="text-lg font-bold text-white">{info.title}</span>
				<span className="text-slate-400 transition-colors group-hover:text-slate-200">
					{info.value}
				</span>
			</div>
		</motion.div>
	);
};

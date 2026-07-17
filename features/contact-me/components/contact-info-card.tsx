"use client";

import CornerAccent from "@/components/corner-accent";
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

export const ContactInfoCard = ({
	info,
	index = 0,
}: {
	info: ContactInfo;
	index?: number;
}) => {
	const Icon = iconMap[info.iconName];

	return (
		<motion.div
			initial={{ y: 28, opacity: 0 }}
			whileInView={{ y: 0, opacity: 1 }}
			whileHover={{ y: -5, transition: { duration: 0.2, ease: "easeOut" } }}
			transition={{
				duration: 0.5,
				delay: index * 0.1,
				ease: [0.22, 1, 0.36, 1],
			}}
			viewport={{ once: true, amount: 0.2 }}
			className={`group relative overflow-hidden flex items-center gap-4 rounded-2xl border dark:bg-primary-950 p-4 border-secondary-400/30 shadow-xs hover:shadow-secondary-500/20 transition-[border-color,box-shadow,background-color] duration-300 transform-gpu`}>
			<CornerAccent position="top-right" />
			<CornerAccent position="bottom-left" />
			<div
				className={`flex h-10 w-10 md:h-14 md:w-14 items-center justify-center rounded-xl border transition-colors border-secondary-500/20 dark:bg-secondary-500/10 text-secondary-400`}>
				<Icon
					className="size-4 md:size-6"
					strokeWidth={2}
				/>
			</div>

			<div className="flex flex-col">
				<span className="text-base md:text-lg font-semibold dark:text-white">
					{info.title}
				</span>
				<span className="text-primary-400 text-xs md:text-base transition-colors group-hover:text-primary-500">
					{info.value}
				</span>
			</div>
		</motion.div>
	);
};

"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import type {
	ContactInfo,
	ContactInfoIconName,
} from "../constants/contact-info";

const iconMap: Record<ContactInfoIconName, typeof Mail> = {
	mail: Mail,
	phone: Phone,
	location: MapPin,
};

export const ContactInfoCard = ({ info }: { info: ContactInfo }) => {
	const Icon = iconMap[info.iconName];

	return (
		<div
			className={`group relative flex items-center gap-4 rounded-2xl border bg-slate-950 p-4 transition-all border-cyan-400/30 shadow-xs hover:shadow-cyan-500/20 text-cyan-400`}>
			<div
				className={`flex h-14 w-14 items-center justify-center rounded-xl border transition-colors border-cyan-500/20 bg-cyan-500/10 text-cyan-400`}>
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
		</div>
	);
};

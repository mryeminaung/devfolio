import { type LucideIcon } from "lucide-react";

export type Achievement = {
	icon: LucideIcon;
	title: string;
	description: string;
	color: "cyan" | "magenta" | "purple";
};

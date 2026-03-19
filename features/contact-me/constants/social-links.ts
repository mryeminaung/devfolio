export type SocialIconName = "github" | "linkedin" | "twitter" | "instagram";

export type SocialLink = {
	iconName: SocialIconName;
	name: string;
	url: string;
	color: "cyan" | "magenta" | "purple";
};

export const socialLinks: SocialLink[] = [
	{
		iconName: "github",
		name: "GitHub",
		url: "https://github.com/mryeminaung",
		color: "cyan",
	},
	{
		iconName: "linkedin",
		name: "LinkedIn",
		url: "https://linkedin.com/in/mryeminaung",
		color: "magenta",
	},
	{
		iconName: "twitter",
		name: "Twitter",
		url: "https://twitter.com/mryeminaung",
		color: "purple",
	},
	{
		iconName: "instagram",
		name: "Instagram",
		url: "https://instagram.com/mryeminaung",
		color: "cyan",
	},
];

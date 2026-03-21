export type SocialIconName = "github" | "linkedin" | "twitter" | "instagram";

export type SocialLink = {
	iconName: SocialIconName;
	name: string;
	url: string;
};

export const socialLinks: SocialLink[] = [
	{
		iconName: "github",
		name: "GitHub",
		url: "https://github.com/mryeminaung",
	},
	{
		iconName: "linkedin",
		name: "LinkedIn",
		url: "https://linkedin.com/in/mryeminaung",
	},
	{
		iconName: "twitter",
		name: "Twitter",
		url: "https://twitter.com/mryeminaung",
	},
	{
		iconName: "instagram",
		name: "Instagram",
		url: "https://instagram.com/mryeminaung",
	},
];

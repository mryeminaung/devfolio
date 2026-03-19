export type ContactInfoIconName = "mail" | "phone" | "location";

export type ContactInfoColor = "cyan" | "magenta" | "purple";

export type ContactInfo = {
	iconName: ContactInfoIconName;
	title: string;
	value: string;
	color: ContactInfoColor;
};

export const contactInfoList: ContactInfo[] = [
	{
		iconName: "mail",
		title: "Email",
		value: "yeminaung.dev@gmail.com",
		color: "cyan",
	},
	{
		iconName: "phone",
		title: "Phone",
		value: "09 - 966 233 417",
		color: "magenta",
	},
	{
		iconName: "location",
		title: "Location",
		value: "Mandalay, Myanmar",
		color: "purple",
	},
];

export type ContactInfoIconName = "mail" | "phone" | "location";

export type ContactInfo = {
	iconName: ContactInfoIconName;
	title: string;
	value: string;
};

export const contactInfoList: ContactInfo[] = [
	{
		iconName: "mail",
		title: "Email",
		value: "yeminaung.dev@gmail.com",
	},
	{
		iconName: "phone",
		title: "Phone",
		value: "09 - 966 233 417",
	},
	{
		iconName: "location",
		title: "Location",
		value: "Mandalay, Myanmar",
	},
];

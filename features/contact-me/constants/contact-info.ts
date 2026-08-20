export type ContactInfoIconName = "mail" | "phone" | "location";

export type ContactInfo = {
	iconName: ContactInfoIconName;
	title: string;
	value: string;
	href: string;
};

export const contactInfoList: ContactInfo[] = [
	{
		iconName: "mail",
		title: "Email",
		value: "yeminaung.dev@gmail.com",
		href: "mailto:yeminaung.dev@gmail.com",
	},
	{
		iconName: "phone",
		title: "Phone",
		value: "09 - 966 233 417",
		href: "tel:+959966233417",
	},
	{
		iconName: "location",
		title: "Location",
		value: "Mandalay, Myanmar",
		href: "https://www.google.com/maps/search/Mandalay+Myanmar",
	},
];

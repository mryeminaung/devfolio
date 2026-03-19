import ScrollTopBtn from "@/components/scroll-top-btn";
import AppLayout from "@/layouts/app-layout";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
	variable: "--font-geist-sans",
	subsets: ["latin"],
});

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	title: "Personal Devfolio",
	description:
		"Web Developer specializing in React, Next.js and Laravel. Building high-performance web experiences.",
	keywords: [
		"Ye Min Aung",
		"mryeminaung",
		"Frontend Developer",
		"Backend Developer",
		"Software Engineer",
		"Web Developer",
		"Full Stack Developer",
		"Developer Portfolio",
		"Myanmar Developer",
	],
	authors: [{ name: "Ye Min Aung", url: "https://github.com/mryeminaung" }],
	creator: "Ye Min Aung",
	openGraph: {
		title: "Personal Devfolio",
		description:
			"Web Developer specializing in React, Next.js and Laravel. Building high-performance web experiences.",
		url: "https://mryeminaung.dev",
		siteName: "Personal Devfolio",
		locale: "en_US",
		type: "website",
		images: ["/devfolio.png"],
	},
	twitter: {
		card: "summary_large_image",
		title: "Personal Devfolio",
		description:
			"Web Developer specializing in React, Next.js and Laravel. Building high-performance web experiences.",
		creator: "@mryeminaung",
		images: ["/devfolio.png"],
	},
	robots: {
		index: true,
		follow: true,
		nocache: false,
		googleBot: {
			index: true,
			follow: true,
			noimageindex: false,
			"max-video-preview": -1,
			"max-image-preview": "large",
			"max-snippet": -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<AppLayout>{children}</AppLayout>
				<ScrollTopBtn />
			</body>
		</html>
	);
}

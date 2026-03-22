import ScrollTopBtn from "@/components/scroll-top-btn";
import { ThemeProvider } from "@/components/theme-provider";
import AppLayout from "@/layouts/app-layout";
import type { Metadata } from "next";
import { Geist_Mono } from "next/font/google";
import "./globals.css";

const geistMono = Geist_Mono({
	variable: "--font-geist-mono",
	subsets: ["latin"],
});

export const metadata: Metadata = {
	metadataBase: new URL("https://yeminaung-dev.vercel.app"),

	title: "Devfolio | Ye Min Aung",
	description:
		"A Junior Web Developer specializing in React, Next.js and Laravel. Building high-performance web experiences.",
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
		title: "Devfolio | Ye Min Aung",
		description:
			"A Web Developer specializing in React, Next.js and Laravel. Building high-performance web experiences.",
		url: "https://yeminaung-dev.vercel.app",
		siteName: "Ye Min Aung's Devfolio",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "/devfolio.png",
				width: 1200,
				height: 630,
				alt: "Ye Min Aung Devfolio Preview",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Devfolio | Ye Min Aung",
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
		<html
			lang="en"
			suppressHydrationWarning>
			<body className={`${geistMono.variable} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<AppLayout>{children}</AppLayout>
					<ScrollTopBtn />
				</ThemeProvider>
			</body>
		</html>
	);
}

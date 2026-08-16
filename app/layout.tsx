import ScrollTopBtn from "@/components/scroll-top-btn";
import SplashScreen from "@/components/splash-screen";
import { ThemeProvider } from "@/components/theme-provider";
import AppLayout from "@/layouts/app-layout";
import type { Metadata } from "next";
import "./globals.css";

import "@fontsource-variable/space-grotesk";
import localFont from "next/font/local";

const awsDiatype = localFont({
	src: "./_fonts/AWSDiatypeRoundedMono.ttf",
	display: "swap",
	variable: "--font-mono",
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
			"A Junior Web Developer specializing in React, Next.js and Laravel. Building high-performance web experiences.",
		url: "https://yeminaung-dev.vercel.app",
		siteName: "Ye Min Aung's Devfolio",
		locale: "en_US",
		type: "website",
		images: [
			{
				url: "https://yeminaung-dev.vercel.app/devfolio.png",
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
			"A Junior Web Developer specializing in React, Next.js and Laravel. Building high-performance web experiences.",
		creator: "@mryeminaung",
		images: ["https://yeminaung-dev.vercel.app/devfolio.png"],
	},
	appleWebApp: {
		title: "Devfolio | Ye Min Aung",
		statusBarStyle: "default",
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

const jsonLd = {
	"@context": "https://schema.org",
	"@type": "Person",
	name: "Ye Min Aung",
	url: "https://yeminaung-dev.vercel.app",
	image: "https://yeminaung-dev.vercel.app/devfolio.png",
	jobTitle: "Junior Web Developer",
	description:
		"A Junior Web Developer specializing in React, Next.js and Laravel. Building high-performance web experiences.",
	sameAs: [
		"https://github.com/mryeminaung",
		"https://linkedin.com/in/mryeminaung",
		"https://twitter.com/mryeminaung",
	],
	knowsAbout: ["React", "Next.js", "Laravel", "PHP", "TypeScript", "Tailwind CSS"],
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
			<head>
				<script
					type="application/ld+json"
					dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
				/>
			</head>
			<body className={`${awsDiatype.variable} antialiased`}>
				<ThemeProvider
					attribute="class"
					defaultTheme="system"
					enableSystem
					disableTransitionOnChange>
					<SplashScreen />
					<AppLayout>{children}</AppLayout>
					<ScrollTopBtn />
				</ThemeProvider>
			</body>
		</html>
	);
}

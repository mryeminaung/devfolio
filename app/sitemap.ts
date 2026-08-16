import { certificates } from "@/features/achievements/constants/certificates";
import { projects } from "@/features/projects/constants/projects";
import type { MetadataRoute } from "next";

const BASE = "https://yeminaung-dev.vercel.app";

export default function sitemap(): MetadataRoute.Sitemap {
	const projectUrls = projects.map((p) => ({
		url: `${BASE}/projects/${p.id}`,
		lastModified: new Date(),
		changeFrequency: "monthly" as const,
		priority: 0.7,
	}));

	const certUrls = certificates.map((c) => ({
		url: `${BASE}/achievements/certificates/${c.slug}`,
		lastModified: new Date(),
		changeFrequency: "monthly" as const,
		priority: 0.5,
	}));

	return [
		{ url: BASE, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
		{ url: `${BASE}/about-me`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
		{ url: `${BASE}/projects`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
		{ url: `${BASE}/achievements`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
		{ url: `${BASE}/contact-me`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.7 },
		...projectUrls,
		...certUrls,
	];
}

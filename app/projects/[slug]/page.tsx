import ProjectDetailPage from "@/features/projects/components/project-detail-page";
import { projects } from "@/features/projects/constants/projects";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const BASE = "https://yeminaung-dev.vercel.app";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
	return projects.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const project = projects.find((p) => p.slug === slug);

	if (!project) return { title: "Project Not Found" };

	const ogImage = project.image.startsWith("http")
		? project.image
		: `${BASE}${project.image}`;

	return {
		title: `${project.title} | Ye Min Aung`,
		description: project.description,
		alternates: { canonical: `${BASE}/projects/${slug}` },
		openGraph: {
			title: `${project.title} | Ye Min Aung`,
			description: project.description,
			url: `${BASE}/projects/${slug}`,
			images: [{ url: ogImage, alt: project.title }],
		},
		twitter: {
			title: `${project.title} | Ye Min Aung`,
			description: project.description,
			images: [ogImage],
		},
	};
}

export default async function ProjectDetail({ params }: Props) {
	const { slug } = await params;
	const project = projects.find((p) => p.slug === slug);

	if (!project) notFound();

	return <ProjectDetailPage project={project} />;
}

import ProjectDetailPage from "@/features/projects/components/project-detail-page";
import { projects } from "@/features/projects/constants/projects";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

const BASE = "https://yeminaung-dev.vercel.app";

type Props = { params: Promise<{ id: string }> };

export async function generateStaticParams() {
	return projects.map((p) => ({ id: String(p.id) }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { id } = await params;
	const project = projects.find((p) => p.id === Number(id));

	if (!project) return { title: "Project Not Found" };

	const ogImage = project.image.startsWith("http")
		? project.image
		: `${BASE}${project.image}`;

	return {
		title: `${project.title} | Ye Min Aung`,
		description: project.description,
		alternates: { canonical: `${BASE}/projects/${id}` },
		openGraph: {
			title: `${project.title} | Ye Min Aung`,
			description: project.description,
			url: `${BASE}/projects/${id}`,
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
	const { id } = await params;
	const project = projects.find((p) => p.id === Number(id));

	if (!project) notFound();

	return <ProjectDetailPage project={project} />;
}

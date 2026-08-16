import CertificateDetailPage from "@/features/achievements/components/certificate-detail-page";
import { certificates } from "@/features/achievements/constants/certificates";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export async function generateStaticParams() {
	return certificates.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
	const { slug } = await params;
	const cert = certificates.find((c) => c.slug === slug);
	if (!cert) return { title: "Certificate Not Found" };
	return {
		title: `${cert.title} | Ye Min Aung`,
		description: cert.description,
	};
}

export default async function CertificateDetail({ params }: Props) {
	const { slug } = await params;
	const cert = certificates.find((c) => c.slug === slug);
	if (!cert) notFound();
	return <CertificateDetailPage cert={cert} />;
}

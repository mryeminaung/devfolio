import { redirect } from "next/navigation";

type Props = { params: Promise<{ slug: string }> };

export default async function ExperiencesCertRedirect({ params }: Props) {
	const { slug } = await params;
	redirect(`/achievements/certificates/${slug}`);
}

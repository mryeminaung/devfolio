import dynamic from "next/dynamic";
import CtaSection from "./components/cta-section";
import HeroInfo from "./components/hero-info";
import HeroIntroCard from "./components/hero-intro-card";
import StatsStrip from "./components/stats-strip";

const SkillExpertise = dynamic(() => import("./components/skill-expertise"), {
	ssr: true,
});

export default function HomePage() {
	return (
		<section>
			{/* Hero */}
			<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 mt-5 md:mt-16 mb-10 md:mb-16 items-center px-10">
				<div className="col-span-1 order-last md:order-first text-center md:text-left">
					<HeroInfo />
				</div>
				<div className="col-span-1 flex justify-center">
					<HeroIntroCard />
				</div>
			</div>

			{/* Stats strip */}
			<StatsStrip />

			{/* Core expertise */}
			<SkillExpertise />

			{/* CTA */}
			<CtaSection />
		</section>
	);
}

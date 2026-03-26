import FeaturedProject from "./components/featured-project";
import HeroInfo from "./components/hero-info";
import HeroIntroCard from "./components/hero-intro-card";
import SkillExpertise from "./components/skill-expertise";

export default function HomePage() {
	return (
		<section className="">
			{/* hero section */}
			<div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-5 md:mt-20 mb-10 md:mb-30 items-center order">
				<div className="col-span-1 order-last md:order-first">
					<HeroInfo />
				</div>
				<div className="col-span-1">
					<HeroIntroCard />
				</div>
			</div>

			{/* best project I've ever built :) */}
			<FeaturedProject />

			{/* core expertise */}
			<SkillExpertise />
		</section>
	);
}

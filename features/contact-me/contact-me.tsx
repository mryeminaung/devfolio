"use client";

import Underline from "@/components/underline";
import { CollaborateCard } from "./components/collaborate-card";
import ContactForm from "./components/contact-form";
import { ContactInfoCard } from "./components/contact-info-card";
import SocialCard from "./components/social-card";
import { contactInfoList } from "./constants/contact-info";
import { socialLinks } from "./constants/social-links";

export default function ContactMePage() {
	return (
		<section>
			<div className="flex flex-col mb-10 gap-y-3">
				<h2 className="text-3xl md:text-5xl font-semibold text-center dark:text-white">
					Get In Touch
				</h2>
				<Underline />
			</div>
			{/* contact info */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-5 mt-5">
				{contactInfoList.map((info, index) => (
					<ContactInfoCard
						key={index}
						info={info}
						index={index}
					/>
				))}
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-5 lg:mt-10">
				<div className="col-span-1 space-y-8">
					{/* collaboration alert */}
					<CollaborateCard delay={0.05} />

					{/* Social Links */}
					<div>
						<h3 className="text-xl md:text-2xl font-semibold dark:text-white mb-6">
							Connect With Me
						</h3>
						<div className="grid grid-cols-2 gap-4">
							{socialLinks.map((social, index) => (
								<SocialCard
									key={social.url}
									social={social}
									index={index}
								/>
							))}
						</div>
					</div>
				</div>

				{/* send email  */}
				<div className="col-span-1">
					<ContactForm delay={0.15} />
				</div>
			</div>
		</section>
	);
}

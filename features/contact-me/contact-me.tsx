"use client";

import { CollaborateCard } from "./components/collaborate-card";
import ContactForm from "./components/contact-form";
import { ContactInfoCard } from "./components/contact-info-card";
import SocialCard from "./components/social-card";
import { contactInfoList } from "./constants/contact-info";
import { socialLinks } from "./constants/social-links";

export default function ContactMePage() {
	return (
		<section>
			<h3 className="text-3xl text-center md:text-5xl text-white">
				Get In Touch
			</h3>

			{/* contact info */}
			<div className="grid grid-cols-1 lg:grid-cols-3 gap-x-10 gap-y-5 mt-5">
				{contactInfoList.map((info, index) => (
					<ContactInfoCard
						key={index}
						info={info}
					/>
				))}
			</div>

			<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-5 lg:mt-10">
				<div className="col-span-1 space-y-8">
					{/* collaboration alert */}
					<CollaborateCard />

					{/* Social Links */}
					<div>
						<h3 className="text-2xl font-semibold text-white mb-6">
							Connect With Me
						</h3>
						<div className="grid grid-cols-2 gap-4">
							{socialLinks.map((social) => (
								<SocialCard
									key={social.url}
									social={social}
								/>
							))}
						</div>
					</div>
				</div>

				{/* send email  */}
				<div className="col-span-1">
					<ContactForm />
				</div>
			</div>
		</section>
	);
}

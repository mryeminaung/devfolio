"use client";

import type { Variants } from "motion/react";
import { motion } from "motion/react";
import { CollaborateCard } from "./components/collaborate-card";
import ContactForm from "./components/contact-form";
import { ContactInfoCard } from "./components/contact-info-card";
import SocialCard from "./components/social-card";
import { contactInfoList } from "./constants/contact-info";
import { socialLinks } from "./constants/social-links";

const pageVariants: Variants = {
	hidden: { opacity: 0 },
	show: {
		opacity: 1,
		transition: {
			staggerChildren: 0.12,
		},
	},
};

const fadeUp: Variants = {
	hidden: { opacity: 0, y: 20 },
	show: {
		opacity: 1,
		y: 0,
		transition: { duration: 0.45 },
	},
};

export default function ContactMePage() {
	return (
		<motion.section
			variants={pageVariants}
			initial="hidden"
			animate="show">
			<motion.div
				variants={fadeUp}
				className="py-14 text-center text-white space-y-5">
				<h3 className="text-5xl">
					Get In <b>Touch</b>
				</h3>
				<p className="text-xl">
					Have a project in mind or just want to chat? Feel free to reach out.{" "}
					<br />
					I'd love to hear from you!
				</p>
			</motion.div>

			<motion.div
				variants={fadeUp}
				className="py-10">
				<div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
					{contactInfoList.map((info, index) => (
						<motion.div
							key={info.title}
							initial={{ opacity: 0, y: 18 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true, amount: 0.35 }}
							transition={{
								duration: 0.4,
								delay: index * 0.1,
								ease: "easeOut",
							}}>
							<ContactInfoCard info={info} />
						</motion.div>
					))}
				</div>

				<div className="grid grid-cols-1 lg:grid-cols-2 gap-10 mt-16">
					<motion.div
						initial={{ opacity: 0, x: -18 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.45, ease: "easeOut" }}
						className="col-span-1 space-y-8">
						<CollaborateCard />

						{/* Social Links */}
						<div>
							<h3 className="text-2xl font-bold text-transparent bg-clip-text bg-linear-to-r from-cyan-400 to-magenta-500 mb-6">
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
					</motion.div>
					<motion.div
						initial={{ opacity: 0, x: 18 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true, amount: 0.3 }}
						transition={{ duration: 0.45, ease: "easeOut" }}
						className="col-span-1">
						<ContactForm />
					</motion.div>
				</div>
			</motion.div>
		</motion.section>
	);
}

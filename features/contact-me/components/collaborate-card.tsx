import { Mail } from "lucide-react";

export const CollaborateCard = () => {
	return (
		<section className="flex justify-center ">
			<div className="relative w-full py-5 overflow-hidden rounded-3xl bg-slate-950 p-px  border border-cyan-400/30">
				<div className="relative flex flex-col items-center justify-center rounded-[23px] bg-slate-950 px-8 py-16 text-center">
					<div className="mb-6 flex h-20 w-20 items-center justify-center rounded-full border border-cyan-500/30 bg-cyan-500/10 text-cyan-400">
						<Mail
							size={32}
							strokeWidth={1.5}
						/>
					</div>

					<h2 className="mb-4 text-2xl font-bold tracking-tight text-white">
						Let's Collaborate
					</h2>
					<p className="text-base text-slate-400">
						I'm always excited to work on new projects
					</p>
				</div>
			</div>
		</section>
	);
};

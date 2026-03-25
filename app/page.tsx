import { Badge } from "@/components/ui/badge";

export default function Home() {
	return (
		<section className="flex w-full flex-col sm:items-start rounded-xl">
			<Badge className="mb-5 p-3 font-semibold bg-slate-900 dark:text-white">
				Development In Progress
			</Badge>
			<h1 className="text-3xl mb-5 font-bold tracking-tight  dark:text-white ">
				Hi there!, My name is Ye Min Aung
			</h1>
			<p>
				I'm a Junior Web Developer specializing in React, Next.js and Laravel.
				Building high-performance web experiences.
			</p>
		</section>
	);
}

import { Badge } from "@/components/ui/badge";

export default function Home() {
	return (
		<section className="flex min-h-screen items-center justify-center dark:bg-black">
			<div className="flex min-h-screen w-full flex-col  py-32 px-16 text-white dark:bg-black sm:items-start rounded-xl">
				<Badge className="mb-5 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 p-3 font-semibold ">
					😁 Development In Progress
				</Badge>
				<h1 className="text-3xl mb-5 font-bold tracking-tight  dark:text-white ">
					Hi there!, My name is Ye Min Aung
				</h1>
				<p>
					I'm a Junior Web Developer specializing in React, Next.js and Laravel.
					Building high-performance web experiences.
				</p>
			</div>
		</section>
	);
}

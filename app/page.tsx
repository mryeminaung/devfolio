import { Badge } from "@/components/ui/badge";

export default function Home() {
	return (
		<div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
			<main className="flex min-h-screen w-full max-w-3xl flex-col  py-32 px-16 bg-white dark:bg-black sm:items-start">
				<Badge className="mb-4 bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200 p-3 font-semibold">
					😁 Development In Progress
				</Badge>
				<h1 className="text-3xl font-bold tracking-tight text-gray-900 dark:text-white ">
					My name is Ye Min Aung
				</h1>
				<p>
					I'm a Junior Web Developer specializing in React, Next.js and Laravel.
					Building high-performance web experiences.
				</p>
			</main>
		</div>
	);
}

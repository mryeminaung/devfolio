export interface Project {
	id: number;
	slug: string;
	title: string;
	description: string;
	fullDescription: string;
	image: string;
	screenshots: string[];
	tags: string[];
	category: string;
	features: string[];
	link?: string;
	github?: string;
	problem?: string;
	solution?: string;
	result?: string;
	role?: string;
	timeline?: string;
}

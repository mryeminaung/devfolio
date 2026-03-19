import { Project } from "../projects.type";

export const projects: Project[] = [
	{
		id: 1,
		title: "Cocktail Explorer",
		description:
			"A sleek, high-performance mixology encyclopedia powered by TheCocktailDB API.",
		fullDescription:
			"Liquid Index is a modern web application designed for cocktail enthusiasts to explore thousands of recipes. Built with Next.js for speed and Zustand for seamless state management, it offers real-time searching, category-based filtering, and deep-dives into drink compositions.",
		image:
			"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1080&auto=format&fit=crop",
		screenshots: [
			"https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1080&auto=format&fit=crop",
		],
		tags: [
			"NextJs",
			"TheCocktailDB API",
			"Zustand",
			"Shadcn/UI",
			"Tanstack Query",
		],
		category: "Web Application",
		features: [
			"Real-time search & filtering via external API",
			"Global state management for favoriting drinks",
			"Fully responsive grid with optimized image loading",
			"Detailed ingredient metrics and recipe instructions",
		],
		link: "https://liquid-index.vercel.app/",
		github: "https://github.com/mryeminaung/liquid-index",
	},
	{
		id: 2,
		title: "Food Recipe Browser",
		description:
			"A comprehensive culinary guide for discovering global cuisines and detailed cooking instructions.",
		fullDescription:
			"Food Recipe Browser is a high-performance React application that integrates TheMealDB API to help users discover new dishes. It features a robust search system, category-based browsing, and a deep-dive view into ingredients, measurements, and video tutorials for a complete cooking experience.",
		image:
			"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1080&auto=format&fit=crop",
		screenshots: [
			"https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1080&auto=format&fit=crop",
		],
		tags: ["ReactJs", "TheMealDB API", "Axios", "Zustand"],
		category: "Web Application",
		features: [
			"Dynamic recipe search and category filtering",
			"Detailed ingredient lists with precise measurements",
			"Step-by-step cooking instructions with YouTube integration",
			"Optimized state management using Zustand for smooth navigation",
		],
		link: "https://food-recipe-browser.vercel.app/",
		github: "https://github.com/mryeminaung/food-recipe-browser",
	},
	{
		id: 3,
		title: "Note-Taking App",
		description:
			"A productivity-focused Android application for seamless note management and real-time synchronization.",
		fullDescription:
			"Built with Kotlin and following modern Android development practices, this app allows users to create, edit, and organize notes efficiently. By integrating Firebase, it ensures that all data is securely stored and synchronized across devices in real-time.",
		image:
			"https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1080&auto=format&fit=crop",
		screenshots: [
			"https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1080&auto=format&fit=crop",
		],
		tags: ["Kotlin", "Firebase", "Android SDK", "Material Design"],
		category: "Android Mobile",
		features: [
			"Real-time cloud synchronization via Firebase",
			"Persistent local storage for offline access",
			"Material Design UI for an intuitive user experience",
			"Efficient search and category-based organization",
		],
		link: "#",
		github: "https://github.com/mryeminaung/note-taking-app",
	},
	{
		id: 4,
		title: "Academic Projects Management System",
		description:
			"A centralized workflow platform for managing Special, Capstone, and Master's projects.",
		fullDescription:
			"This system digitizes the entire academic project lifecycle, from proposal submission to final evaluation. Built with a React frontend and a Laravel API backend, it features a dual-proposal workflow (Student-Driven vs. Faculty-Driven), smart application limits, and role-based dashboards for students, supervisors, and administrators.",
		image:
			"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1080&auto=format&fit=crop",
		screenshots: [
			"https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1454165833968-356b9c9c0b11?q=80&w=1080&auto=format&fit=crop",
		],
		tags: ["ReactJs", "Laravel API", "TypeScript", "PostgreSQL"],
		category: "Full Stack",
		features: [
			"Dual Proposal System (Student & Faculty initiated)",
			"Role-Based Access Control (RBAC) with secure dashboards",
			"Automated project status tracking and application limits",
			"Digital repository for Capstone and Master's research",
		],
		link: "#",
		github: "https://github.com/mryeminaung/special-project-3002",
	},
	{
		id: 5,
		title: "Automated Exam Scheduling System",
		description:
			"An intelligent scheduling platform designed to automate and optimize academic examination timetables.",
		fullDescription:
			"This system addresses the complex logistical challenge of academic scheduling. Developed with a React frontend and a Laravel backend, it utilizes custom algorithms to generate conflict-free exam timetables, managing room allocations, invigilator assignments, and student cohorts efficiently.",
		image:
			"https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1080&auto=format&fit=crop",
		screenshots: [
			"https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1454165833968-356b9c9c0b11?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1080&auto=format&fit=crop",
		],
		tags: ["ReactJs", "Laravel", "MySQL", "Zustand"],
		category: "Full Stack",
		features: [
			"Automated conflict-free timetable generation",
			"Dynamic room and invigilator allocation logic",
			"Real-time schedule updates and notifications",
			"Comprehensive management dashboard for administrators",
		],
		link: "#",
		github: "https://github.com/mryeminaung/special-project-3001",
	},
	{
		id: 6,
		title: "Blogging Platform Using JSON Server",
		description:
			"A full-featured blog management system demonstrating RESTful API integration and CRUD operations.",
		fullDescription:
			"This platform serves as a robust example of how to manage dynamic content in a React application. By leveraging JSON Server as a mock backend and Axios for HTTP requests, the app allows users to seamlessly create, view, edit, and delete blog posts with real-time UI updates.",
		image:
			"https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1080&auto=format&fit=crop",
		screenshots: [
			"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1516414447565-b14be0afa13e?q=80&w=1080&auto=format&fit=crop",
		],
		tags: ["ReactJs", "JSON Server", "Axios", "REST API"],
		category: "Web Development",
		features: [
			"Full CRUD functionality for blog post management",
			"Mock REST API integration using JSON Server",
			"Asynchronous data fetching and state handling with Axios",
			"Responsive UI design for seamless reading and editing",
		],
		link: "#",
		github: "https://github.com/mryeminaung/blog-with-json-server",
	},
];

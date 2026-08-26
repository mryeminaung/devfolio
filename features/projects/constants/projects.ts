import { Project } from "../projects.type";

export const projects: Project[] = [
	{
		id: 1,
		slug: "automated-exam-scheduling-system-using-csp-algorithm",
		title: "Automated Exam Scheduling System Using CSP Algorithm",
		description:
			"An intelligent scheduling platform designed to automate and optimize academic examination timetables.",
		fullDescription:
			"This system addresses the complex logistical challenge of academic scheduling. Developed with a React frontend and a Laravel backend, it utilizes custom algorithms to generate conflict-free exam timetables, managing room allocations, invigilator assignments, and student cohorts efficiently.",
		problem:
			"Manual exam scheduling is error-prone and time-consuming, often leading to room conflicts, overlapping sessions, and invigilator shortages across departments.",
		solution:
			"Built a custom scheduling algorithm that automatically generates conflict-free timetables by cross-referencing room capacity, invigilator availability, and student cohort data in real time.",
		result:
			"Reduced scheduling time from days to minutes, eliminating conflicts and providing administrators with a clear, manageable dashboard for adjustments.",
		role: "Full-Stack Developer",
		timeline: "3 months",
		image:
			"https://images.unsplash.com/photo-1434030216411-0b793f4b4173?q=80&w=1080&auto=format&fit=crop",
		screenshots: [
			"https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1454165833968-356b9c9c0b11?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1506784983877-45594efa4cbe?q=80&w=1080&auto=format&fit=crop",
		],
		tags: ["ReactJs", "Laravel", "InertiaJS", "Zustand", "MySQL"],
		category: "Full Stack",
		features: [
			"Comprehensive management dashboard for administrators",
			"Real-time schedule updates and notifications",
			"Dynamic room and invigilator allocation logic",
			"Automated conflict-free timetable generation",
		],
		link: "#",
		github: "https://github.com/mryeminaung/special-project-3001",
	},
	{
		id: 2,
		slug: "project-infosphere-project-information-management-system",
		title: "Project InfoSphere: Project Information Management System",
		description:
			"A centralized workflow platform for managing Special, Capstone, and Master's projects.",
		fullDescription:
			"This system digitizes the entire academic project lifecycle, from proposal submission to final evaluation. Built with a React frontend and a Laravel API backend, it features a dual-proposal workflow (Student-Driven vs. Faculty-Driven), smart application limits, and role-based dashboards for students, supervisors, and administrators.",
		problem:
			"Academic project management relied on scattered emails and spreadsheets, making it difficult to track proposals, evaluations, and supervisor assignments across departments.",
		solution:
			"Designed a dual-proposal workflow system with role-based dashboards, enabling both student-initiated and faculty-initiated projects to flow through a structured approval pipeline.",
		result:
			"Centralized the entire project lifecycle for hundreds of students, providing clear visibility into proposal status and evaluation progress for all stakeholders.",
		role: "Full-Stack Developer",
		timeline: "4 months",
		image:
			"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1080&auto=format&fit=crop",
		screenshots: [
			"https://images.unsplash.com/photo-1454165833968-356b9c9c0b11?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1531403009284-440f080d1e12?q=80&w=1080&auto=format&fit=crop",
		],
		tags: ["ReactJs", "Laravel API", "PostgreSQL", "TypeScript"],
		category: "Full Stack",
		features: [
			"Digital repository for Capstone and Master's research",
			"Automated project status tracking and application limits",
			"Role-Based Access Control (RBAC) with secure dashboards",
			"Dual Proposal System (Student & Faculty initiated)",
		],
		link: "#",
		github: "https://github.com/mryeminaung/special-project-3002",
	},
	{
		id: 3,
		slug: "blogging-platform-json-server",
		title: "Blogging Platform Using JSON Server",
		description:
			"A full-featured blog management system demonstrating RESTful API integration and CRUD operations.",
		fullDescription:
			"This platform serves as a robust example of how to manage dynamic content in a React application. By leveraging JSON Server as a mock backend and Axios for HTTP requests, the app allows users to seamlessly create, view, edit, and delete blog posts with real-time UI updates.",
		problem:
			"Learning RESTful API patterns requires a backend, but setting up a full server for practice projects creates unnecessary complexity and slows down iteration.",
		solution:
			"Used JSON Server as a lightweight mock backend with Axios for HTTP requests, creating a realistic API experience without backend overhead — focusing on clean CRUD operations and responsive UI.",
		result:
			"A polished, fully functional blog platform that demonstrates production-ready patterns for data fetching, state management, and real-time content editing.",
		role: "Frontend Developer",
		timeline: "2 weeks",
		image:
			"https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=1080&auto=format&fit=crop",
		screenshots: [
			"https://images.unsplash.com/photo-1516414447565-b14be0afa13e?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1432821596592-e2c18b78144f?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=1080&auto=format&fit=crop",
		],
		tags: ["ReactJs", "JSON Server", "REST API", "Axios"],
		category: "Web Development",
		features: [
			"Responsive UI design for seamless reading and editing",
			"Asynchronous data fetching and state handling with Axios",
			"Mock REST API integration using JSON Server",
			"Full CRUD functionality for blog post management",
		],
		link: "#",
		github: "https://github.com/mryeminaung/blog-with-json-server",
	},
	{
		id: 4,
		slug: "note-taking-app",
		title: "Note-Taking App",
		description:
			"A productivity-focused Android application for seamless note management and real-time synchronization.",
		fullDescription:
			"Built with Kotlin and following modern Android development practices, this app allows users to create, edit, and organize notes efficiently. By integrating Firebase, it ensures that all data is securely stored and synchronized across devices in real-time.",
		problem:
			"Existing note apps either lacked offline support or real-time sync, forcing users to choose between reliability and convenience across multiple devices.",
		solution:
			"Built a Kotlin Android app with Firebase integration, combining persistent local storage for offline access with real-time cloud synchronization for seamless cross-device updates.",
		result:
			"A reliable note-taking experience that works offline and syncs instantly when connectivity returns, with a clean Material Design interface.",
		role: "Android Developer",
		timeline: "2 months",
		image:
			"https://images.unsplash.com/photo-1517842645767-c639042777db?q=80&w=1080&auto=format&fit=crop",
		screenshots: [
			"https://images.unsplash.com/photo-1522199755839-a2bacb67c546?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1484480974693-6ca0a78fb36b?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1586281380349-632531db7ed4?q=80&w=1080&auto=format&fit=crop",
		],
		tags: ["Kotlin", "Material Design", "Android SDK", "Firebase"],
		category: "Android Mobile",
		features: [
			"Efficient search and category-based organization",
			"Material Design UI for an intuitive user experience",
			"Persistent local storage for offline access",
			"Real-time cloud synchronization via Firebase",
		],
		link: "#",
		github: "https://github.com/mryeminaung/note-taking-app",
	},
	{
		id: 5,
		slug: "food-recipe-browser",
		title: "Food Recipe Browser",
		description:
			"A comprehensive culinary guide for discovering global cuisines and detailed cooking instructions.",
		fullDescription:
			"Food Recipe Browser is a high-performance React application that integrates TheMealDB API to help users discover new dishes. It features a robust search system, category-based browsing, and a deep-dive view into ingredients, measurements, and video tutorials for a complete cooking experience.",
		problem:
			"Discovering new recipes across different cuisines requires visiting multiple sites, and most recipe apps lack integrated video tutorials for visual learners.",
		solution:
			"Built a React app with Zustand state management that aggregates recipes from TheMealDB API, featuring category browsing, real-time search, and embedded YouTube tutorials for step-by-step guidance.",
		result:
			"A fast, responsive recipe browser that helps users discover dishes from around the world with everything they need — ingredients, measurements, and video tutorials — in one place.",
		role: "Frontend Developer",
		timeline: "1 month",
		image:
			"https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&w=1080&auto=format&fit=crop",
		screenshots: [
			"https://images.unsplash.com/photo-1498837167922-ddd27525d352?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1493770348161-369560ae357d?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&w=1080&auto=format&fit=crop",
		],
		tags: ["Zustand", "Axios", "TheMealDB API", "ReactJs"],
		category: "Web Application",
		features: [
			"Optimized state management using Zustand for smooth navigation",
			"Step-by-step cooking instructions with YouTube integration",
			"Detailed ingredient lists with precise measurements",
			"Dynamic recipe search and category filtering",
		],
		link: "https://food-recipe-browser.vercel.app/",
		github: "https://github.com/mryeminaung/food-recipe-browser",
	},
	{
		id: 6,
		slug: "cocktail-explorer",
		title: "Cocktail Explorer",
		description:
			"A sleek, high-performance mixology encyclopedia powered by TheCocktailDB API.",
		fullDescription:
			"Liquid Index is a modern web application designed for cocktail enthusiasts to explore thousands of recipes. Built with Next.js for speed and Zustand for seamless state management, it offers real-time searching, category-based filtering, and deep-dives into drink compositions.",
		problem:
			"Cocktail enthusiasts lack a fast, beautifully designed tool to explore recipes, discover new drinks by category, and save favorites — most existing options are cluttered or slow.",
		solution:
			"Created a Next.js app with Tanstack Query for caching, Zustand for favorites, and Shadcn/UI components — delivering instant search, category filtering, and a sleek interface for browsing thousands of cocktails.",
		result:
			"A high-performance cocktail encyclopedia with real-time search, persistent favorites, and a polished UI that makes exploring mixology recipes effortless and enjoyable.",
		role: "Frontend Developer",
		timeline: "3 weeks",
		image:
			"https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&w=1080&auto=format&fit=crop",
		screenshots: [
			"https://images.unsplash.com/photo-1470337458703-46ad1756a187?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1574096079513-d8259312b785?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1536935338788-846bb9981813?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1551024709-8f23befc6f87?q=80&w=1080&auto=format&fit=crop",
		],
		tags: [
			"Tanstack Query",
			"Shadcn/UI",
			"Zustand",
			"TheCocktailDB API",
			"NextJs",
		],
		category: "Web Application",
		features: [
			"Detailed ingredient metrics and recipe instructions",
			"Fully responsive grid with optimized image loading",
			"Global state management for favoriting drinks",
			"Real-time search & filtering via external API",
		],
		link: "https://liquid-index.vercel.app/",
		github: "https://github.com/mryeminaung/cocktail-explorer",
	},
	{
		id: 7,
		slug: "documentation-assistant",
		title: "Documentation Assistant",
		description:
			"An intelligent documentation assistant designed to help developers create, organize, and manage technical documentation efficiently.",
		fullDescription:
			"Documentation Assistant is a modern web application that streamlines the process of creating and managing technical documentation. It provides developers with a structured workspace for organizing documentation, generating content, and maintaining project knowledge in a clear and accessible format.",
		problem:
			"Developers often spend significant time writing, organizing, and maintaining technical documentation manually, making it difficult to keep project documentation consistent, structured, and up to date.",
		solution:
			"Built a web-based documentation assistant that simplifies documentation workflows by providing an organized interface for creating, managing, and accessing technical documentation.",
		result:
			"A streamlined documentation platform that helps developers manage technical knowledge efficiently while maintaining a clean, structured, and user-friendly documentation experience.",
		role: "Full-Stack Developer",
		timeline: "3 weeks",
		image: "/projects/07/thumbnail.png",
		screenshots: [
			"/projects/07/00-about-assistant.png",
			"/projects/07/01-explain-code.png",
			"/projects/07/02-generate-comments.png",
			"/projects/07/03-generate-docs.png",
			"/projects/07/04-summarize-file.png",
			"/projects/07/05-refactor-names.png",
		],
		tags: ["Next.js", "Claude Code", "TypeScript", "Tailwind CSS"],
		category: "Web Application",
		features: [
			"Structured documentation creation and management",
			"Clean and responsive interface for browsing documentation",
			"Organized technical content with easy navigation",
			"Developer-focused workflow for maintaining project documentation",
		],
		link: "https://documentation-assistant.vercel.app/",
		github: "https://github.com/mryeminaung/documentation-assistant",
	},
];

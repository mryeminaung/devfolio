import { Project } from "../projects.type";

export const projects: Project[] = [
	{
		id: 1,
		slug: "smart-agriculture-iot-monitoring-system",
		title: "Smart Agriculture IoT Monitoring System",
		description:
			"An ESP32-based smart agriculture platform for real-time sensor monitoring, device control, and automated irrigation over a local Wi-Fi network.",
		fullDescription:
			"This project demonstrates an end-to-end IoT system that connects an ESP32 DevKit V1 with a web-based monitoring platform over Wi-Fi. The ESP32 collects sensor data and exposes REST API endpoints for monitoring and device control, while a React and TypeScript dashboard provides real-time visualization, actuator controls, analytics, device information, and activity tracking. A Node.js and Express backend with PostgreSQL manages authentication, user roles, sensor data, and system activity.",
		problem:
			"Traditional agriculture monitoring requires farmers to manually check environmental conditions and operate devices, making it difficult to continuously monitor sensor data and respond quickly to changing conditions. Building an IoT system also requires reliable communication between embedded hardware, APIs, and user-facing applications.",
		solution:
			"Developed an ESP32-based IoT platform that communicates over a local Wi-Fi network using HTTP and REST APIs. The ESP32 monitors soil moisture and controls irrigation and other actuators, while a responsive React dashboard provides real-time monitoring, device control, analytics, and system information. A Node.js and Express API with PostgreSQL adds authentication, role-based access control, sensor data storage, and activity logging.",
		result:
			"A complete smart agriculture IoT platform that demonstrates reliable hardware-software integration, local-network communication, REST API design, real-time monitoring, device control, analytics, and role-based system management.",
		role: "IoT & Full-Stack Developer",
		timeline: "Capstone Project",
		image:
			"https://images.unsplash.com/photo-1492496913980-501348b61469?q=80&w=1080&auto=format&fit=crop",
		screenshots: [
			"https://images.unsplash.com/photo-1586771107445-d3ca888129ff?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1592982537447-6f2a6a0a1b4b?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1530267981375-f0de937f5f13?q=80&w=1080&auto=format&fit=crop",
		],
		tags: [
			"ESP32",
			"React",
			"Express",
			"TypeScript",
			"Node.js",
			"PostgreSQL",
			"REST API",
			"Wi-Fi",
			"IoT",
		],
		category: "IoT & Web Development",
		features: [
			"Real-time sensor monitoring through ESP32 over a local Wi-Fi network",
			"REST API communication for sensor data retrieval and device control",
			"Web-based dashboard built with React, TypeScript, and Tailwind CSS",
			"Device control with ON/OFF toggles and PWM fan speed control",
			"Smart irrigation control using soil moisture readings",
			"Interactive sensor analytics with daily aggregated data",
			"JWT authentication with role-based access control",
			"User management and activity logging",
			"ESP32 system information including IP, MAC address, uptime, and Wi-Fi status",
			"Responsive dashboard with dark and light theme support",
		],
		link: "#",
		github:
			"https://github.com/mryeminaung/esp32-based-iot-networking-over-local-area",
	},
	{
		id: 2,
		slug: "project-infosphere-project-information-management-system",
		title: "Project InfoSphere: Project Information Management System",
		description:
			"A full-stack academic project management platform designed to streamline the lifecycle of student projects at MIIT.",
		fullDescription:
			"Projects Information Management System (PIMS) is a role-based web application designed to digitize and centralize the academic project workflow at the Myanmar Institute of Information Technology. The platform manages project proposals, team formation, supervisor assignment, project progress, reports, seminars, announcements, and grading through dedicated dashboards for students, supervisors, faculty, internal committees, and administrative staff. The system combines a React and TypeScript frontend with a Laravel API backend, PostgreSQL database, AWS S3 storage, and role-based authentication and authorization.",
		problem:
			"Managing academic projects through disconnected documents, manual submissions, spreadsheets, and communication channels makes it difficult to track proposals, approvals, project progress, supervisors, reports, and evaluations. Faculty and administrative staff also need a centralized way to monitor projects across different stages and user roles.",
		solution:
			"Developed a centralized full-stack platform that digitizes the academic project lifecycle from proposal submission and approval to project tracking, report submission, supervision, announcements, and final evaluation. Role-based dashboards and permissions provide each stakeholder with the tools and information relevant to their responsibilities, while RESTful APIs connect the React frontend with the Laravel backend.",
		result:
			"A scalable academic project management platform that centralizes student and faculty workflows, improves project visibility, reduces manual administration, and provides a structured digital foundation for managing special projects and future academic project types.",
		role: "Full-Stack Developer",
		timeline: "Academic Project",
		image:
			"https://images.unsplash.com/photo-1524178232363-1fb2b075b655?q=80&w=1080&auto=format&fit=crop",
		screenshots: [
			"https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1080&auto=format&fit=crop",
			"https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=1080&auto=format&fit=crop",
		],
		tags: [
			"React",
			"TypeScript",
			"Laravel",
			"PHP",
			"PostgreSQL",
			"Tailwind CSS",
			"Zustand",
			"REST API",
			"AWS S3",
		],
		category: "Full-Stack Development",
		features: [
			"Role-based dashboards for students, supervisors, faculty, IC, and administrative staff",
			"Token-based authentication and role-based authorization with Laravel Sanctum and Spatie Permission",
			"Project proposal creation, team formation, supervisor selection, and approval workflow",
			"End-to-end project lifecycle tracking from proposal approval to completion",
			"Mid-report, mid-seminar, final-report, and final-seminar management",
			"Project supervision, task management, and progress tracking",
			"Role-based announcements with targeted audiences",
			"Profile management with avatar upload and AWS S3 file storage",
			"Interactive dashboards with project statistics, charts, and analytics",
			"Data tables with sorting, filtering, and pagination",
			"Drag-and-drop interfaces for streamlined project management",
			"Responsive design with mobile support and light/dark theme switching",
			"Excel import and export capabilities for academic project data",
		],
		link: "#",
		github: "https://github.com/mryeminaung/special-project-3002",
	},
	{
		id: 3,
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
		id: 4,
		slug: "documentation-assistant",
		title: "Documentation Assistant",
		description:
			"An AI-powered developer utility that helps programmers understand, document, summarize, and improve their code using the Claude API.",
		fullDescription:
			"Documentation Assistant is a focused web application designed to simplify common code understanding and documentation tasks. Developers can select a programming language and task, paste or upload source code, and receive AI-generated results through Anthropic's Claude API. The application supports code explanation, inline comment generation, Markdown documentation, file summarization, and variable naming suggestions, all through a responsive single-page interface.",
		problem:
			"Developers often repeat the same prompts when trying to understand unfamiliar code, document functions, summarize files, or improve naming. Manually performing these tasks can be time-consuming, especially when working with large or unfamiliar codebases.",
		solution:
			"Built a centralized AI-powered interface that combines five common code assistance workflows into a single tool. The React frontend provides task and language selection with a CodeMirror editor and file upload support, while a Node.js and Express backend securely handles requests to the Anthropic Claude API using predefined prompt templates.",
		result:
			"A lightweight and practical AI developer tool that streamlines code understanding and documentation workflows while demonstrating full-stack development, AI API integration, code-editor integration, responsive UI design, validation, error handling, and rate limiting.",
		role: "Full-Stack Developer",
		timeline: "3 weeks",
		image: "/projects/04/thumbnail.png",
		screenshots: [
			"/projects/04/00-about-assistant.png",
			"/projects/04/01-explain-code.png",
			"/projects/04/02-generate-comments.png",
			"/projects/04/03-generate-docs.png",
			"/projects/04/04-summarize-file.png",
			"/projects/04/05-refactor-names.png",
		],
		tags: [
			"Next.js",
			"Claude Code",
			"Node.js",
			"Express",
			"TypeScript",
			"CodeMirror",
			"Tailwind CSS",
		],
		category: "Web Application",
		features: [
			"AI-powered code explanation with step-by-step plain-language analysis",
			"Automatic inline comment generation without changing code logic",
			"Markdown documentation generation with purpose, parameters, returns, and usage examples",
			"High-level file summarization for quickly understanding source code",
			"Variable naming suggestions with explanations",
			"File upload and drag-and-drop support for source code",
			"Support for 13 programming languages",
			"Integrated CodeMirror editor for editing and reviewing source code",
			"Secure server-side Anthropic Claude API integration",
			"Request validation, error handling, and API rate limiting",
			"Copy-to-clipboard functionality for generated results",
			"Responsive light and dark themes for desktop, tablet, and mobile",
		],
		link: "https://documentation-assistant.vercel.app/",
		github: "https://github.com/mryeminaung/documentation-assistant",
	},
	{
		id: 5,
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
		image: "/projects/05/thumbnail.png",
		screenshots: [
			"/projects/05/00-auth-screens.png",
			"/projects/05/01-notes-setting-screens.png",
			"/projects/05/02-new-detail-edit-screens.png",
			"/projects/05/03-setting-screen.png",
		],
		tags: ["Kotlin", "Material Design", "Android SDK", "Firebase"],
		category: "Android Mobile",
		features: [
			"Intuitive Material Design UI optimized for Android mobile devices",
			"Sticky-note inspired interface with support for 6 customizable note colors",
			"Sort notes by priority and creation or update date",
			"Efficient search and category-based note organization",
			"Persistent local storage for reliable offline access",
			"Real-time cloud synchronization via Firebase",
			"Light, dark, and system theme support",
			"Profile picture upload and personalized user profiles",
		],
		link: "#",
		github: "https://github.com/mryeminaung/note-taking-app",
	},
	{
		id: 6,
		slug: "food-recipe-browser",
		title: "Food Recipe Browser",
		description:
			"A clean and responsive recipe discovery platform for exploring, searching, and viewing detailed food recipes.",
		fullDescription:
			"This web application provides an intuitive way to discover food recipes and access the information needed to prepare them. Users can search for recipes by dish name or keyword, explore recipe details, view complete ingredient lists, and follow step-by-step cooking instructions. The application is built with React and Vite, with Tailwind CSS for responsive styling and Axios for API communication. Framer Motion adds smooth animations and Lucide React provides a consistent icon system.",
		problem:
			"Finding useful recipes online can involve navigating through cluttered pages and searching across different sources just to find ingredients and cooking instructions. A focused recipe browser can make this process faster and provide the essential information in a clean, easy-to-use interface.",
		solution:
			"Built a responsive React-based recipe browser that centralizes recipe discovery and presentation into a simple interface. Users can search recipes, view detailed ingredients, and follow step-by-step cooking instructions while enjoying a responsive experience across desktop, tablet, and mobile devices.",
		result:
			"A polished and responsive recipe discovery application that demonstrates API integration, client-side routing, reusable React components, responsive UI development, animations, and efficient recipe data presentation.",
		role: "Frontend Developer",
		timeline: "1 month",
		image: "/projects/06/thumbnail.png",
		screenshots: [
			"/projects/06/00-home.png",
			"/projects/06/01-featured-recipes.png",
			"/projects/06/02-filter-by-category.png",
			"/projects/06/03-fav-recipes.png",
			"/projects/06/04-recipe-detail.png",
			"/projects/06/05-recipe-detail.png",
		],
		tags: ["ReactJs", "TheMealDB API", "Zustand", "Axios", "React Router"],
		category: "Web Application",
		features: [
			"Recipe search by dish name or keyword",
			"Detailed recipe information with ingredients and cooking instructions",
			"Responsive design optimized for mobile, tablet, and desktop",
			"API integration using Axios for recipe data",
			"Client-side navigation with React Router",
			"Smooth UI animations using Framer Motion",
			"Reusable interface components built with React",
			"Modern icon system using Lucide React",
			"Fast development and production builds powered by Vite",
		],
		link: "https://food-recipe-browser.vercel.app/",
		github: "https://github.com/mryeminaung/food-recipe-browser",
	},
	{
		id: 7,
		slug: "cocktail-explorer",
		title: "Cocktail Explorer",
		description:
			"A modern cocktail discovery platform for exploring drinks by name, letter, or ingredient and saving favorite cocktails.",
		fullDescription:
			"Liquid Index is a modern cocktail discovery application built with Next.js and TypeScript. It integrates with TheCocktailDB API to provide cocktail recipes, ingredients, images, and preparation instructions. Users can discover a Cocktail of the Moment, browse drinks alphabetically, search for specific cocktails, explore an ingredients directory, and save favorite drinks locally for quick access.",
		problem:
			"Discovering cocktail recipes can be difficult when information is scattered across different sources. Users need a simple way to search for drinks, explore cocktails by ingredients, and quickly return to recipes they enjoy.",
		solution:
			"Built a centralized cocktail discovery platform that integrates TheCocktailDB API with a responsive Next.js interface. Users can discover random cocktails, search by name, browse alphabetically, explore drinks through ingredients, and save favorites using local storage.",
		result:
			"A polished, responsive cocktail discovery application that demonstrates modern Next.js development, API integration, reusable component architecture, client-side state management, responsive UI design, and persistent local favorites.",
		role: "Frontend Developer",
		timeline: "3 weeks",
		image: "/projects/07/thumbnail.png",
		screenshots: [
			"/projects/07/04-cocktail-of-the-moment.png",
			"/projects/07/00-browse-by-letters.png",
			"/projects/07/01-browse-by-types.png",
			"/projects/07/02-search-cocktails-by-name.png",
			"/projects/07/05-cocktail-detail.png",
			"/projects/07/03-your-fav-drinks.png",
		],
		tags: [
			"NextJs",
			"TypeScript",
			"TheCocktailDB API",
			"Tanstack Query",
			"Zustand",
			"Shadcn/UI",
		],
		category: "Web Application",
		features: [
			"Cocktail of the Moment with random drink discovery",
			"Alphabetical cocktail browsing from A to Z",
			"Search cocktails by name",
			"Ingredient directory for discovering cocktails by ingredient",
			"Detailed cocktail recipes with ingredients and preparation instructions",
			"Save and manage favorite cocktails using local storage",
			"Responsive interface optimized for desktop and mobile devices",
			"REST API integration with TheCocktailDB",
			"Reusable UI components with Shadcn/UI and Radix UI primitives",
			"Modern icons using Lucide React",
		],
		link: "https://liquid-index.vercel.app/",
		github: "https://github.com/mryeminaung/cocktail-explorer",
	},
	{
		id: 8,
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
];

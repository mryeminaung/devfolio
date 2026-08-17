import { Certificate } from "../achievements.types";

export const certificates: Certificate[] = [
	{
		slug: "react-basics",
		title: "React Basics",
		issuer: "Meta / Coursera",
		date: "2023",
		image: "/certificates/04.png",
		description:
			"Professional certificate covering React, JavaScript, HTML/CSS, and UX design principles.",
		story: `I started this certificate when I realised my self-taught React knowledge had gaps — I knew how to build things but not always why. The Meta program forced me to go back to fundamentals: semantic HTML, CSS specificity, and JavaScript under the hood before touching React at all.\n\nThe hardest part was the capstone project, where I had to build a fully functioning restaurant booking app from scratch with no hints. It pushed me to read documentation properly instead of copying Stack Overflow answers.\n\nAfter finishing, my debugging speed noticeably improved because I finally understood the render cycle properly.`,
		skills: [
			"React",
			"JavaScript",
			"HTML",
			"CSS",
			"UX Design",
			"Version Control",
		],
		resources: [
			{
				title: "Meta Front-End Developer on Coursera",
				url: "https://coursera.org",
			},
			{ title: "React Documentation", url: "https://react.dev" },
		],
		credentialUrl:
			"https://www.coursera.org/account/accomplishments/verify/EU9CT6AAT4GS",
	},
	{
		slug: "advanced-react",
		title: "Advanced React",
		issuer: "Meta / Coursera",
		date: "2023",
		image: "/certificates/05.png",
		description:
			"300-hour certification covering advanced React patterns, hooks, context API, performance optimization, and testing.",
		story: `After the React Basics cert, I wanted to go deeper. This course covered the patterns I kept seeing in production codebases but didn't understand — compound components, render props, and custom hooks.\n\nThe performance module was a wake-up call. I learned how unnecessary re-renders were silently killing my apps' performance. React.memo, useMemo, and useCallback finally made sense when I profiled real components.\n\nThe biggest takeaway was learning to think in terms of data flow rather than UI structure. That shift made my components more predictable and easier to debug.`,
		skills: [
			"React",
			"Advanced Hooks",
			"Context API",
			"Performance",
			"Testing",
			"Design Patterns",
		],
		resources: [
			{ title: "Advanced React on Coursera", url: "https://coursera.org" },
			{ title: "React Documentation", url: "https://react.dev" },
		],
		credentialUrl:
			"https://www.coursera.org/account/accomplishments/verify/NTCLKJ3MC9H5",
	},
	{
		slug: "php-deep-dive-laravel",
		title: "PHP + Deep Dive Laravel",
		issuer: "Creative Coder Myanmar",
		date: "2023",
		image: "/certificates/01.png",
		description:
			"Comprehensive certification covering PHP fundamentals, object-oriented programming, Laravel framework, RESTful APIs, and database design.",
		story: `I took this course when I wanted to understand backend development beyond just writing API endpoints. Laravel's elegant syntax made PHP feel modern and enjoyable to write.\n\nThe Eloquent ORM section was a turning point. Instead of writing raw SQL queries everywhere, I learned to think in models and relationships. Building a blog with posts, comments, and users taught me how to structure data properly.\n\nThe RESTful API modules connected the dots between frontend and backend. I finally understood how authentication tokens work and why CORS exists. That knowledge made full-stack development feel achievable rather than intimidating.`,
		skills: ["PHP", "Laravel", "Eloquent ORM", "RESTful APIs", "MySQL", "OOP"],
		resources: [
			{ title: "Laravel Documentation", url: "https://laravel.com/docs" },
			{ title: "PHP: The Right Way", url: "https://phptherightway.com" },
		],
		credentialUrl: "https://creativecodermm.com/certificates/mryeminaung/689",
	},
	{
		slug: "data-analyst-associate",
		title: "Data Analyst Associate",
		issuer: "DataCamp",
		date: "2026",
		image: "/certificates/02.png",
		description:
			"Foundation certification covering Python for data analysis, SQL querying, data visualization with matplotlib and seaborn, and exploratory data analysis.",
		story: `I pursued this certificate because I wanted to make data-driven decisions instead of guessing. Python's pandas library made spreadsheet work feel tedious by comparison — once you can chain operations, going back to Excel clicks is painful.\n\nThe SQL modules taught me to think in set operations rather than loops. Writing a single query to replace 50 lines of Python code felt like a superpower. I started using SQL for any task involving structured data.\n\nThe visualization section was the most rewarding. Creating charts that actually told stories from messy datasets changed how I communicate technical findings to non-technical stakeholders.`,
		skills: [
			"Python",
			"Pandas",
			"SQL",
			"Data Visualization",
			"Matplotlib",
			"Seaborn",
		],
		resources: [
			{ title: "DataCamp Python Track", url: "https://datacamp.com" },
			{
				title: "Python for Data Analysis (Book)",
				url: "https://wesmckinney.com/book/",
			},
		],
		credentialUrl: "https://www.datacamp.com/certificate/DAA0015999987929",
	},
	{
		slug: "version-control",
		title: "Version Control",
		issuer: "Meta / Coursera",
		date: "2023",
		image: "/certificates/06.png",
		description:
			"Certificate covering Git fundamentals, branching strategies, GitHub workflows, and collaborative development.",
		story: `Before this I was using Git as a backup tool — just committing everything to main with messages like "fix" or "update". I knew it was wrong but didn't know what right looked like.\n\nLearning branching strategy (feature branches, PR reviews, merge vs rebase) transformed how I work. I started treating every personal project as if a team might read my commits, which made me write better commit messages.\n\nGitHub Actions was the bonus revelation. Seeing CI run automatically on a push made the DevOps world feel suddenly accessible rather than mysterious.`,
		skills: [
			"Git",
			"GitHub",
			"Branching",
			"Pull Requests",
			"CI/CD Basics",
			"Collaborative Workflow",
		],
		resources: [
			{ title: "Version Control on Coursera", url: "https://coursera.org" },
			{ title: "Git Documentation", url: "https://git-scm.com/doc" },
		],
		credentialUrl:
			"https://www.coursera.org/account/accomplishments/verify/743QUTGBY869",
	},
	{
		slug: "the-fullstack-developer-path",
		title: "The Fullstack Developer Path",
		issuer: "Scrimba",
		date: "2026",
		image: "/certificates/03.png",
		description:
			"Comprehensive certification covering frontend development, backend APIs, databases, deployment, and full-stack project architecture.",
		story: `I took this course because I wanted to understand how the pieces fit together. Building frontend and backend separately was fine, but I struggled with connecting them coherently.\n\nThe deployment section was a revelation. Seeing a full-stack app go from localhost to production in one lesson made the entire pipeline feel less mysterious. I finally understood environment variables, build processes, and why certain things work locally but fail in production.\n\nThe final project — building a task management app with authentication, CRUD operations, and a responsive UI — was the most challenging and rewarding experience. It forced me to think about data flow across the entire stack.`,
		skills: [
			"React",
			"Node.js",
			"Express",
			"MongoDB",
			"REST APIs",
			"Deployment",
		],
		resources: [
			{ title: "Scrimba Fullstack Path", url: "https://scrimba.com" },
			{ title: "Full Stack Open", url: "https://fullstackopen.com" },
		],
		credentialUrl:
			"https://scrimba.com/cert29m6qWaiJjyvVxBetYY5NJEWpTHA2VPU96YkiA6jWvqRr",
	},
	{
		slug: "advanced-react-by-scrimba",
		title: "Advanced React (Scrimba)",
		issuer: "Scrimba",
		date: "2023",
		image: "/certificates/07.png",
		description:
			"Specialized certification covering advanced React patterns, custom hooks, context API, performance optimization, and state management.",
		story: `Scrimba's interactive format was perfect for learning advanced React concepts. Being able to pause, edit code, and see results immediately made complex patterns click.\n\nThe custom hooks section was the most valuable. I learned to extract stateful logic into reusable functions instead of duplicating useEffect chains across components. Building a useLocalStorage hook was the "aha" moment.\n\nThe state management module showed me when to use Context versus Redux versus local state. That decision-making framework saved me from over-engineering projects.`,
		skills: [
			"React",
			"Custom Hooks",
			"Context API",
			"Performance",
			"State Management",
			"TypeScript",
		],
		resources: [
			{ title: "Scrimba Advanced React", url: "https://scrimba.com" },
			{ title: "React Patterns", url: "https://reactpatterns.com" },
		],
		credentialUrl:
			"https://scrimba.com/cert2uNje7frynwZ2JyY9CbWusDoC3thSxqUuw3",
	},
	{
		slug: "programming-for-everybody",
		title: "Programming for Everybody (Getting Started with Python)",
		issuer: "University of Michigan",
		date: "2020",
		image: "/certificates/09.png",
		description:
			"Foundational certification covering Python basics, variables, expressions, conditional code, functions, and loops.",
		story: `This was my first step into programming. I had tried learning JavaScript before but got overwhelmed by syntax. Python's readability made the concepts feel approachable.\n\nThe course used a "everyone can code" approach that removed the intimidation factor. Writing my first loop that printed numbers felt like a breakthrough — suddenly I could make computers do repetitive tasks for me.\n\nThe assignments were practical from day one. Building a tip calculator and a grade converter showed me programming wasn't abstract theory — it solved real problems I could relate to.`,
		skills: [
			"Python",
			"Variables",
			"Functions",
			"Loops",
			"Conditionals",
			"Problem Solving",
		],
		resources: [
			{
				title: "Python for Everybody on Coursera",
				url: "https://coursera.org",
			},
			{
				title: "Python.org Tutorial",
				url: "https://docs.python.org/3/tutorial/",
			},
		],
		credentialUrl:
			"https://www.coursera.org/account/accomplishments/verify/MTMLFPS8SWV4",
	},
	{
		slug: "python-data-structures",
		title: "Python Data Structures",
		issuer: "University of Michigan",
		date: "2021",
		image: "/certificates/08.png",
		description:
			"Intermediate certification covering Python data structures including strings, lists, dictionaries, tuples, and file handling.",
		story: `After the first Python course, I wanted to understand how to organize and manipulate data effectively. This course built on the basics and introduced data structures that make code efficient and readable.\n\nThe dictionaries module was a turning point. Learning to use key-value pairs instead of nested if-else statements made my code cleaner and faster. I rewrote my first project using dictionaries and it went from 50 lines to 15.\n\nThe file handling section connected everything together. Being able to read data from files, process it, and write results back was the first time programming felt like a complete toolset rather than isolated concepts.`,
		skills: [
			"Python",
			"Lists",
			"Dictionaries",
			"Strings",
			"Tuples",
			"File Handling",
		],
		resources: [
			{
				title: "Python Data Structures on Coursera",
				url: "https://coursera.org",
			},
			{
				title: "Learn Python the Hard Way",
				url: "https://learnpythonthehardway.org",
			},
		],
		credentialUrl:
			"https://www.coursera.org/account/accomplishments/verify/J38AKCKDXHJL",
	},
];

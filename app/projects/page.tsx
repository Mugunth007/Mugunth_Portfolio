import type { Metadata } from "next";
import { generateBreadcrumbJsonLd } from "app/utils/jsonLd";
import ProjectCard from "../components/project-card";

export const metadata: Metadata = {
	metadataBase: new URL("https://mugundhanperumal.com"),
	title: "Projects",
	description:
		"Explore projects by Mugundhan Perumal: Netflix Analytics System, AI Developer Assistant, Space Events Tracker, and more. Built with React, Python, Node.js & TypeScript.",
	keywords: [
		"Mugundhan Perumal Projects",
		"Software Engineering Projects",
		"React Projects",
		"Data Science Projects",
		"Python Projects",
		"Portfolio",
	],
	alternates: {
		canonical: "/projects",
	},
	openGraph: {
		title: "Projects - Software Engineering & Data Science | Mugundhan Perumal",
		description:
			"Explore projects by Mugundhan Perumal: Netflix Analytics System, AI Developer Assistant, Space Events Tracker, and more.",
		url: "https://mugundhanperumal.com/projects",
		siteName: "Mugundhan Perumal's Portfolio",
		images: [
			{
				url: "/ogs/ogs-bg.png",
				width: 1200,
				height: 630,
				alt: "Mugundhan Perumal's Projects Portfolio",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Projects - Software Engineering & Data Science | Mugundhan Perumal",
		description:
			"Explore projects by Mugundhan Perumal: Netflix Analytics System, AI Developer Assistant, Space Events Tracker, and more.",
		images: ["/ogs/ogs-bg.png"],
	},
};

const projectsData = [
	{
		project: "Data-Driven Netflix Analytics System",
		description:
			"An end-to-end analytical platform using MongoDB, Express, and React to visualize user engagement and content trends. Integrated TMDB API with custom aggregation pipelines for content performance metrics.",
		technologies: ["MongoDB", "Express", "React", "Node.js", "TMDB API"],
		website: "https://github.com/Mugunth007/Netflix-Clone-E2E-Deployment",
		category: "Full Stack",
		workType: "Personal",
	},
	{
		project: "AI-Powered Developer Insights Assistant",
		description:
			"A voice-enabled analytics assistant integrating Gemini API to analyze developer activity and generate insights. Uses NLP and Python-based data analysis to automate coding-pattern recognition.",
		technologies: ["TypeScript", "Gemini API", "Python", "NLP"],
		website: "https://github.com/Mugunth007/AI-Powered-Voice-Enabled-Developer-Productivity-Assistant",
		category: "Full Stack",
		workType: "Personal",
	},
	{
		project: "Space Events Tracker Dashboard",
		description:
			"A real-time dashboard visualizing NASA and SpaceX event data using REST APIs. Includes statistical analysis on event frequency and launch success metrics for data storytelling.",
		technologies: ["React", "Chart.js", "REST APIs", "JavaScript"],
		website: "https://github.com/Mugunth007/space-events-tracker",
		category: "Frontend",
		workType: "Personal",
	},
	{
		project: "AI Expense Tracker",
		description:
			"An intelligent expense tracking application leveraging AI to categorize and analyze spending patterns, providing insights for better financial management.",
		technologies: ["React", "AI/ML", "Node.js"],
		website: "https://github.com/Mugunth007/AI_EXPENSE_TRACKER",
		category: "Full Stack",
		workType: "Personal",
	},
	{
		project: "Chat App",
		description:
			"A real-time chat application built with React and JavaScript, featuring live messaging capabilities and a clean user interface.",
		technologies: ["React", "JavaScript", "WebSockets"],
		website: "https://github.com/Mugunth007/chat-app-react",
		category: "Frontend",
		workType: "Personal",
	},
	{
		project: "Employee Record Management System (Mini HRIS)",
		description:
			"A human resource information system for managing employee records, built with TypeScript for type-safe data handling and management workflows.",
		technologies: ["TypeScript", "React", "Node.js"],
		website: "https://github.com/Mugunth007/Employee-Record-Management-System-Mini-HRIS",
		category: "Full Stack",
		workType: "Personal",
	},
];

export default function ProjectsPage() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "CollectionPage",
		name: "Mugundhan Perumal's Projects",
		description:
			"Portfolio of projects built by Mugundhan Perumal, including data-driven applications, AI-powered tools, and web applications.",
		url: "https://mugundhanperumal.com/projects",
		author: {
			"@type": "Person",
			name: "Mugundhan Perumal",
			url: "https://mugundhanperumal.com",
		},
		mainEntity: {
			"@type": "ItemList",
			itemListElement: projectsData.map((project, index) => ({
				"@type": "ListItem",
				position: index + 1,
				item: {
					"@type": "SoftwareApplication",
					name: project.project,
					description: project.description,
					applicationCategory: "WebApplication",
					url: project.website,
				},
			})),
		},
	};

	const breadcrumbJsonLd = generateBreadcrumbJsonLd([
		{ name: "Home", url: "https://mugundhanperumal.com" },
		{ name: "Projects", url: "https://mugundhanperumal.com/projects" },
	]);

	return (
		<section>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(breadcrumbJsonLd),
				}}
			/>
			<h1 className="font-medium text-2xl mb-4 tracking-tight">Projects 🚀</h1>
			<p className="sr-only">
				A showcase of software engineering and data science projects built by Mugundhan Perumal, including full stack applications, AI-powered tools, and data visualization dashboards. Projects are built using technologies like React, Python, TypeScript, Node.js, MongoDB, and various APIs.
			</p>

			{/* Projects Section */}
			<div className="prose prose-neutral dark:prose-invert">
				{projectsData.map((project, index) => (
					<ProjectCard
						key={index}
						title={project.project}
						description={project.description}
						technologies={project.technologies}
						website={project.website}
						category={project.category}
						workType={project.workType}
					/>
				))}
			</div>
		</section>
	);
}

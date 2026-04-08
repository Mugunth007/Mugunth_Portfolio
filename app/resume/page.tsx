import type { Metadata } from "next";
import { generateBreadcrumbJsonLd } from "app/utils/jsonLd";
import WorkExperienceItem from "../components/work-experience-item";
import EducationItem from "../components/education-item";
import { config } from "../config/config";
import Chip from "../components/chip";

export const metadata: Metadata = {
	metadataBase: new URL("https://mugundhanperumal.com"),
	title: "Resume",
	description:
		"Mugundhan Perumal's resume: Software Engineer at Dell Technologies. Experienced in React, Python, TypeScript, Data Science & Machine Learning.",
	keywords: [
		"Mugundhan Perumal Resume",
		"Software Engineer Resume",
		"Dell Technologies",
		"React Developer Resume",
		"Data Science Resume",
		"Python Developer Resume",
	],
	alternates: {
		canonical: "/resume",
	},
	openGraph: {
		type: "article",
		url: "https://mugundhanperumal.com/resume",
		title: "Resume - Software Engineer | Mugundhan Perumal",
		siteName: "Mugundhan Perumal's Portfolio",
		description:
			"Software Engineer at Dell Technologies. Experienced in React, Python, TypeScript, Data Science & Machine Learning.",
		images: [
			{
				url: "/ogs/ogs-bg.png",
				width: 1200,
				height: 630,
				alt: "Mugundhan Perumal's Software Engineer Resume",
			},
		],
	},
	twitter: {
		card: "summary_large_image",
		title: "Resume - Software Engineer | Mugundhan Perumal",
		description:
			"Software Engineer at Dell Technologies. Experienced in React, Python, TypeScript, Data Science & Machine Learning.",
		images: ["/ogs/ogs-bg.png"],
	},
};

const resumeData = {
	workExperience: [
		{
			company: "Dell Technologies",
			logo: "https://upload.wikimedia.org/wikipedia/commons/1/18/Dell_logo_2016.svg",
			location: "Bengaluru, India",
			website: config.companies.dell,
			positions: [
				{
					role: "Software Engineer",
					period: "Jun 2024 - Present",
					workType: "Full-time",
					technologies: [
						"React",
						"Single-SPA",
						"TypeScript",
						"Node.js",
						"Python",
						"REST APIs",
					],
					responsibilities: [
						"Continued as one of the early developers on the flagship enterprise portal, contributing to all major feature development and successfully shipping releases 1.0 through 1.4.",
						"Took sole responsibility for converting the monolithic single-page application into a microfrontend architecture using Single-SPA, enabling independent deployment across multiple modules — and successfully delivered it.",
						"Developed a workflow-enabled chatbot system for the Dell Management Portal that automates operational tasks such as policy publishing, application deployment, and device information retrieval through backend API orchestration.",
						"Built a recommendation engine identifying outdated Windows 10 Dell devices and suggesting alternative laptop models using ranking algorithms, directing users to Dell sales pages to support upgrade and device refresh initiatives.",
						"Won two Dell Game Changer awards — Dell's most prestigious recognition — in a single year as a fresher, for outstanding contributions to the project.",
					],
				},
				{
					role: "Software Engineer Intern",
					period: "Feb 2024 - May 2024",
					workType: "Internship",
					technologies: [
						"React",
						"TypeScript",
						"Node.js",
						"REST APIs",
					],
					responsibilities: [
						"Joined as one of the earliest developers when the flagship enterprise portal project was initiated, contributing to the foundational architecture and initial feature development.",
						"Collaborated closely with the team to build core modules from scratch, establishing development patterns and best practices adopted throughout the project lifecycle.",
					],
				},
			],
		},
	],
	education: [
		{
			institution: "Vellore Institute of Technology",
			logo: "https://upload.wikimedia.org/wikipedia/en/c/c5/Vellore_Institute_of_Technology_seal_2017.svg",
			degree:
				"B.Tech in Computer Science and Engineering (Data Science Specialization)",
			period: "2020 - 2024",
			location: "Vellore, Tamil Nadu",
		},
	],
	achievements: [
		{
			title: "Dell Game Changer Award (x2)",
			description: "Received two Dell Game Changer awards — Dell's most prestigious recognition — in a single year as a fresher, for exceptional contributions to the flagship enterprise portal project.",
		},
		{
			title: "Google Data Analytics Professional Certificate",
			description: "Gained expertise in SQL, data cleaning, visualization, and decision-making with real-world datasets.",
			link: "https://coursera.org/share/be1625b0fc5ef2dc1e611f76fe3ae1c4",
		},
		{
			title: "Merit Scholarship (STARS)",
			description: "Full scholarship for academic excellence; ranked first in district government schools.",
		},
		{
			title: "MERN Stack Certification",
			description: "Practical experience in end-to-end data-driven web application development.",
			link: "https://drive.google.com/file/d/1p8ZtkJwcrre_3j7yFbqPsozUsKDzbMr5/view?usp=sharing",
		},
	],
};

export default function WorkPage() {
	const breadcrumbJsonLd = generateBreadcrumbJsonLd([
		{ name: "Home", url: "https://mugundhanperumal.com" },
		{ name: "Resume", url: "https://mugundhanperumal.com/resume" },
	]);

	const profileJsonLd = {
		"@context": "https://schema.org",
		"@type": "ProfilePage",
		mainEntity: {
			"@type": "Person",
			name: "Mugundhan Perumal",
			url: "https://mugundhanperumal.com",
			jobTitle: "Software Engineer",
			worksFor: [
				{
					"@type": "Organization",
					name: "Dell Technologies",
					url: config.companies.dell,
				},
			],
			alumniOf: [
				{
					"@type": "EducationalOrganization",
					name: "Vellore Institute of Technology",
				},
			],
			knowsAbout: [
				"React",
				"Python",
				"TypeScript",
				"Node.js",
				"Data Science",
				"Machine Learning",
				"SQL",
			],
		},
	};

	return (
		<section>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(breadcrumbJsonLd),
				}}
			/>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
					__html: JSON.stringify(profileJsonLd),
				}}
			/>
			<div className="flex">
				<h1 className='font-medium text-2xl mb-2 tracking-tight font-["monospace"]'>
					My Resume 📝
				</h1>
			</div>
			<p className="sr-only">
				Professional resume of Mugundhan Perumal, a Software Engineer from Kanchipuram, Tamil Nadu, India. Currently working at Dell Technologies in Bengaluru. Experienced in React, Python, TypeScript, Node.js, SQL, and Data Science. Education includes a B.Tech in Computer Science (Data Science) from Vellore Institute of Technology.
			</p>

			{/* Work Section */}
			<div className="prose prose-neutral dark:prose-invert">
				<h2 className="font-medium text-2xl mb-4">Work Experience</h2>
				{resumeData.workExperience.map((job, index) => (
					<WorkExperienceItem key={index} job={job} />
				))}
			</div>

			<hr className="my-6 border-neutral-100 dark:border-neutral-800" />

			{/* Education Section */}
			<div className="prose prose-neutral dark:prose-invert">
				<h2 className="font-medium text-2xl mb-4">Education</h2>
				{resumeData.education.map((edu, index) => (
					<EducationItem key={index} edu={edu} />
				))}
			</div>

			<hr className="my-6 border-neutral-100 dark:border-neutral-800" />

			{/* Skills Section */}
			<div className="prose prose-neutral dark:prose-invert">
				<h2 className="font-medium text-2xl mb-4">Skills</h2>
				<div className="not-prose">
					<div className="mb-4">
						<h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Programming</h3>
						<div className="flex flex-wrap gap-2">
							{["Python", "SQL", "JavaScript", "TypeScript", "Java", "C++"].map(skill => (
								<Chip key={skill}>{skill}</Chip>
							))}
						</div>
					</div>
					<div className="mb-4">
						<h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Data Tools</h3>
						<div className="flex flex-wrap gap-2">
							{["Tableau", "Power BI", "Excel", "MongoDB", "Pandas", "NumPy", "Matplotlib", "Seaborn"].map(skill => (
								<Chip key={skill}>{skill}</Chip>
							))}
						</div>
					</div>
					<div className="mb-4">
						<h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Technologies</h3>
						<div className="flex flex-wrap gap-2">
							{["React", "Node.js", "Express", "Next.js", "Single-SPA", "REST APIs", "Git", "Machine Learning"].map(skill => (
								<Chip key={skill}>{skill}</Chip>
							))}
						</div>
					</div>
					<div className="mb-4">
						<h3 className="text-sm font-semibold text-neutral-900 dark:text-neutral-100 mb-2">Concepts</h3>
						<div className="flex flex-wrap gap-2">
							{["Statistical Analysis", "Data Pipelines", "Dashboarding", "ETL", "Data Visualization", "Microfrontend Architecture"].map(skill => (
								<Chip key={skill}>{skill}</Chip>
							))}
						</div>
					</div>
				</div>
			</div>

			<hr className="my-6 border-neutral-100 dark:border-neutral-800" />

			{/* Achievements Section */}
			<div className="prose prose-neutral dark:prose-invert">
				<h2 className="font-medium text-2xl mb-4">Achievements & Certifications</h2>
				{resumeData.achievements.map((achievement, index) => (
					<div key={index} className="mb-4">
						<h3 className="text-base font-semibold text-neutral-900 dark:text-neutral-100">
							{achievement.link ? (
								<a href={achievement.link} target="_blank" rel="noopener noreferrer" className="underline">
									{achievement.title} ↗
								</a>
							) : (
								achievement.title
							)}
						</h3>
						<p className="text-sm text-neutral-600 dark:text-neutral-400 mt-1">
							{achievement.description}
						</p>
					</div>
				))}
			</div>
		</section>
	);
}

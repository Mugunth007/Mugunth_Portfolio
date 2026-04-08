import ArrowIcon from "./components/ArrowIcon";
import type { Metadata } from "next";
import Separator from "./components/separator";
import GitHubCalendar from "react-github-calendar";
import { config } from "./config/config";
import ExperienceCounter from "./components/experience-counter";

export const metadata: Metadata = {
	metadataBase: new URL("https://mugundhanperumal.com"),
	title: "Mugundhan Perumal - Software Engineer from India",
	description:
		"Mugundhan Perumal is a Software Engineer from Kanchipuram, India specializing in React, Python, TypeScript & Data Science. Currently at Dell Technologies.",
	keywords: [
		"Mugundhan Perumal",
		"Software Engineer",
		"Full Stack Developer",
		"React Developer",
		"Python Developer",
		"Data Science",
		"Dell Technologies",
		"India Developer",
		"Portfolio",
	],
	alternates: {
		canonical: "/",
	},
	openGraph: {
		title: "Mugundhan Perumal - Software Engineer from India",
		description:
			"Software Engineer from Kanchipuram, India specializing in React, Python, TypeScript & Data Science. Currently at Dell Technologies.",
		url: "https://mugundhanperumal.com",
		siteName: "Mugundhan Perumal's Portfolio",
		images: [
			{
				url: "/ogs/ogs-bg.png",
				width: 1200,
				height: 630,
				alt: "Mugundhan Perumal - Software Engineer Portfolio",
			},
		],
		type: "website",
	},
	twitter: {
		card: "summary_large_image",
		title: "Mugundhan Perumal - Software Engineer from India",
		description:
			"Software Engineer from Kanchipuram, India specializing in React, Python, TypeScript & Data Science. Currently at Dell Technologies.",
		images: ["/ogs/ogs-bg.png"],
	},
};

export default function Page() {
	const jsonLd = {
		"@context": "https://schema.org",
		"@type": "Person",
		name: "Mugundhan Perumal",
		url: "https://mugundhanperumal.com",
		image: "/ogs/ogs-bg.png",
		jobTitle: "Software Engineer",
		worksFor: [
			{
				"@type": "Organization",
				name: "Dell Technologies",
				url: config.companies.dell,
			},
		],
		sameAs: [
			config.socials.github,
			config.socials.linkedin,
		],
		knowsAbout: [
			"Software Engineering",
			"React",
			"Python",
			"TypeScript",
			"Data Science",
			"Node.js",
			"Machine Learning",
		],
		address: {
			"@type": "PostalAddress",
			addressLocality: "Kanchipuram",
			addressRegion: "Tamil Nadu",
			addressCountry: "India",
		},
	};

	return (
		<section>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
			/>
			<p className="sr-only">
				Mugundhan Perumal is a Software Engineer based in Bangalore, India. He specializes in building modern web applications and data-driven solutions using React, Python, TypeScript, Node.js, and SQL. Currently working as a Software Engineer at Dell Technologies, Mugundhan joined as one of the earliest developers on a flagship enterprise project during his internship and continued as a full-time engineer. He has been instrumental in shipping releases 1.0 through 1.4, won two Dell Game Changer awards in a single year as a fresher, and took sole responsibility for migrating the platform from a single-page application to a microfrontend architecture using Single-SPA.
			</p>
			<header className="mb-6">
				<div className="flex items-center gap-3 mb-2 flex-wrap">
					<h1 className='font-medium text-2xl tracking-tight font-["monospace"]'>
						Hey, I'm Mugundhan Perumal 👋
					</h1>
				</div>
				<p className="text-lg prose prose-neutral dark:prose-invert">
					I'm a Software Engineer from Bangalore, India, with{" "}
					<ExperienceCounter />, building data-driven solutions and modern web applications.
				</p>
			</header>

			<Separator />

			<div className="mb-8 prose prose-neutral dark:prose-invert">
				<h2>Professional Work</h2>
				<p>
					I'm a <strong>Software Engineer</strong> at{" "}
					<a href={config.companies.dell} target="_blank" rel="noopener noreferrer" className="font-medium underline">
						Dell Technologies
					</a>
					, where I joined as one of the earliest developers when the project kicked off during my internship. I continued on as a full-time engineer, contributing to every major feature and successfully shipping releases <strong>1.0 through 1.4</strong>. I was honored with <strong>two Dell Game Changer awards</strong> — Dell's most prestigious recognition — in a single year as a fresher.
				</p>
				<p>
					Most recently, I took <strong>sole responsibility</strong> for converting the platform from a monolithic single-page application into a microfrontend architecture using Single-SPA, and successfully delivered it. Beyond the MFE migration, I've built workflow-enabled chatbot systems, recommendation engines, and other enterprise-scale solutions.
				</p>
				<p>
					I hold a <strong>B.Tech in Computer Science (Data Science)</strong> from{" "}
					<a href="https://vit.ac.in" target="_blank" rel="noopener noreferrer" className="font-medium underline">
						VIT Vellore
					</a>{" "} - For more details about my experience,
					check out my <a href="https://drive.google.com/file/d/15mA0j8Ggg2XePc1wpPIgiF0I8ID_fpBl/view?usp=sharing" target="_blank" rel="noopener noreferrer" className="font-medium underline">resume</a>.
				</p>
			</div>

			<Separator />

			<div className="mb-8 prose prose-neutral dark:prose-invert">
				<h2>What Makes Me Different</h2>
				<p>
					I bring a unique blend of software engineering and data science skills. From being one of the founding developers on a flagship enterprise project to owning the entire SPA-to-microfrontend migration — I approach every challenge with ownership, technical depth, and a product-first mindset.
				</p>
				<p>
					I thrive at the intersection of web development and data — leveraging tools like Python, SQL, Tableau, and Machine Learning alongside React and Node.js to build solutions that don't just work, but provide genuine insights and value.
				</p>
			</div>

			<Separator />

			<div className="mb-8 prose prose-neutral dark:prose-invert">
				<h2>GitHub Contributions</h2>
				<p className="sr-only">
					Mugundhan Perumal's GitHub contribution graph showing daily coding activity. Mugundhan actively contributes to repositories involving React, Python, TypeScript, and data-driven projects on GitHub as Mugunth007.
				</p>
				<GitHubCalendar username="Mugunth007" />
			</div>

			<div className="prose prose-neutral dark:prose-invert">
				<article className="text-xs sm:hidden lg:block">
					Press ⌘+K to navigate with your keyboard.
				</article>
			</div>

			<nav aria-label="Quick links to connect with Mugundhan Perumal">
				<h2 className="sr-only">Get in Touch</h2>
				<ul className="flex flex-col md:flex-row mt-8 space-x-0 md:space-x-4 space-y-2 md:space-y-0 font-sm text-neutral-600 dark:text-neutral-300">
					<li>
						<a
							className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
							rel="noopener noreferrer"
							target="_blank"
							href={config.socials.github}
						>
							<ArrowIcon />
							<p className="h-7 ml-2">GitHub</p>
						</a>
					</li>
					<li>
						<a
							className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all"
							rel="noopener noreferrer"
							target="_blank"
							href={config.socials.linkedin}
						>
							<ArrowIcon />
							<p className="h-7 ml-2">LinkedIn</p>
						</a>
					</li>
				</ul>

				<div>
					<a
						className="flex items-center hover:text-neutral-800 dark:hover:text-neutral-100 transition-all text-neutral-600 dark:text-neutral-300 mt-3"
						rel="noopener noreferrer"
						target="_blank"
						href={`mailto:${config.socials.email}?subject=Hello Mugundhan!`}
					>
						<p className="h-7">
							<span className="mr-2 text-neutral-600">📧</span>
							{config.socials.email}
						</p>
						<span className="sr-only">Send an email to Mugundhan Perumal</span>
					</a>
				</div>
			</nav>
		</section>
	);
}

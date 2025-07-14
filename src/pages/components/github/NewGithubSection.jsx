import React from "react";
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa";

const projects = [
	{
		name: "Personal Website",
		description:
			"A modern portfolio website built with Next.js, React, and Tailwind CSS, featuring a professional design, GitHub integration, and responsive layout.",
		url: "https://github.com/IshanPhadte776/IshanNextReactWebsite",
		live: null, // Remove the live link for personal website
		tags: ["Next.js", "React", "Tailwind CSS", "Portfolio"],
	},
	{
		name: "Job Posting Scraper",
		description:
			"A tool that scrapes job postings from various sources, processes and analyzes listings, and provides insights for job seekers.",
		url: "https://github.com/IshanPhadte776/JobPostingScraper", // Replace with your actual repo
		live: null,
		tags: ["Python", "Web Scraping", "Automation"],
	},
];

const NewGithubSection = () => (
	<section className="w-full max-w-4xl mx-auto mt-12 px-2 md:px-6 mb-24">
		<h2 className="text-4xl md:text-5xl font-extrabold text-primary-700 mb-4 text-center drop-shadow-lg tracking-tight">
			Featured Projects
		</h2>
		<p className="text-lg md:text-xl text-gray-700 mb-10 text-center max-w-2xl mx-auto">
			A selection of my most impactful and representative software projects.
		</p>
		<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
			{projects.map((project) => (
				<div
					key={project.name}
					className="rounded-2xl border border-gray-200 bg-white/95 shadow-lg hover:shadow-2xl transition-all duration-300 p-6 flex flex-col gap-2 relative"
				>
					<div className="flex items-center gap-2 mb-2">
						<FaGithub className="text-xl text-gray-700" />
						<h3 className="font-bold text-lg text-primary-700">
							{project.name}
						</h3>
						{project.live && (
							<a
								href={project.live}
								target="_blank"
								rel="noopener noreferrer"
								className="ml-auto text-primary-500 hover:text-primary-700"
								title="View Live"
							>
								<FaExternalLinkAlt />
							</a>
						)}
					</div>
					<p className="text-gray-700 text-sm mb-2">
						{project.description}
					</p>
					<div className="flex flex-wrap gap-2 mt-auto">
						{project.tags.map((tag) => (
							<span
								key={tag}
								className="bg-primary-50 text-primary-700 px-2 py-1 rounded-full text-xs font-medium border border-primary-100"
							>
								{tag}
							</span>
						))}
					</div>
					<a
						href={project.url}
						target="_blank"
						rel="noopener noreferrer"
						className="absolute top-4 right-4 text-gray-400 hover:text-primary-500"
						title="View on GitHub"
					>
						<FaGithub />
					</a>
				</div>
			))}
		</div>
	</section>
);

export default NewGithubSection;

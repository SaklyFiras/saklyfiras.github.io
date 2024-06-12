"use client";
import Image from "next/image";
import { useState } from "react";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";
import { MeteorPreview } from "../ui/MeteorCard";
import { cn } from "@/lib/utils";

const individual = [
	{
		title: "Initial consultation",
		description:
			"First I get to know my client better and discover what he/she needs.",
	},
	{
		title: "Concept design",
		description:
			"The creation of a concept helps in the further app development.",
	},
	{
		title: "Project development",
		description:
			"At this stage, I develop your app and test it to present the final result.",
	},
	{
		title: "Project deployment",
		description:
			"Once the app is fully developed and tested, it is live and accessible to the public.",
	},
	{
		title: "Long-term maintenance",
		description:
			"Ongoing maintenance ensures the website continues to function optimally.",
	},
];

const corporate = [
	{
		title: "Project Initiation",
		description:
			"Define the project scope and objectives, and secure necessary approvals and resources.",
	},
	{
		title: "Requirement Understanding",
		description:
			"Gather and analyze the needs and expectations of stakeholders to define project requirements.",
	},
	{
		title: "Planning and Task Assignment",
		description:
			"Develop a detailed project plan, assign tasks, and set deadlines.",
	},
	{
		title: "Development and Execution",
		description:
			"Implement the project plan by executing tasks and building deliverables.",
	},
	{
		title: "Documentation and Reporting",
		description:
			"Create and maintain comprehensive documentation and regularly report on project progress.",
	},
	{
		title: "Collaboration and Communication",
		description:
			"Ensure effective teamwork and stakeholder communication throughout the project.",
	},
	{
		title: "Testing and Quality Assurance",
		description:
			"Conduct thorough testing to ensure deliverables meet quality standards and requirements.",
	},
	{
		title: "Deployment and Support",
		description:
			"Launch the project deliverables and provide necessary support for users.",
	},
	{
		title: "Project Closure",
		description:
			"Finalize all activities, formally close the project, and hand over deliverables.",
	},
	{
		title: "Continuous Improvement",
		description:
			"Review project performance and identify areas for future improvement.",
	},
];

function SectionsFiveSix() {
	const year = new Date().getFullYear();
	const [isIndividual, setIsIndividual] = useState(true);
	return (
		<section className=" flex justify-evenly">
			<div className="  text-center space-y-4 flex justify-center flex-col ">
				<h2 data-aos="zoom-in" className=" text-5xl font-extrabold ">
					How do i <span className=" text-blue-500">Work</span> ?
				</h2>
				<p data-aos="zoom-in" className="">
					Take a look at my working process in detail. It describes how I work
					with both individual and corporate clients to achieve the best
					possible result.
				</p>
				<div data-aos="fade-up" className="flex justify-center gap-2">
					<Button
						onClick={() => setIsIndividual(true)}
						className={cn(
							"rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-slate-500",
							{
								"bg-slate-500": isIndividual,
							}
						)}
					>
						Individual
					</Button>
					<Button
						onClick={() => setIsIndividual(false)}
						className={cn(
							"rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-slate-500",
							{
								"bg-slate-500": !isIndividual,
							}
						)}
					>
						Corporate
					</Button>
				</div>
				<div
					
					className="flex flex-row flex-wrap justify-center   gap-12 pt-10"
				>
					{isIndividual ? (
						<>
							{individual.map((item, index) => (
								<MeteorPreview
									key={index}
									title={item.title}
									description={item.description}
								/>
							))}
						</>
					) : (
						<>
							{corporate.map((item, index) => (
								<MeteorPreview
									key={index}
									title={item.title}
									description={item.description}
								/>
							))}
						</>
					)}
				</div>
			</div>
		</section>
	);
}

export default SectionsFiveSix;

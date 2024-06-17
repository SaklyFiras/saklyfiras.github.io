import React from "react";

import webApp from "@/assets/leader.png";
import Image from "next/image";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

import { leadYourTeamServices } from "@/data/services";

function LeadYourTeam() {
	return (
		<div  id="LeadYourTeam" className="flex flex-row flex-wrap justify-center w-full ">
			<div data-aos="fade-right" className=" border rounded-lg bg-gray-100 p-4 space-y-8 indent-2 flex flex-col flex-grow sm:w-2/3">
				<p className=" text-3xl font-extrabold">
					<span className="text-blue-500">Lead</span> Your Team
				</p>
				<div className=" space-y-2">
					<h4 className=" text-2xl">Technical Guidance</h4>
					<li className=" list-disc">
						I provide technical guidance to the team, drawing on my expertise to
						help my colleagues navigate challenges, implement best practices,
						and maintain code quality.
					</li>
				</div>
				<div className="space-y-2  ">
					<h4 className=" text-2xl">Task Allocation and Planning</h4>
					<li className=" list-disc">
						I break down the project requirements into smaller tasks and
						allocate them to team members based on their skills and
						availability. I also help estimate the effort required for each task
						and plan the project timeline accordingly.
					</li>
				</div>
				<div className=" space-y-2 ">
					<h4 className=" text-2xl">Team Coordination and Communication</h4>
					<li className=" list-disc">
						I ensure that everyone on the team is well-informed about project
						goals, priorities, and any changes in requirements.
					</li>
				</div>
				<div className=" space-y-2 ">
					<h4 className=" text-2xl">Problem Solving and Conflict Resolution</h4>
					<li className=" list-disc">
						When issues arise, whether they&apos;re technical challenges or
						interpersonal conflicts, I step in to identify and resolve them
						promptly. I aim to keep the team focused and productive by
						addressing problems as they arise.
					</li>
				</div>
				<div className=" space-y-2 ">
					<h4 className=" text-2xl">Mentorship and Coaching</h4>
					<li className=" list-disc">
						I mentor junior developers, sharing my knowledge and experience to
						help them grow professionally. I encourage a culture of continuous
						learning within the team, providing guidance and support as needed.
					</li>
				</div>
				<div className=" space-y-2 ">
					<h4 className=" text-2xl">Performance Evaluation and Feedback </h4>
					<li className=" list-disc">
						I evaluate the performance of team members and provide constructive
						feedback to help them excel in their roles. I identify areas for
						improvement and support the professional development of each team
						member.
					</li>
				</div>
				<div className=" space-y-2 ">
					<h4 className=" text-2xl">Code Reviews and Quality Assurance</h4>
					<li className=" list-disc">
						I conduct code reviews to ensure that our code meets quality
						standards and adheres to best practices. I provide feedback to team
						members to help them improve their coding skills and maintain code
						quality.
					</li>
				</div>
				<div className=" space-y-2 ">
					<h4 className=" text-2xl">Risk Management</h4>
					<li className=" list-disc">
						I proactively identify potential risks to the project and take
						measures to mitigate them. I anticipate challenges and work to
						minimize their impact on project delivery, ensuring that we stay on
						track to meet our goals.
					</li>
				</div>

				<div className=" flex flex-row justify-evenly">
					<Accordion type="single" collapsible>
						<AccordionItem value="item-1">
							<AccordionTrigger className="text-blue-500 font-bold">
								Languages
							</AccordionTrigger>
							<AccordionContent>
								<ul>
									{leadYourTeamServices.languages.map((language) => (
										<li key={language}>{language}</li>
									))}
								</ul>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
					<Accordion type="single" collapsible>
						<AccordionItem value="item-1">
							<AccordionTrigger className="text-blue-500 font-bold">
								Frameworks
							</AccordionTrigger>
							<AccordionContent>
								<ul className="list-disc list-inside">
									{leadYourTeamServices.Frameworks.map((framework) => (
										<li key={framework}>{framework}</li>
									))}
								</ul>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
					<Accordion type="single" collapsible>
						<AccordionItem value="item-3">
							<AccordionTrigger className="text-blue-500 font-bold">
								Other
							</AccordionTrigger>
							<AccordionContent>
								<ul className="list-disc list-inside">
									{leadYourTeamServices.Others.map((other) => (
										<li key={other}>{other}</li>
									))}
								</ul>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
			<Image data-aos="fade-left" className="sm:w-1/3 max-h-64 my-auto" src={webApp} alt="Web apps" />
		</div>
	);
}

export default LeadYourTeam;

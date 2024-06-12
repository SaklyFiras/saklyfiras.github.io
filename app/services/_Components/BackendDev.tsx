import React from "react";

import webApp from "@/assets/backendDev.png";
import Image from "next/image";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

function BackendDev() {
	return (
		<div id="BackendDev" className="flex flex-row-reverse flex-wrap justify-center w-full ">
			
			<div data-aos="fade-left" className=" border rounded-lg bg-gray-100 p-4 space-y-8 indent-2 flex flex-col flex-grow sm:w-2/3">
				<p className=" text-3xl font-extrabold">
					<span className="text-blue-500">Backend</span> development
				</p>
				<div className=" space-y-2">
					<h4 className=" text-2xl">Server-side logic development</h4>
					<li className=" list-disc">
						Design, develop, and implement the logic that runs on the server,
						handling tasks such as authentication, authorization, data
						processing, and business logic.
					</li>
				</div>
				<div className="space-y-2  ">
					<h4 className=" text-2xl">API development</h4>
					<li className=" list-disc">
						Build a RESTful / GraphQL API for your single page app, ismorphic
						web app, android & ios app, ...
					</li>
				</div>
				<div className=" space-y-2 ">
					<h4 className=" text-2xl">Database management</h4>
					<li className=" list-disc">
						Work with databases to store and retrieve data efficiently. This
						includes database design, schema creation, optimization, writing
						queries, and ensuring data integrity and security.
					</li>
				</div>
				<div className=" space-y-2 ">
					<h4 className=" text-2xl">Integration with external services</h4>
					<li className=" list-disc">
						Integrate third-party services for features like payment processing,
						email delivery, push notification, ...
					</li>
				</div>
				<div className=" space-y-2 ">
					<h4 className=" text-2xl">Performance optimization</h4>
					<li className=" list-disc">
						Optimize the performance of the server-side code and databases to
						ensure fast response times and efficient resource utilization.
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
									<li>React</li>
									<li>Next.js</li>
									<li>Node.js</li>
									<li>Express.js</li>
									<li>GraphQL</li>
									<li>PostgreSQL</li>
									<li>MySQL</li>
									<li>MongoDB</li>
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
									<li>React</li>
									<li>Next.js</li>
									<li>Node.js</li>
									<li>Express.js</li>
									<li>GraphQL</li>
									<li>PostgreSQL</li>
									<li>MySQL</li>
									<li>MongoDB</li>
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
									<li>React</li>
									<li>Next.js</li>
									<li>Node.js</li>
									<li>Express.js</li>
									<li>GraphQL</li>
									<li>PostgreSQL</li>
									<li>MySQL</li>
									<li>MongoDB</li>
								</ul>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
				<Image data-aos="fade-right" className="sm:w-1/3 max-h-64 my-auto" src={webApp} alt="Web apps" />
			
		</div>
	);
}

export default BackendDev;

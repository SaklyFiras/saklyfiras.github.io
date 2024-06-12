import React from "react";

import webApp from "@/assets/mobileApp.png";
import Image from "next/image";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

function MobileApps() {
	return (
		<div  id="MobileApps" className="flex flex-wrap justify-center w-full flex-row-reverse ">
		
			<div data-aos="fade-left" className=" border rounded-lg bg-gray-100 p-4 space-y-8 indent-2 flex flex-col flex-grow sm:w-2/3">
				<p className=" text-3xl font-extrabold">
					<span className="text-blue-500">Mobile</span> apps
				</p>
				<div className=" space-y-2">
					<h4 className=" text-2xl">Cross platform apps</h4>
					<li className=" list-disc">
						Write code using JavaScript and React Native framework to develop
						mobile applications that run seamlessly on both iOS and Android
						platforms.
					</li>
				</div>
				<div className="space-y-2  ">
					<h4 className=" text-2xl">UI/UX Design Implementation</h4>
					<li className=" list-disc">
						Implementing UI/UX designs provided by designers using React Native
						components, ensuring consistency, responsiveness, and performance
						across different devices and screen sizes.
					</li>
				</div>
				<div className=" space-y-2 ">
					<h4 className=" text-2xl">Deployment to App Stores</h4>
					<li className=" list-disc">
						Preparing applications for deployment to app stores such as the
						Apple App Store or Google Play Store, adhering to their submission
						guidelines, and managing the release process.
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

export default MobileApps;

import React from "react";

import webApp from "@/assets/webApp.png";
import Image from "next/image";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

import { webAppsServices } from "@/data/services";

function WebApps() {
	return (
		<div  id="WebApps" className="flex flex-row flex-wrap justify-center w-full ">
			<div data-aos="fade-right" className=" border rounded-lg bg-gray-100 p-4 space-y-8 indent-2 flex flex-col flex-grow">
				<p className=" text-3xl font-extrabold">
					<span className="text-blue-500">Web</span> apps
				</p>
				<p className=" text-sm ">
					Build a custom and hand-coded website according to the clients’ needs,
					and their specific business requirements.
				</p>
				<div className=" flex flex-row justify-evenly">
					<Accordion type="single" collapsible>
						<AccordionItem value="item-1">
							<AccordionTrigger className="text-blue-500 font-bold">
								Languages
							</AccordionTrigger>
							<AccordionContent>
								<ul>
									{webAppsServices.languages.map((language) => (
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
									{webAppsServices.Frameworks.map((framework) => (
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
									{webAppsServices.Others.map((other) => (
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

export default WebApps;

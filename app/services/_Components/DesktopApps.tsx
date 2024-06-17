import React from "react";

import webApp from "@/assets/desktopApp.png";
import Image from "next/image";

import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@/components/ui/accordion";

import {desktopAppsServices} from "@/data/services";

function DesktopApps() {
	return (
		<div  id="DesktopApps" className="flex flex-row flex-wrap justify-center w-full ">
			<div data-aos="fade-right" className=" border rounded-lg bg-gray-100 p-4 space-y-8 indent-2 flex flex-col flex-grow sm:w-2/3">
				<p className=" text-3xl font-extrabold">
					<span className="text-blue-500">Desktop</span> apps
				</p>
				<p className=" text-sm ">
					Build your desktop application using web technologies for all
					platforms ( Windows 7 -&gt; 11, Mac os and Linux ).
				</p>
				<div className=" flex flex-row justify-evenly">
					<Accordion type="single" collapsible>
						<AccordionItem value="item-1">
							<AccordionTrigger className="text-blue-500 font-bold">
								Languages
							</AccordionTrigger>
							<AccordionContent>
								<ul>
									{desktopAppsServices.languages.map((language) => (
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
									{desktopAppsServices.Frameworks.map((framework) => (
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
									{desktopAppsServices.Others.map((other) => (
										<li key={other}>{other}</li>
									))}
								</ul>
							</AccordionContent>
						</AccordionItem>
					</Accordion>
				</div>
			</div>
			<Image data-aos="fade-left"	 className="sm:w-1/3 max-h-64 my-auto" src={webApp} alt="Web apps" />
		</div>
	);
}

export default DesktopApps;

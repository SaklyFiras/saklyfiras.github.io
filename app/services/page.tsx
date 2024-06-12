import React from "react";

import { HoverEffect } from "@/components/ui/HoverEffect";

import WebApps from "./_Components/WebApps";
import MobileApps from "./_Components/MobileApps";
import DesktopApps from "./_Components/DesktopApps";
import BackendDev from "./_Components/BackendDev";
import LeadYourTeam from "./_Components/LeadYourTeam";

const projects = [
	{
		title: "Web Application",
		description:
			"websites that are tailored to your needs and are user-friendly.",
		link: "/services/#WebApps",
	},

	{
		title: "Mobile Application",
		description: "Mobile applications that are user-friendly and easy to use.",
		link: "/services/#MobileApps",
	},
	{
		title: "Desktop Application",
		description: "Desktop applications that are user-friendly and easy to use.",
		link: "/services/#DesktopApps",
	},
	{
		title: "Backend Development",
		description: "Backend development that is tailored to your needs.",
		link: "/services/#BackendDev",
	},

	{
		title: "Lead your team",
		description: "Lead your team to success with my guidance.",
		link: "/services/#LeadYourTeam",
	},
];

import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Firas.dev | Services",
	description: "this is the services page of firas.dev where you can see all the services I offer.",
};

function page() {
	

	return (
		<div className="mt-36 container overflow-hidden">
			<div className="  text-center space-y-4 flex justify-center flex-col ">
				<h2 data-aos="zoom-in" className=" text-5xl font-extrabold ">
					What can I <span className=" text-blue-500">Offer</span> you ?
				</h2>
				<p data-aos="zoom-in" className="">
					I offer a variety of services with hands-on experience in the best
					technologies to meet my client{"'"}s needs.
				</p>
				<div
					data-aos="fade-up"
					className="flex flex-row flex-wrap justify-center pb-12 gap-12 pt-10"
				>
					<HoverEffect projects={projects} />
				</div>
			</div>
			<div className=" flex flex-wrap justify-evenly flex-col items-center w-full space-y-24">
				<WebApps />
				<MobileApps />
				<DesktopApps />
				<BackendDev />
				<LeadYourTeam />
			</div>
		</div>
	);
}

export default page;

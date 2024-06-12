"use client";
import Image from "next/image";

import { Button } from "../ui/button";

import { HoverEffect } from "../ui/HoverEffect";
import { cn } from "@/lib/utils";
import Link from "next/link";

export const projects = [
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

function SectionsThree() {
	return (
		<section className=" flex justify-evenly">
			<div className="  text-center space-y-4 flex justify-center flex-col ">
				<h2 data-aos="zoom-in" className=" text-5xl font-extrabold ">
					What can I <span className=" text-blue-500">Offer</span> you ?
				</h2>
				<p data-aos="zoom-in" className="">
					I offer a variety of services with hands-on experience in the best
					technologies to meet my client{"'"}s needs.
				</p>
				<div
					
					className="flex flex-row flex-wrap justify-center pb-12 gap-12 pt-10"
				>
					<HoverEffect projects={projects} />
				</div>
				<div className="flex justify-center">
					<Link
						data-aos="fade-up"
						href="/services"
						className="text-white bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-xl px-8 py-6 text-center inline-flex items-center "
					>
						See Details
						<ChevronRightIcon />
					</Link>
				</div>
			</div>
		</section>
	);
}

function ChevronRightIcon(props: any) {
	return (
		<svg
			className={cn("rtl:rotate-180 w-3.5 h-3.5 ms-2", props.className)}
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="none"
			viewBox="0 0 14 10"
			stroke="currentColor"
			strokeLinecap="round"
			strokeLinejoin="round"
			strokeWidth="2"
		>
			<path d="M1 5h12m0 0L9 1m4 4L9 9" />
		</svg>
	);
}

export default SectionsThree;

"use client";
import Image from "next/image";

import ShowCaseCard from "@/components/ui/ShowCaseCard";


import { cn } from "@/lib/utils";
import Link from "next/link";

import projects from "@/data/projects.json"; 


function SectionsFive() {
	const year = new Date().getFullYear();

	return (
		<div>
			<section className=" flex  justify-center">
				<div className="  text-center space-y-4 flex justify-center flex-col ">
					<h2 data-aos="zoom-in" className=" text-5xl font-extrabold ">
						My Recent <span className=" text-blue-500">Projects</span>
					</h2>
					<p data-aos="zoom-in" className="">
						Meet a lot of beautiful personnel and professionel projects
					</p>
					<div className="flex flex-row flex-wrap justify-center  gap-12 pt-10 pb-16">
						{projects.map((project, index) => (
							<ShowCaseCard
								key={index}
								project={project}
								dataAos="fade-up"
							/>
						))}
					</div>
					<div className="flex justify-center">
						<Link
							data-aos="fade-up"
							href="/portfolio"
							className="text-white bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-xl px-8 py-6 text-center inline-flex items-center "
						>
							See more projects
							<ChevronRightIcon />
						</Link>
					</div>
				</div>
			</section>
		</div>
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

export default SectionsFive;


import ShowCaseCard from "@/components/ui/ShowCaseCard";

import { Button } from "@/components/ui/button";
import { useState } from "react";

import projects from "@/data/projects.json";
import { cn } from "@/lib/utils";

import TypeProject from "./TypeProject";

import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Firas.dev | Portfolio",
	description: "this is the portfolio page of firas.dev where you can see all the projects I have worked on.",
};

function Page() {
	return (
		<div className="mt-36 container">
			<section className=" flex justify-evenly">
				<div className="  text-center space-y-4 flex justify-center flex-col ">
					<h2 data-aos="zoom-in" className=" text-5xl font-extrabold ">
						My Recent <span className=" text-blue-500">Projects</span>
					</h2>
					<p data-aos="zoom-in" className="">
						Meet a lot of beautiful personnel and professionel projects
					</p>

					<div data-aos="fade-up" className="flex justify-center gap-2">
						<TypeProject />
					</div>
				</div>
			</section>

			<div className="flex  flex-row flex-wrap justify-around gap-4   items-center place-items-center mt-12">
				{projects &&
					projects.map((project, index) => (
						<ShowCaseCard key={index} project={project} dataAos="fade-up" />
					))}
			</div>
		</div>
	);
}

export default Page;

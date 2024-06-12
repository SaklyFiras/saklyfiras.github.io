import Image from "next/image";

import { HoverEffect } from "../ui/HoverEffect";
import { title } from "process";

const projects = [
	{
		title: "Innovative",
	},
	{
		title: "Creative",
	},
	{
		title: "Problem Solver",
	},
	{
		title: "Team Player",
	},
	{
		title: "Good Communicator",
	},
];

function SectionsFour() {
	const year = new Date().getFullYear();
	return (
		<section className=" flex justify-evenly">
			<div className="  text-center space-y-4 flex justify-center flex-col ">
				<h2 data-aos="zoom-in" className=" text-5xl font-extrabold ">
					My valuable <span className=" text-blue-500">Skills</span>
				</h2>
				<p data-aos="zoom-in" className="">
					Skills that can enhace your entreprise productivity and facilitates
					Work among teams
				</p>
				<div  className="flex flex-row flex-wrap justify-center  gap-12 pt-10">
					<HoverEffect projects={projects} />
				</div>
			</div>
		</section>
	);
}

export default SectionsFour;


import React from "react";

import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Firas.dev | Resume",
	description: "this is the resume page of firas.dev where you can see all the details of the resume.",
};

function page() {
	return (
		<div>
			<div className="h-2/3 flex flex-row flex-wrap w-full justify-evenly  mt-36">
				<div className="  text-center space-y-4 flex justify-center items-center flex-col ">
					<h2 data-aos="zoom-in" className=" text-7xl font-extrabold ">
						Welcome to my <span className=" text-blue-500">resume</span>
					</h2>
					<p data-aos="zoom-in" className="">
						Explore my professional journey, skills, and achievements through my
						detailed resume.
					</p>

					<iframe
						src="./CV_Firas_Sakli.pdf"
						className="mt-8 w-[60rem] h-[40rem]"
					></iframe>
				</div>
			</div>
		</div>
	);
}

export default page;

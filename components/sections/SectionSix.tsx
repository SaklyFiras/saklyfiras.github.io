
import Image from "next/image";

import colab from "@/assets/collab.png";
import { Button } from "../ui/button";

import { cn } from "@/lib/utils";
import Link from "next/link";



function SectionsSix() {
	

	return (
		<section className="">
			<div className="h-1/2 flex flex-row flex-wrap  justify-evenly">
				<div className="  text-center space-y-4 flex justify-center items-center flex-col ">
					<h2 data-aos="zoom-in" className=" text-5xl font-extrabold ">
						Intrested in <span className=" text-blue-500">Working</span>{" "}
						together ?
					</h2>
					<p data-aos="zoom-in" className="">
						Feel free to contact me any time.
					</p>
					<Link
						data-aos="fade-up"
						href="#footer"
						
						className="text-white bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:outline-none focus:ring-slate-300 font-medium rounded-lg text-xl px-8 py-6 text-center inline-flex items-center "
					>
						Contact me
						<ChevronRightIcon />
					</Link>
				</div>
				<Image
					data-aos="fade-left"
					className="flex aspect-square"
					src={colab}
					alt="collab"
				></Image>
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

export default SectionsSix;

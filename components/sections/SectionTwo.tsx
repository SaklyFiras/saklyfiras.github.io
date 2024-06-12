import Image from "next/image";

import { BackgroundBeams } from "@/components/ui/background-beams";
import developer from "@/assets/developer.png";

function SectionsTwo() {
	const year = new Date().getFullYear();
	return (
		
			<section className="flex flex-wrap  justify-evenly">
				<Image
					src={developer}
					
					className=" self-center flex w-64 aspect-square  "
					alt="ll"
					data-aos="fade-right"
				/>
				<div className="  text-center space-y-4 flex flex-shrink justify-center flex-col flex-wrap ">
					<h1
						data-aos="fade-left"
						className=" text-left text-7xl font-extrabold "
					>
						About <span className="text-blue-500">me</span>
					</h1>
					<div
						data-aos="fade-left"
						className="  text-left space-y-4  "
					>
						<p className="">
							I am highly motivated {year - 2001} full stack developer with
							a passion for building web
						</p>

						<p className="">
							I am a full stack developer with a passion for building web
							applications.
						</p>
						<p className="">
							{" "}
							I have experience working with React, Next.js, Tailwind CSS, and
							more.
						</p>
						<p className="">
							{" "}
							I am a full stack developer with a passion for building web
							applications.
						</p>
					</div>
				</div>
			</section>
		
	);
}

export default SectionsTwo;

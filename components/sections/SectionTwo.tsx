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
							I am highly motivated {year - 2001} developer with
							a passion for software development.
						</p>

						<p className="">
							I enjoy building applications and learning new technologies everyday.
						</p>
						<p className="">
							{" "}
							I have more than 4 years of experience in building applications
						</p>
						<p className="">
							{" "}
							i have worked on a variety of projects,<br/> ranging from web apps to
							desktop apps and mobile apps.
						</p>
					</div>
				</div>
			</section>
		
	);
}

export default SectionsTwo;

import Image from "next/image";

import { BackgroundBeams } from "@/components/ui/background-beams";
import me from "@/assets/me.jpg";

import "animate.css";
import mouse from "@/assets/mouse.svg";

import handWave from "@/assets/wave_hand.png";

function SectionsOne() {
	return (
		<div>
			<div className="absolute inset-0  flex items-center justify-center">
				<BackgroundBeams />
			</div>
			<div className="h-2/3 flex flex-row flex-wrap w-full justify-evenly  mt-36">
				<div
					data-aos="fade-up"
					className=" flex flex-col  sm:text-left text-center justify-center gap-2"
				>
					<div className="flex  sm:gap-4 justify-center sm:justify-start">
						<p className="text-6xl  text-gray-700 font-extrabold">Hello</p>
						<Image className="animate__animated animate__wobble animate__delay-1s  animate__repeat-2  " src={handWave} width={70} height={70} alt="ll" />
					</div>
					<p className="text-6xl  text-gray-700 font-bold ">I am Firas</p>
					<p className=" text-2xl  text-center   text-gray-500 font-serif">
						I build Web, Desktop and Mobile applications.
					</p>
				<Image src={mouse} width={25} height={25} className="animate__animated animate__bounce animate__infinite animate__slower my-8 mx-auto lg:mx-0" alt="mouse" />
				</div>
				<Image
					src={me}
					width={350}
					height={350}
					className=" self-center border-4 shadow-xl border-gray-200 rounded-lg  z-50"
					alt="ll"
					data-aos="zoom-in"
				/>
			</div>
		</div>
	);
}

export default SectionsOne;

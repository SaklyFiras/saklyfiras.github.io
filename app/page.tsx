import Image from "next/image";

import SectionsOne from "@/components/sections/SectionsOne";
import SectionsTwo from "@/components/sections/SectionTwo";
import SectionsThree from "@/components/sections/SectionThree";
import SectionsFour from "@/components/sections/SectionFour";
import SectionsFive from "@/components/sections/SectionFive";
import SectionsSix from "@/components/sections/SectionSix";
import SectionsFiveSix from "@/components/sections/SectionFiveSix";

import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Firas.dev | Home",
	description: "this is the home page of firas.dev",
};

export default function Home() {
	return (
		<div className="container overflow-hidden ">
			<div className="sm:space-y-64 space-y-20">
				<SectionsOne />
				<SectionsTwo />
				<SectionsThree />
				<SectionsFour />
				<SectionsFive />
				<SectionsFiveSix />
				<SectionsSix />
			</div>
		</div>
	);
}

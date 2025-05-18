import { Button } from "@/components/ui/button";
import Link from "next/link";

import { PulseBeams } from "./ui/PulseBeam";

export default function Footer() {
	return (
		<footer id="footer" className="bg-slate-950  text-white  p-4 mt-4">
			<div className=" grid grid-cols-1 md:grid-cols-2  items-center">
				<div className="space-y-4 flex  flex-col text-center sm:text-start lg:items-start items-center ">
					<h3 className="text-2xl font-extrabold">
						Firas<span className="text-blue-500">.dev</span>
					</h3>
					<h3 className="text-2xl font-bold">Get in Touch</h3>
					<Link href="mailto:firassk.dev@gmail.com" className="group flex w-fit items-center space-x-2 hover:cursor-pointer">
						<MailOpenIcon className="w-5 h-5 text-gray-400 group-hover:stroke-slate-400 group-hover:fill-white" />
						<span className="text-gray-400 group-hover:text-white">firassk.dev@gmail.com</span>
					</Link>
					<Link href="tel:+21658944977" className=" group flex w-fit items-center space-x-2  hover:cursor-pointer ">
						<PhoneIcon className="w-5 h-5 text-gray-400  group-hover:stroke-slate-400 group-hover:fill-white  " />
						<span className="text-gray-400 group-hover:text-white">+48 015510416817 </span>
					</Link>
				</div>
				<div className="  ">
					<PulseBeams />
				</div>
			</div>
		</footer>
	);
}

function MailOpenIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z" />
			<path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10" />
		</svg>
	);
}

function PhoneIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="24"
			height="24"
			viewBox="0 0 24 24"
			fill="none"
			stroke="currentColor"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
		</svg>
	);
}



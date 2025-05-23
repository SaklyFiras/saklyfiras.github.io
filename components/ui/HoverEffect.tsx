"use client";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

import { useRouter } from "next/navigation";

export const HoverEffect = (props: any) => {
	let [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

	//navigate to url and smooth scroll to fragment

	const router = useRouter();

	return (
		<div className="max-w-5xl mx-auto px-8">
			<div className="grid grid-cols-1 md:grid-cols-2  lg:grid-cols-3  ">
				{props.projects.map((project: any, idx: any) => (
					<button
						data-aos="fade-up"
						key={idx}
						className="relative group  block p-2 h-full w-full  hover:cursor-pointer "
						onMouseEnter={() => setHoveredIndex(idx)}
						onMouseLeave={() => setHoveredIndex(null)}
						onClick={() => router.push(project.link)}
					>
						<AnimatePresence>
							{hoveredIndex === idx && (
								<motion.span
									className="absolute inset-0 h-full w-full bg-slate-800/[0.8] block  rounded-3xl"
									layoutId="hoverBackground" // required for the background to follow
									initial={{ opacity: 0 }}
									animate={{
										opacity: 1,
										transition: { duration: 0.15 },
									}}
									exit={{
										opacity: 0,
										transition: { duration: 0.15, delay: 0.2 },
									}}
								/>
							)}
						</AnimatePresence>
						<div className=" rounded-2xl h-full w-full p-4 overflow-hidden bg-gradient-to-br  bg-gray-800 border border-transparent group-hover:border-slate-700 relative z-50">
							<div className="relative z-50">
								<div className="p-4">
									<h4 className="text-zinc-100 font-bold tracking-wide mt-4">
										{project.title}
									</h4>
									<p className="mt-8 text-zinc-400 tracking-wide leading-relaxed text-sm">
										{project.description}
									</p>
								</div>
							</div>
						</div>
					</button>
				))}
			</div>
		</div>
	);
};

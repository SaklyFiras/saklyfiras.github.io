import React from "react";
import { Button } from "./button";
import Link from "next/link";
import { cn } from "@/utils/cn";

function ButtonWithArrow(props: any) {
	return (
		<Link data-aos={props.dataAos} href="#">
			<Button
				onClick={props.onClick}
				variant="link"
				className={cn(
                    "flex items-center gap-2 mt-4 shadow-lg ",
                    props.className
                )}
			>
				{props.title}
				<ChevronRightIcon className="w-4 h-4" />
			</Button>
		</Link>
	);
}

export default ButtonWithArrow;

function ChevronRightIcon(props: any) {
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
			<path d="m9 18 6-6-6-6" />
		</svg>
	);
}

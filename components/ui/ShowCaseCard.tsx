import Link from "next/link";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import image_blanc from "@/assets/image_blanck.webp";
import { cn } from "@/lib/utils";

export default function ShowCaseCard(props: any) {
	
	const {project } = props;	
	
	return (
		<div
			data-aos={props.dataAos}
			className={cn(
				"relative bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden w-80",
				props.className
			)}
		>
			<Link
				href={project?.link || "/"}
				className="absolute inset-0 z-10"
				
			>
				<span className="sr-only">View</span>
			</Link>
			<Image
				src={project?.images[0] || image_blanc}
				alt="Product 1"
				width={500}
				height={400}
				className="object-fill w-full h-64 -1"
			/>
			<div className="bg-white p-4 dark:bg-gray-950">
				<h3 className="font-bold text-xl">{project?.title}</h3>
				<Button
					variant="link"
					className="flex items-center gap-2 mt-4 shadow-lg bg-gray-300"
				>
					View Details
					<ChevronRightIcon className="w-4 h-4" />
				</Button>
			</div>
		</div>
	);
}

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

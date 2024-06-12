

import projects from "@/data/projects.json";

import MyGallery from "@/components/ImageGallery";
import { cn } from "@/lib/utils";
import Link from "next/link";

import type { Metadata } from "next";
export const metadata: Metadata = {
	title: "Firas.dev | Project Details",
	description: "this is the details page of firas.dev where you can see all the details of the project.",
};
generateStaticParams()
function Page(props: any) {
	const title = props.params.title as string;
	
	const project = findProject(title);

	

	return (
		<div className="container">
			{project ? (
				<div className="mt-36">
					<MyGallery images={project.images} />

					<div className=" flex flex-row justify-between  flex-wrap  gap-4    p-4">
						<div className="flex flex-col  items-start sm:w-[60%] ">
							<h1 className=" text-6xl font-extrabold ">{project.title}</h1>
							<p className=" text-gray-500 font-medium pt-8">
								{project.description}
							</p>
							<div className="mt-8 flex gap-4">
								<Link
									target="_blank"
									href={project?.githubRepo || ""}
									type="button"
									className={cn(
										"   text-white bg-[#24292F] hover:bg-[#24292F]/90 focus:ring-4 focus:outline-none focus:ring-[#24292F]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-500 dark:hover:bg-[#050708]/30 me-2 mb-2",
										!project.githubRepo &&
											" pointer-events-none opacity-50 cursor-not-allowed"
									)}
								>
									<GithubIcon />
									Github Repo
								</Link>

								<Link
									target="_blank"
									href={project?.livePreview || ""}
									type="button"
									className={cn(
										"text-gray-900  bg-gray-200 hover:bg-gray-100 border border-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-100 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-gray-600 dark:bg-gray-800 dark:border-gray-700 dark:text-white dark:hover:bg-gray-700 me-2 mb-2",
										!project.livePreview &&
											" pointer-events-none opacity-50 cursor-not-allowed"
									)}
								>
									<Arrow className="w-4 h-4 me-2" />
									Live preview
								</Link>
							</div>
						</div>
						<div className="flex flex-col border rounded-lg p-6   items-start    space-y-8  sm:w-[35%] ">
							<div className="space-y-2">
								<h2 className="text-2xl font-bold ">Duration</h2>
								<p className="p-2 rounded-lg bg-gray-100 flex items-center flex-col">
									<CalnderIcon className="h-12 aspect-square w-8 " />
									{project.duration}
								</p>
							</div>
							<div className=" space-y-2">
								<h2 className="text-2xl font-bold">Type</h2>
								<p className="p-2 rounded-lg bg-gray-100">{project.type}</p>
							</div>
							<div className="">
								<h2 className="text-2xl font-bold">Tools</h2>
								<div className="flex flex-wrap   ">
									{project.tools.map((tool :any) => (
										<div
											className="p-2 rounded-lg bg-gray-100 m-1 w-fit  "
											key={tool}
										>
											{tool}
										</div>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>
			) : (
				<p>Project not found</p>
			)}
		</div>
	);
}

export default Page;

const findProject = (title: string): any => {
	return projects.find((project) => project.title === title);
};
export async function generateStaticParams() {
	return projects.map((project) => ({
	  title: project.title,
	}));
  }

function CalnderIcon(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			fill="#000000"
			width="800px"
			height="800px"
			viewBox="0 0 1024 1024"
		>
			<path d="M266.815 537.708c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.775 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zM266.815 679.347c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.775 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zM266.815 820.988c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.775 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zm182.77 0c0 22.62-18.34 40.96-40.96 40.96s-40.96-18.34-40.96-40.96 18.34-40.96 40.96-40.96 40.96 18.34 40.96 40.96zM228.18 81.918v153.6c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48v-153.6c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48zm528.09 0v153.6c0 11.311 9.169 20.48 20.48 20.48s20.48-9.169 20.48-20.48v-153.6c0-11.311-9.169-20.48-20.48-20.48s-20.48 9.169-20.48 20.48z" />
			<path d="M890.877 137.517c33.931 0 61.44 27.509 61.44 61.44v703.375c0 33.931-27.509 61.44-61.44 61.44h-757.76c-33.931 0-61.44-27.509-61.44-61.44V198.957c0-33.931 27.509-61.44 61.44-61.44h757.76zm-757.76 40.96c-11.309 0-20.48 9.171-20.48 20.48v703.375c0 11.309 9.171 20.48 20.48 20.48h757.76c11.309 0 20.48-9.171 20.48-20.48V198.957c0-11.309-9.171-20.48-20.48-20.48h-757.76z" />
			<path d="M575.03 338.288c0-33.93-27.51-61.44-61.44-61.44s-61.44 27.51-61.44 61.44c0 33.93 27.51 61.44 61.44 61.44s61.44-27.51 61.44-61.44zm40.96 0c0 56.551-45.849 102.4-102.4 102.4s-102.4-45.849-102.4-102.4c0-56.551 45.849-102.4 102.4-102.4s102.4 45.849 102.4 102.4z" />
		</svg>
	);
}

function GithubIcon(props: any) {
	return (
		<svg
			className={cn("w-4 h-4 me-2", props.className)}
			aria-hidden="true"
			xmlns="http://www.w3.org/2000/svg"
			fill="currentColor"
			viewBox="0 0 20 20"
		>
			<path
				fillRule="evenodd"
				d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z"
				clipRule="evenodd"
			/>
		</svg>
	);
}

function Arrow(props: any) {
	return (
		<svg
			{...props}
			xmlns="http://www.w3.org/2000/svg"
			width="800px"
			height="800px"
			viewBox="0 0 24 24"
			fill="none"
			stroke="#000000"
			strokeWidth="2"
			strokeLinecap="round"
			strokeLinejoin="round"
		>
			<path d="M7 17L17 7M17 7H8M17 7V16" />
		</svg>
	);
}

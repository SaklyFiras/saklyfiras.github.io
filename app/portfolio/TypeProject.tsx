"use client";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export interface IAppProps {}

export default function TypeProject(props: IAppProps) {
	const [type, setType] = useState("all");
	return (
		<>
			<Button
				onClick={() => setType("all")}
				className={cn(
					"rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-slate-500",
					{
						"bg-slate-500": type === "all",
					}
				)}
			>
				All
			</Button>
			<Button
				onClick={() => setType("individual")}
				className={cn(
					"rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-slate-500",
					{
						"bg-slate-500": type === "individual",
					}
				)}
			>
				Individual
			</Button>
			<Button
				onClick={() => setType("corporate")}
				className={cn(
					"rounded-full focus:outline-none focus:ring-4 focus:ring-blue-500 focus:ring-opacity-50 hover:bg-slate-500",
					{
						"bg-slate-500": type === "corporate",
					}
				)}
			>
				Corporate
			</Button>
		</>
	);
}

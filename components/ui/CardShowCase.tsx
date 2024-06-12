import React from "react";

function CardShowCase(props: any) {
	return (
		<div data-aos={props.dataAos}>
			<div
				
				className="relative rounded-xl h-28 w-64 shadow-lg bg-gray-800 tect-white items-center flex justify-center"
			>
				<h1 className="text-3xl text-gray-300 text-center font-serif px-2 ">
					<span className="text-blue-500">{props.coloredText}</span>{" "}
					{props.text}
				</h1>

				<div className="h-full w-full absolute z-[-10] top-0 rounded-xl rotate-6 left-3    bg-blue-500 "></div>
			</div>
		</div>
	);
}

export default CardShowCase;

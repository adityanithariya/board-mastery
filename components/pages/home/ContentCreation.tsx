import Image from "next/image";
import React from "react";
import { IoArrowDown } from "react-icons/io5";
import type { FC } from "react";

const ContentCreationStep: FC<{ step: number; title: string }> = ({
	step,
	title,
}) => {
	return (
		<div className="flex flex-col items-center justify-center">
			<div className="flex rounded-full border-[2px] border-secondary/20 bg-white p-5 mb-2">
				<Image
					src={`/content-creation/Step-${step}.png`}
					alt={`step-${step}`}
					width={80}
					height={80}
				/>
			</div>
			<div className="w-[180px] text-center">{title}</div>
		</div>
	);
};

const ContentCreation = () => {
	return (
		<div className="md:py-10 md:px-32 bg-gradient-to-b from-[#fbfafe] to-[#f9f8fd] pb-20 relative flex flex-col items-center justify-center *:z-10">
			<div className="hidden md:block border-[3px] border-secondary/30 absolute h-36 top-[4.5rem] w-[80vw] rounded-2xl" />
			<div className="md:px-7 bg-[#fbfafe]">
				<h2 className="bg-white text-secondary text-2xl px-7 py-4 mb-8 rounded-3xl border-[2px] w-fit border-slate-100">
					Content Creation Process
				</h2>
			</div>
			<div className="flex flex-col md:flex-row items-center md:items-start justify-center bg-gradient-to-b from-[#fbfafe] to-[#f9f8fd]">
				<ContentCreationStep step={1} title="Medical Reviewer (Physician)" />
				<IoArrowDown className="text-secondary/50 md:-rotate-90 size-8 mx-8 my-7 md:mb-0 md:mt-14" />
				<ContentCreationStep step={2} title="Editor" />
				<IoArrowDown className="text-secondary/50 md:-rotate-90 size-8 mx-8 my-7 md:mb-0 md:mt-14" />
				<ContentCreationStep step={3} title="Chief Editor (Physician)" />
				<IoArrowDown className="text-secondary/50 md:-rotate-90 size-8 mx-8 my-7 md:mb-0 md:mt-14" />
				<ContentCreationStep step={4} title="CME or PubMed" />
			</div>
		</div>
	);
};

export default ContentCreation;

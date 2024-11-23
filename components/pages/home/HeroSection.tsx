import React from "react";
import hero from "@assets/hero.svg";
import Image from "next/image";
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdOutlineStarPurple500 } from "react-icons/md";
import PrimaryButton from "@components/ui/primary-btn";
import TypeWriter from "@components/ui/typewriter";

const HeroSection = () => {
	return (
		<section className="bg-primary pt-5 pb-10 md:py-20 flex justify-between px-5 md:px-20 flex-col-reverse md:flex-row">
			<div>
				<div className="text-4xl md:text-5xl font-semibold flex flex-col gap-2 md:gap-5 pt-5">
					<span className="text-gray">Complete Guide for</span>
					<span className="text-gradient">
						<TypeWriter />
					</span>
					{/* <span className="h-10 w-1 bg-[#B17EFA] absolute top-1/2 -translate-y-1/2 -right-1 animate-pulse" /> */}
				</div>
				<div className="flex flex-col text-gray-light pt-7 gap-5">
					<div className="flex gap-3 items-start md:items-center">
						<FaRegCircleCheck className="size-[1.6rem] text-secondary" />
						<span className="font-medium text-lg">
							Gain CE credits by answering practice questions
						</span>
					</div>
					<div className="flex gap-3 items-start md:items-center">
						<FaRegCircleCheck className="size-[2rem] md:size-[1.6rem] text-secondary" />
						<span className="font-medium text-lg">
							Build your skills and be prepared for your certification exam
						</span>
					</div>
				</div>
				<div className="pt-8 flex flex-col gap-4 w-full md:w-fit items-start md:items-center">
					<div className="flex gap-2">
						<div className="text-lg flex gap-0.5">
							{Array.from({ length: 5 }).map((_, index) => (
								<MdOutlineStarPurple500
									// biome-ignore lint/suspicious/noArrayIndexKey: ignore
									key={index}
									className="text-[#ff9500]"
								/>
							))}
						</div>
						<div className="text-sm flex gap-2">
							<span className="text-black font-semibold">4.8</span>
							<span className="text-gray-light">
								from
								<span className="font-semibold px-1">5,000+</span>
								reviews
							</span>
						</div>
					</div>
					<PrimaryButton className="w-full md:w-[19rem]">
						Purchase Now
					</PrimaryButton>
				</div>
			</div>
			<div className="border-[10px] border-white rounded-[2.5rem] md:rounded-[1.75rem] w-[90vw] md:w-[590px] md:h-[370px] flex items-center justify-center overflow-hidden">
				<Image
					src={hero}
					priority
					alt="hero"
					width={600}
					className="rounded-2xl w-[90vw]"
				/>
			</div>
		</section>
	);
};

export default HeroSection;

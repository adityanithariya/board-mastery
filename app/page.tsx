import React from "react";
import hero from "@assets/hero.svg";
import Image from "next/image";
import { FaRegCircleCheck } from "react-icons/fa6";
import { MdOutlineStarPurple500 } from "react-icons/md";
import Button from "@components/ui/button";

const Home = () => {
	return (
		<main>
			<div className="bg-[#fff6f6] h-[80vh] py-20 flex justify-between pl-28 pr-10">
				<div>
					<div className="text-5xl font-semibold flex flex-col gap-5 pt-5">
						<span className="text-gray">Complete Guide for</span>
						<span className="bg-gradient-to-br from-[#a071f9] via-[#7b56d7] to-[#573c9d] bg-clip-text text-transparent">
							ACHPN Exam Success
						</span>
					</div>
					<div className="flex flex-col text-gray-light pt-7 gap-5">
						<div className="flex gap-3 items-center">
							<FaRegCircleCheck className="size-[1.6rem] text-[#7b56d7]" />
							<span className="font-medium text-lg">
								Gain CE credits by answering practice questions
							</span>
						</div>
						<div className="flex gap-3 items-center">
							<FaRegCircleCheck className="size-[1.6rem] text-[#7b56d7]" />
							<span className="font-medium text-lg">
								Build your skills and be prepared for your certification exam
							</span>
						</div>
					</div>
					<div className="pt-8 flex flex-col gap-4 w-fit items-center">
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
						<Button className="w-[19rem]">Purchase Now</Button>
					</div>
				</div>
				<div className="border-[10px] border-white rounded-[1.75rem] w-[590px] h-[370px] flex items-center justify-center overflow-hidden">
					<Image src={hero} alt="hero" width={600} className="rounded-2xl" />
				</div>
			</div>
		</main>
	);
};

export default Home;

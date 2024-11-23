import React from "react";
import type { ReactNode } from "react";
import PrimaryButton from "@components/ui/primary-btn";
import { IoIosArrowForward } from "react-icons/io";
import { RiHome6Line } from "react-icons/ri";

const Badge = ({ children }: { children: ReactNode }) => {
	return (
		<div className="bg-gradient p-[1px] rounded-full whitespace-nowrap">
			<div className="bg-white text-gray rounded-full px-7 py-3 text-sm font-medium">
				{children}
			</div>
		</div>
	);
};

const HeroSection = () => {
	return (
		<div>
			<div className="flex gap-4 items-center text-sm mb-10">
				<RiHome6Line className="size-6 text-slate-400" />
				<IoIosArrowForward className="text-slate-300" />
				<span className="text-gray-light font-medium">All Exams</span>
				<IoIosArrowForward className="text-slate-300" />
				<span className="text-blue-600 font-semibold">ACHPN</span>
			</div>
			<h1 className="text-3xl md:text-4xl font-semibold text-gray">
				ACHPN - Advanced Certification in Hospice and Palliative Nurse
			</h1>
			<PrimaryButton className="w-full md:!px-20 my-7">Purchase Now</PrimaryButton>
			<div className="flex gap-3 mb-7 w-[98vw] overflow-x-auto">
				<Badge>Completion Time: 1.5 Hours</Badge>
				<Badge>Board: HPCC</Badge>
				<Badge>Cost: $100 to $150</Badge>
			</div>
			<div className="md:text-lg mb-5">
				The ACHPN - Advanced Certification in Hospice and Palliative Nursing
				empowers nurses to provide exceptional end-of-life care.
			</div>
		</div>
	);
};

export default HeroSection;

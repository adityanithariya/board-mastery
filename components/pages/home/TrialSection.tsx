import React from "react";
import Image from "next/image";
import badge from "@assets/badge.svg";

const TrialSection = () => {
	return (
		<div className="bg-gradient-to-r from-[#483185] to-[#a273f9] text-white py-24 px-4 md:pl-24 md:pr-12 flex flex-col-reverse md:flex-row items-center md:gap-14">
			<div className="flex flex-col gap-7 md:w-[97vw]">
				<h2 className="text-3xl md:text-5xl font-semibold md:leading-[64px]">
					7 days trial with 100% money back guarantee
				</h2>
				<div className="text-lg md:text-xl font-light">
					We're committed to your success. If you're not satisfied within 7
					days, we offer a 100% money-back guarantee—no questions asked.
				</div>
				<button
					type="button"
					className="bg-white text-secondary px-24 py-4 md:py-2.5 mt-5 md:w-fit rounded-[0.5rem] font-semibold"
				>
					Learn More
				</button>
			</div>
			<div>
				<Image src={badge} alt="badge" width={450} height={450} />
			</div>
		</div>
	);
};

export default TrialSection;

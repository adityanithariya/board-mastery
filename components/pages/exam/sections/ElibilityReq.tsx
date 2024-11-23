import React from "react";
import Header from "@components/exam/header";
import videoImg from "@assets/eligibility-req.png";
import Image from "next/image";
import { IoPlayCircle } from "react-icons/io5";

const ElibilityReq = () => {
	return (
		<section id="eligibility-requirements">
			<Header>Eligibility Requirements</Header>
			<div>
				To be eligible for the CHPN® exam, a registered nurse must have at least
				500 hours of hospice and palliative nursing practice within the last 12
				months or 1,000 hours within the last 24 months. This requirement
				ensures that candidates have adequate hands-on experience in the field
				before pursuing certification.
			</div>
			<div className="mt-8 ml-1 rounded-[2rem] shadow p-2 w-fit border border-slate-100">
				<div className="relative w-[85vw] h-[180px] md:w-[620px] md:h-[335px] rounded-3xl overflow-hidden">
					<Image
						src={videoImg}
						alt="videoImg"
						layout="fill"
						objectFit="cover"
					/>
					<IoPlayCircle className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-white size-16 md:size-24 opacity-40 hover:opacity-60 transition-all" />
				</div>
			</div>
		</section>
	);
};

export default ElibilityReq;

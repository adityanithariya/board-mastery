"use client";

import PrimaryButton from "@components/ui/primary-btn";
import clsx from "clsx";
import React, { useState } from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@components/ui/select";
import Image from "next/image";
import NCHN from "@assets/qtn-bank/nchn.svg";
import ACLS from "@assets/qtn-bank/acls.svg";
import ANCCFNP from "@assets/qtn-bank/ancc-fnp.svg";
import CCRN from "@assets/qtn-bank/ccrn.svg";
import CPN from "@assets/qtn-bank/cpn.svg";
import CEN from "@assets/qtn-bank/cen.svg";
import NCLEXPN from "@assets/qtn-bank/nclex-pn.svg";

const FindQtnBank = () => {
	const [type, setType] = useState<"nuring" | "practitioner">("nuring");
	const qtnBank = [
		{
			title: "NCHN",
			img: NCHN,
			alt: "nchn",
		},
		{
			title: "ACLS",
			img: ACLS,
			alt: "acls",
		},
		{
			title: "ANCC FNP",
			img: ANCCFNP,
			alt: "ancc-fnp",
		},
		{
			title: "CCRN",
			img: CCRN,
			alt: "ccrn",
		},
		{
			title: "CPN",
			img: CPN,
			alt: "cpn",
		},
		{
			title: "CEN",
			img: CEN,
			alt: "cen",
		},
		{
			title: "NCLEX-PN",
			img: NCLEXPN,
			alt: "nclex-pn",
		},
		{
			title: "PALS",
			img: ACLS,
			alt: "pals",
		},
	];
	return (
		<div className="py-10 md:px-16 bg-gradient-to-b from-primary to-[#fefeff] pointer-events-auto">
			<div className="w-full md:rounded-3xl bg-primary-bright md:shadow px-5 md:px-0 py-12 flex flex-col items-center gap-8 ">
				<h2 className="text-gray font-semibold text-4xl w-full text-left md:text-center">
					Find Your
					<br className="md:hidden" />
					<span className="text-gradient md:pl-3">Question Bank</span>
				</h2>
				<div className="flex gap-4 flex-col md:flex-row px-5">
					<div className="flex rounded-lg font-semibold text-secondary bg-white relative border border-slate-300">
						<button
							type="button"
							className="w-[45vw] md:w-[200px] text-center z-20 py-4"
							onClick={() => setType("nuring")}
						>
							Nursing
						</button>
						<button
							type="button"
							className="w-[45vw] md:w-[200px] text-center z-20 py-4"
							onClick={() => setType("practitioner")}
						>
							Nurse Practitioner
						</button>
						<div
							className={clsx(
								"w-[43.5vw] md:w-[195px] h-[90%] mx-[0.2rem] rounded-md absolute bg-secondary/20 border border-secondary top-[5%] transition-all z-10",
								type === "nuring" ? "left-0" : "left-[50%]",
							)}
						/>
					</div>
					<Select defaultValue="nchn">
						<SelectTrigger className="w-[90vw] md:w-[360px] h-14 font-semibold text-gray bg-white *:!flex *:gap-2">
							<SelectValue placeholder="Theme" />
						</SelectTrigger>
						<SelectContent>
							{qtnBank.map((item) => (
								<SelectItem value={item.alt} key={item.title}>
									<div className="flex gap-2">
										<Image
											src={item.img}
											width={24}
											height={24}
											alt={item.alt}
										/>
										{item.title}
									</div>
								</SelectItem>
							))}
						</SelectContent>
					</Select>
					<PrimaryButton className="!px-20">Search</PrimaryButton>
				</div>
			</div>
		</div>
	);
};

export default FindQtnBank;

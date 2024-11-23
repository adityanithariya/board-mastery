"use client";

import PrimaryButton from "@components/ui/primary-btn";
import clsx from "clsx";
import React, { useState } from "react";
import SelectExam from "@components/SelectExam";

const FindQtnBank = () => {
	const [type, setType] = useState<"nuring" | "practitioner">("nuring");
	return (
		<section className="py-10 md:px-16 bg-gradient-to-b from-primary to-[#fefeff] pointer-events-auto">
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
					<SelectExam />
					<PrimaryButton className="!px-20">Search</PrimaryButton>
				</div>
			</div>
		</section>
	);
};

export default FindQtnBank;

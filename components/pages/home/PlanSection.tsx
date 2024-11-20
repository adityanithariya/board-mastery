import React from "react";
import SelectExam from "@components/SelectExam";
import PrimaryButton from "@components/ui/primary-btn";
import { AiOutlineCheck } from "react-icons/ai";
import { RxCross1 } from "react-icons/rx";

const Pointer = ({
	content,
	checked = true,
}: { content: string; checked?: boolean }) => {
	return (
		<div className="flex items-center justify-start gap-3">
			{checked ? (
				<AiOutlineCheck className="size-6 p-1 rounded-full text-green-700 bg-green-300/25" />
			) : (
				<RxCross1 className="size-6 p-1 rounded-full text-red-700 bg-red-300/25" />
			)}
			{content}
		</div>
	);
};

const PlanSection = () => {
	return (
		<div className="py-20">
			<div className="flex flex-col items-center justify-center mb-20">
				<h2 className="text-4xl font-semibold mb-7">
					Plans that <span className="text-gradient">fit your budget</span>
				</h2>
				<div className="text-xl">
					Simple, transparent pricing that grows with you. Try any plan free for
					30 days.
				</div>
			</div>
			<div className="flex gap-10 items-center justify-center px-24">
				<div className="w-1/2 border border-slate-200 bg-primary-bright/70 shadow-lg rounded-2xl divide-y *:border-slate-200 *:px-8 py-3">
					<div className="flex items-center justify-between py-4">
						<div>
							<div className="bg-gradient rounded-full w-fit px-4 py-1 text-sm text-white mb-2">
								Popular
							</div>
							<div className="text-2xl font-semibold">Comprehensive Plan</div>
						</div>
						<div className="text-gradient text-3xl font-semibold flex items-start">
							$<span className="text-6xl">147</span>
						</div>
					</div>
					<div className="py-7">
						<h3 className="font-semibold uppercase mb-6">Features</h3>
						<div className="space-y-2">
							<Pointer content="All features in the Essentials Plan." />
							<Pointer content="Video lectures covering the full ACHPN® exam blueprint." />
							<Pointer content="Downloadable lecture printouts." />
							<Pointer content="CE hours included: Answer practice questions and earn CE." />
						</div>
					</div>
					<div className="py-7 space-y-4">
						<SelectExam className="!w-full !h-12" />
						<PrimaryButton className="w-full">Buy Now</PrimaryButton>
						<div className="text-sm text-center font-semibold text-gray-light">
							<span className="text-[#b966e1]">7 days</span> Money Back
							Guarantee!
						</div>
					</div>
				</div>
				<div className="w-1/2 border border-slate-200 shadow-lg rounded-2xl divide-y *:border-slate-200 *:px-8 py-3">
					<div className="flex items-center justify-between py-4">
						<div>
							<div className="bg-gradient rounded-full w-fit px-4 py-1 text-sm text-white mb-2 opacity-0">
								Popular
							</div>
							<div className="text-2xl font-semibold">Essentials Plan</div>
						</div>
						<div className="text-3xl font-semibold flex items-start">
							$<span className="text-6xl">97</span>
						</div>
					</div>
					<div className="py-7">
						<h3 className="font-semibold uppercase mb-6">Features</h3>
						<div className="space-y-2">
							<Pointer content="Access to 1,300 practice questions" />
							<Pointer content="Six-month unlimited access." />
							<Pointer content="Four predictor exams to test readiness." />
							<Pointer content="No CE hours awarded." checked={false} />
						</div>
					</div>
					<div className="py-7 space-y-4">
						<SelectExam className="!w-full !h-12" defaultValue="" />
						<PrimaryButton disabled className="w-full">
							Buy Now
						</PrimaryButton>
						<div className="text-sm text-center font-semibold text-gray-light">
							<span className="text-[#b966e1]">7 days</span> Money Back
							Guarantee!
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default PlanSection;

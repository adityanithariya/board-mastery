import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";
import type { FC, ReactNode } from "react";
import PrimaryButton from "@components/ui/primary-btn";
import Image from "next/image";

const Pointer: FC<{ children: ReactNode }> = ({ children }) => {
	return (
		<div className="flex gap-3 items-start">
			<div className="size-6">
				<FaRegCircleCheck className="size-6 text-secondary" />
			</div>
			<span className="font-medium max-w-[32rem]">{children}</span>
		</div>
	);
};

const FeatureSection = () => {
	return (
		<section className="pt-16 md:pt-24 px-4 md:px-0 w-[100vw] md:w-full overflow-hidden">
			<div className="flex flex-col gap-5 items-center justify-center pb-14">
				<h2 className="text-gray text-3xl md:text-4xl font-semibold">
					Let us pave your
					<span className="text-gradient pl-3">way to success</span>
				</h2>
				<div className="md:w-[50vw] text-lg md:text-center">
					Prepare anytime, anywhere, with expert-designed questions and
					multi-device access.
				</div>
			</div>
			<div className="flex flex-col md:flex-row items-center justify-end gap-2 mb-20">
				<div>
					<h3 className="text-2xl md:text-3xl font-semibold pb-4">
						Earn CE Credits as You Study!
					</h3>
					<div className="flex flex-col text-gray pt-5 gap-5 pl-2 md:pl-4 pb-8 md:text-lg">
						<Pointer>Only question bank offering CE credits.</Pointer>
						<Pointer>CE Credits offered through ANCC.</Pointer>
						<Pointer>
							Study and fulfill your CE requirements at the same time.
						</Pointer>
					</div>
					<PrimaryButton className="w-full md:w-fit md:!px-[6.5rem] !py-3">
						Get Started
					</PrimaryButton>
				</div>
				<div className="overflow-hidden hidden md:block">
					<div className="relative left-24">
						<Image
							className="object-cover"
							src="/features/1.png"
							alt="CE Points"
							width={680}
							height={980}
						/>
					</div>
				</div>
				<div className="pt-10 md:hidden">
					<div className="relative scale-110">
						<Image
							className="object-cover md:w-[680px]"
							src="/features/1-mobile.png"
							alt="CE Points"
							width={680}
							height={980}
						/>
					</div>
				</div>
			</div>
			<div className="flex flex-col md:flex-row items-center justify-start gap-5 md:gap-20 mb-20">
				<div className="overflow-hidden hidden md:block">
					<div className="relative -left-5">
						<Image
							src="/features/2.png"
							alt="CE Points"
							width={680}
							height={980}
						/>
					</div>
				</div>
				<div>
					<h3 className="text-3xl font-semibold pb-4">Robust Question Bank</h3>
					<div className="flex flex-col text-gray pt-5 gap-5 pl-4 pb-8 text-lg">
						<Pointer>
							Features 1,300 practice questions to mirror the ACHPN® exam rigor.
						</Pointer>
						<Pointer>
							Gain insights with explanations for correct and incorrect answers.
						</Pointer>
						<Pointer>
							Access the question bank for six months with unlimited practice
							options.
						</Pointer>
					</div>
					<PrimaryButton className="w-full md:w-fit !px-[6.5rem] !py-3">
						Get Started
					</PrimaryButton>
				</div>
				<div className="pt-10 md:hidden">
					<div className="relative scale-110">
						<Image
							className="object-cover md:w-[680px]"
							src="/features/2-mobile.png"
							alt="CE Points"
							width={680}
							height={980}
						/>
					</div>
				</div>
			</div>
			<div className="flex flex-col md:flex-row items-center justify-end gap-2">
				<div>
					<h3 className="text-3xl font-semibold pb-4">
						Convenient and Flexible Learning
					</h3>
					<div className="flex flex-col text-gray pt-5 gap-5 pl-4 pb-8 text-lg">
						<Pointer>
							On-demand Study materials, perfect for balancing work and exam
							prep.
						</Pointer>
						<Pointer>Optimized for iOS, Android, and desktop.</Pointer>
						<Pointer>Study on the go, wherever you are.</Pointer>
					</div>
					<PrimaryButton className="w-full md:w-fit !px-[6.5rem] !py-3">
						Get Started
					</PrimaryButton>
				</div>
				<div className="overflow-hidden hidden md:block">
					<div className="relative left-24">
						<Image
							src="/features/3.png"
							alt="CE Points"
							width={680}
							height={980}
						/>
					</div>
				</div>
				<div className="pt-10 md:hidden">
					<div className="relative scale-110">
						<Image
							className="object-cover md:w-[680px]"
							src="/features/3-mobile.png"
							alt="CE Points"
							width={680}
							height={980}
						/>
					</div>
				</div>
			</div>
		</section>
	);
};

export default FeatureSection;

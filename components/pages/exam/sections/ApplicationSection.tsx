import React from "react";
import Header from "@components/exam/header";
import MessageIcon from "@assets/application/msg.svg";
import AccessibilityIcon from "@assets/application/accessibility.svg";
import AnywhereIcon from "@assets/application/anywhere.svg";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import PrimaryButton from "@components/ui/primary-btn";
import Image from "next/image";

const Pointer = ({
	index,
	title,
	content,
}: { index: number; title: string; content: string }) => {
	return (
		<div className="flex items-start gap-5 mb-12">
			<div className="bg-[#F2F4F7] text-secondary font-semibold size-14 min-w-14 flex items-center justify-center rounded-full">
				{index}.
			</div>
			<div className="w-fit">
				<h3 className="font-medium mb-1.5">{title}:</h3>
				<div className="text-base">{content}</div>
			</div>
		</div>
	);
};

const Pointer2 = ({
	img,
	title,
	content,
}: { img: StaticImport; title: string; content: string }) => {
	return (
		<div className="flex items-center flex-col md:flex-row md:items-start gap-5">
			<div className="bg-white font-semibold size-14 relative flex items-center justify-center rounded-full">
				<Image
					src={img}
					alt="message"
					className="size-6"
					width={24}
					height={24}
				/>
			</div>
			<div className="w-fit flex flex-col md:items-start items-center">
				<h3 className="font-medium mb-1.5 md:text-left text-center">{title}</h3>
				<div className="text-base md:text-left text-center">{content}</div>
			</div>
		</div>
	);
};

const ApplicationSection = () => {
	const points = [
		{
			title: "Online Application",
			content:
				"Visit the Hospice and Palliative Credentialing Center (HPCC) website to access the online application portal.",
		},
		{
			title: "Application Submission",
			content:
				"Complete the application by providing the necessary personal and professional information. After submission, your eligibility will be reviewed by HPCC.",
		},
		{
			title: "Scheduling the Exam",
			content:
				"Upon approval, you'll receive instructions to schedule your exam at a PSI testing center or opt for live remote proctoring, offering flexibility in how you take the test.",
		},
		{
			title: "Preparation",
			content:
				"The BoardCerts CHPN® Question Bank is designed to streamline your preparation for the CHPN® exam by aligning closely with the exam blueprint and reflecting the same level of difficulty found on the actual test. While additional resources and references are available in the candidate handbook, we have consolidated essential materials into a comprehensive question bank that covers the topics on the exam. Furthermore, our question bank is reviewed with each exam update review to ensure it stays up-to-date with the latest exam blueprint and standards in hospice and palliative care.",
		},
	];
	return (
		<section id="application-process">
			<Header>Application Process</Header>
			<div className="mb-4">
				To be eligible for the CHPN® exam, a registered nurse must have at least
				500 hours of hospice and palliative nursing practice within the last 12
				months or 1,000 hours within the last 24 months. This requirement
				ensures that candidates have adequate hands-on experience in the field
				before pursuing certification.
			</div>
			{...points.map((point, index) => (
				<Pointer
					key={point.title}
					index={index + 1}
					title={point.title}
					content={point.content}
				/>
			))}
			<div className="bg-gradient-to-br from-[#FFF8F8] to-[#fdeef9] rounded-xl pt-6 pb-4 px-7">
				<h3 className="text-xl md:text-2xl font-semibold mb-5">
					Learn from Board Mastery
				</h3>
				<div className="flex flex-col gap-12">
					<Pointer2
						title="Robust Question Bank"
						img={MessageIcon}
						content="Explore a comprehensive question bank designed to enhance your understanding of hospice and palliative care."
					/>
					<Pointer2
						title="Accessible on Any Device"
						img={AccessibilityIcon}
						content="Explore a comprehensive question bank designed to enhance your understanding of hospice and palliative care."
					/>
					<Pointer2
						title="Convenient Anytime, Anywhere Access"
						img={AnywhereIcon}
						content="Access your resources anytime, anywhere, making learning flexible and convenient. Whether at home or on the go, knowledge is just a click away!"
					/>
				</div>
				<PrimaryButton className="md:!px-20 text-base my-7">
					View our Prices
				</PrimaryButton>
			</div>
		</section>
	);
};

export default ApplicationSection;

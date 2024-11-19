import React from "react";

const StatItem = ({
	title,
	description,
}: { title: string; description: string }) => {
	return (
		<div className="flex flex-col items-start gap-5 text-gray">
			<div className="text-gradient text-6xl font-semibold">{title}</div>
			<div className="w-[150px]">{description}</div>
		</div>
	);
};

const StatSection = () => {
	return (
		<div className="px-4 md:px-24 mt-40 mb-20">
			<h2 className="text-3xl md:text-4xl text-gray font-semibold mb-6">
				Take the Next Step in
				<span className="text-gradient pl-3">Your Career Journey</span>
			</h2>
			<div className="md:w-[55vw] text-xl">
				Join a community of dedicated hospice and palliative care professionals
				achieving certification and transforming patient care.
			</div>
			<div className="flex flex-col md:flex-row justify-between items-center gap-14 md:items-start mt-16">
				<StatItem title="4000+" description="PubMed-Indexed Review Articles" />
				<StatItem title="900+" description="Nursing CE Activities" />
				<StatItem title="1000+" description="Physician CME Activities" />
				<StatItem title="2,000+" description="Contributors Authors & Editors" />
			</div>
		</div>
	);
};

export default StatSection;

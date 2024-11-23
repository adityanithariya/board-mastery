import React from "react";
import Header, { SubHeader } from "../header";
import {
	Table,
	TableBody,
	TableCell,
	TableHead,
	TableHeader,
	TableRow,
} from "@components/table";
import clsx from "clsx";
import OutlinePieChart from "../OutlinePieChart";

const Outline = () => {
	const outlines = [
		{
			title: "Assessment and Planning",
			questions: 25,
			description:
				"Focuses on setting care goals, making shared decisions, and coordinating with an interdisciplinary team to provide individualized care.",
		},
		{
			title: "Pain Management",
			questions: 26,
			description:
				"Covers pain assessment and treatment, using medications, non-pharmacologic approaches, and complementary therapies to alleviate suffering.",
		},
		{
			title: "Symptom Management",
			questions: 28,
			description:
				"Addresses managing symptoms across bodily systems to improve patient comfort and quality of life.",
		},
		{
			title: "Support, Education, and Advocacy",
			questions: 28,
			description:
				"Examines the nurse's role in guiding patients and families through advance care planning, emotional support, and grief services.",
		},
		{
			title: "Practice Issues",
			questions: 28,
			description:
				"Covers compliance with hospice standards, legal regulations, self-care, and staying current with healthcare policy changes affecting end-of-life care.",
		},
	];
	return (
		<section id="outline">
			<Header>Outline</Header>
			<div>
				The CHPN® exam assesses core competencies in hospice and palliative
				care, ensuring registered nurses are equipped to provide comprehensive
				end-of-life care. It covers essential areas such as patient assessment,
				pain and symptom management, family support, and adherence to
				professional standards.
			</div>
			{outlines.map((outline) => (
				<React.Fragment key={outline.title}>
					<SubHeader>
						{outline.title}{" "}
						<span className="font-normal">({outline.questions} questions)</span>
					</SubHeader>
					<div>{outline.description}</div>
				</React.Fragment>
			))}
			<div className="mt-12 rounded-lg border border-slate-200 overflow-hidden">
				<Table className="overflow-x-auto">
					<TableHeader>
						<TableRow>
							<TableHead className="w-[200px]">Topics</TableHead>
							<TableHead className="min-w-[400px] md:w-[800px]">Details</TableHead>
							<TableHead className="min-w-[180px] text-center">
								Number of Questions
							</TableHead>
						</TableRow>
					</TableHeader>
					<TableBody>
						{...outlines.map((outline, index) => (
							<TableRow
								key={outline.title}
								className={clsx(index % 2 === 0 && "bg-slate-100/50")}
							>
								<TableCell className="font-medium">{outline.title}</TableCell>
								<TableCell className="text-xs">{outline.description}</TableCell>
								<TableCell className="text-center">
									{outline.questions}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</div>
            <OutlinePieChart />
		</section>
	);
};

export default Outline;

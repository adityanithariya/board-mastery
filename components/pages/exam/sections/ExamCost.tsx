import React from "react";
import Header from "@components/exam/header";

const ExamCost = () => {
	return (
		<section id="exam-dates-and-costs">
			<Header>Exam Dates and Costs</Header>
			<div>
				Application Window: The Certified Hospice and Palliative Nurse (CHPN®®)
				exam is administered quarterly, with testing windows in March, June,
				September, and December. Application periods open three months prior to
				each testing window.
				<br />
				<br />
				The latest information on CHPN® exam dates, application deadlines, and
				exam costs can be found on the Hospice and Palliative Credentialing
				Center (HPCC) website. For comprehensive details and resources, visit{" "}
				<a href="advancingexpertcare.org" className="text-anchor underline font-medium">
					advancingexpertcare.org
				</a>
				.
			</div>
		</section>
	);
};

export default ExamCost;

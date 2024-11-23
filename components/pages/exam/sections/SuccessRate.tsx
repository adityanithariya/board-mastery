import React from "react";
import Header, { Pointer } from "../header";

const SuccessRates = () => {
	return (
		<section id="pass-fail-rates">
			<Header>Pass/Fail Rates</Header>
			<ul className="list-disc pl-7 space-y-6">
				<Pointer
					title="Passing Score"
					content={`A scaled score of 500 on a scale of 200 to 800 is required to pass the exam. A scaled score is a way of representing a candidate's performance on an exam in a standardized format. Rather than reporting the raw number of questions answered correctly, the score is converted to a scale (in the case of the CHPN® exam, 200 to 800) that accounts for variations in difficulty across different test versions. This allows fair comparison between different test administrations. For the CHPN® exam, a scaled score of 500 is required to pass, meaning the test taker's performance meets the minimum standard established by the certifying organization.`}
				/>
				<Pointer
					title="Exam Statistics"
					content="Detailed statistics are available on the HPCC Exam Statistics webpage. Pass rates change from year to year but are generally in the range of 69% to 75%."
				/>
				<Pointer
					title="Score Reporting"
					content="Candidates receive an on-screen pass/fail result immediately after completing the exam, with a detailed score report emailed within 24 hours."
				/>
			</ul>
		</section>
	);
};

export default SuccessRates;

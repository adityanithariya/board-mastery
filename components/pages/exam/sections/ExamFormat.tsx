import React from "react";
import Header, { Pointer } from "@components/exam/header";

const ExamFormat = () => {
	return (
		<section id="exam-format">
			<Header>Exam Format</Header>
			<ul className="list-disc pl-7 space-y-6">
				<Pointer
					title="Number of Questions"
					content="CHPN® exam includes 150 multiple-choice questions, of which 135 are scored, and 15 are unscored 'trial' questions. These unscored questions are scattered throughout the exam and do not count toward the final score, as they are used to gather data for future test development."
				/>
				<Pointer
					title="Exam Format"
					content="Multiple-choice with four response opinions (A, B, C, D)."
				/>
				<Pointer
					title="Testing Options"
					content="Available at PSI testing centers or via live remote proctoring."
				/>
				<Pointer
					title="Passing Score"
					content="The passing score for the CHPN® exam is 75."
				/>
			</ul>
		</section>
	);
};

export default ExamFormat;

import React from "react";
import Header, { SubHeader } from "@components/exam/header";
import sampleQtn from "@assets/sample-qtn.png";
import Image from "next/image";

const ExamPractice = () => {
	return (
		<section id="exam-practice-questions">
			<Header>Exam Practice Questions</Header>
			<SubHeader>Access Sample Questions:</SubHeader>
			<div className="mb-10">
				Find sample questions from the BoardCerts{" "}
				<a href="#a" className="text-anchor font-medium underline">
					question bank here
				</a>
				. These questions are crafted to reflect the level of application and
				difficulty found on the CHPN® exam.
			</div>
			<Image src={sampleQtn} alt="sampleQtn" width={862} height={320} />
			<SubHeader>Interactive Practice:</SubHeader>
			<div>
				Practice these questions in the interactive quiz software here for an
				engaging study experience, which will provide feedback at the end of the
				practice test.{" "}
				<a href="#a" className="text-anchor font-medium underline">
					Practice questions here.
				</a>
			</div>
		</section>
	);
};

export default ExamPractice;

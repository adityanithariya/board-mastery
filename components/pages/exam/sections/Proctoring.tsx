import React from "react";
import Header from "../header";
import ExamProctorImg from "@assets/exam-proctor.png";
import Image from "next/image";

const Proctoring = () => {
	return (
		<section id="exam-proctoring">
			<Header>Exam Proctoring</Header>
			<div>
				The Certified Hospice and Palliative Nurse (CHPN®®) exam is administered
				by the Hospice and Palliative Credentialing Center (HPCC) in partnership
				with PSI Services. Exams can be taken through live remote proctoring.
				Alternatively, if you prefer an in-person experience, PSI operates a
				vast network of test centers across the United States
				<br />
				<br />
				<span className="font-semibold">Live Remote Proctoring:</span>{" "}
				Candidates have the option to take the CHPN® exam via Live Remote
				Proctoring. This method allows you to complete the exam from a location
				of your choice, such as your home or office, while being monitored in
				real-time by a professional proctor through your computer's webcam and
				microphone.
			</div>
			<div className="mt-8 ml-1 rounded-[2rem] shadow p-2 w-fit border border-slate-100">
				<div className="relative w-[85vw] h-[200px] md:w-[620px] md:h-[335px] rounded-3xl overflow-hidden">
					<Image
						src={ExamProctorImg}
						alt="videoImg"
						layout="fill"
						objectFit="cover"
					/>
				</div>
			</div>
		</section>
	);
};

export default Proctoring;

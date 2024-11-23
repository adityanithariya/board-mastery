import PrimaryButton from "@components/ui/primary-btn";
import React from "react";
import Header from "@components/exam/header";

const AboutExam = () => {
	return (
		<section id="about-the-exam">
			<Header>About the Exam</Header>
			<div>
				The Certified Hospice and Palliative Nurse (CHPN®) exam is a specialized
				certification for registered nurses dedicated to providing care for
				patients facing terminal illnesses. Earning this credential validates a
				nurse's expertise in end-of-life care, encompassing complex symptom
				management, emotional support, and the nuances of holistic patient and
				family care during advanced stages of illness. This certification not
				only reflects a high standard of competency in hospice and palliative
				nursing but also recognizes a commitment to upholding quality of life
				and dignity for patients at the end of life.
			</div>
			<PrimaryButton className="!px-10 my-5 md:my-7">
				Try 10 Free Question Now
			</PrimaryButton>
		</section>
	);
};

export default AboutExam;

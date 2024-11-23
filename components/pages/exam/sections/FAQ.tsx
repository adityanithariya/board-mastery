import React from "react";
import Header from "@components/exam/header";
import Accordion2 from "@components/ui/abstract-accordion";

const FAQ = () => {
	return (
		<section id="faq">
			<Header>Frequently Asked Questions</Header>
			<div className="flex flex-col items-center gap-2">
				<Accordion2
					title="What is the purpose of the Certified Hospice and Palliative Nurse (CHPN®) certification?"
					content="The CHPN® certification validates the expertise of registered nurses who provide specialized care to patients with life-limiting illnesses, ensuring high standards in hospice and palliative care practice."
				/>
				<Accordion2
					title="Can the exam be taken through remote proctoring?"
					content="Yes, you can try us for free 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
				/>
				<Accordion2
					title="What organization offers the CHPN® certification?"
					content="Yes, you can try us for free 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
				/>
			</div>
		</section>
	);
};

export default FAQ;

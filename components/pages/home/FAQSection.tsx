"use client";

import React from "react";
import Accordion2 from "@components/ui/abstract-accordion";

const FAQSection = () => {
	return (
		<section className="py-16 md:py-32">
			<div className="px-3 flex flex-col items-center justify-center text-center text-gray">
				<h2 className="text-3xl md:text-4xl font-semibold pb-5">
					Frequently <br className="md:hidden" />
					<span className="text-gradient">asked questions</span>
				</h2>
				<div className="text-xl">
					Your questions answered—all need to know preparing for the ACHPN®
					exam.
				</div>
			</div>
			<div className="flex flex-col items-center mt-16 gap-2">
				<Accordion2
					title="What does the ACHPN® preparation course include?"
					content="The course provides a complete preparation package with over 1,300 practice questions designed to mirror the ACHPN® exam, supported by detailed explanations. It also includes video lectures covering the exam blueprint, four predictor exams to assess readiness, and downloadable study resources."
				/>
				<Accordion2
					title="How long do I have access to the course and question bank?"
					content="Yes, you can try us for free 30 days. If you want, we'll provide you with a free, personalized 30-minute onboarding call to get you up and running as soon as possible."
				/>
				<Accordion2
					title="Can I earn CE hours through this course?"
					content="Yes, you can earn CE hours through this course. The course is accredited by the American Nurses Credentialing Center (ANCC) and the California Board of Registered Nursing (CBRN)."
				/>
			</div>
		</section>
	);
};

export default FAQSection;

"use client";

import React, { type MouseEventHandler } from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@components/accordion";

const FAQSection = () => {
	const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
		if (!e.currentTarget.style.backgroundColor)
			e.currentTarget.style.backgroundColor = "#f9fafb";
		else e.currentTarget.style.backgroundColor = "";
	};
	return (
		<div className="py-16 md:py-32">
			<div className="flex flex-col items-center justify-center text-center text-gray">
				<h2 className="text-3xl md:text-4xl font-semibold pb-5">
					Frequently <span className="text-gradient">asked questions</span>
				</h2>
				<div className="text-xl">
					Your questions answered—all need to know preparing for the ACHPN®
					exam.
				</div>
			</div>
			<div className="flex flex-col items-center mt-16 gap-2">
				<Accordion
					type="single"
					collapsible
					className="rounded-2xl px-8 py-2"
					onClick={handleClick}
				>
					<AccordionItem value="item-1">
						<AccordionTrigger className="md:w-[60vw] text-lg text-gray">
							What does the ACHPN® preparation course include?
						</AccordionTrigger>
						<AccordionContent className="md:w-[60vw] text-base pl-10">
							The course provides a complete preparation package with over 1,300
							practice questions designed to mirror the ACHPN® exam, supported
							by detailed explanations. It also includes video lectures covering
							the exam blueprint, four predictor exams to assess readiness, and
							downloadable study resources.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
				<Accordion
					type="single"
					collapsible
					className="rounded-2xl px-8 py-2"
					onClick={handleClick}
				>
					<AccordionItem value="item-1">
						<AccordionTrigger className="md:w-[60vw] text-lg text-gray">
							How long do I have access to the course and question bank?
						</AccordionTrigger>
						<AccordionContent className="md:w-[60vw] text-base pl-10">
							Yes, you can try us for free 30 days. If you want, we'll provide
							you with a free, personalized 30-minute onboarding call to get you
							up and running as soon as possible.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
				<Accordion
					type="single"
					collapsible
					className="rounded-2xl px-8 py-2"
					onClick={handleClick}
				>
					<AccordionItem value="item-1">
						<AccordionTrigger className="md:w-[60vw] text-lg text-gray">
							Can I earn EC hours through this course?
						</AccordionTrigger>
						<AccordionContent className="md:w-[60vw] text-base pl-10">
							Yes, you can try us for free 30 days. If you want, we'll provide
							you with a free, personalized 30-minute onboarding call to get you
							up and running as soon as possible.
						</AccordionContent>
					</AccordionItem>
				</Accordion>
			</div>
		</div>
	);
};

export default FAQSection;

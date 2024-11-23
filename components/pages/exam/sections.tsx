"use client";

import React, { useEffect, useState } from "react";
import ExamNavbar from "./navbar";
import AboutExam from "./sections/AboutExam";
import Outline from "./sections/Outline";
import ElibilityReq from "./sections/ElibilityReq";
import ApplicationSection from "./sections/ApplicationSection";
import ExamCost from "./sections/ExamCost";
import ExamFormat from "./sections/ExamFormat";
import SuccessRates from "./sections/SuccessRate";
import Proctoring from "./sections/Proctoring";
import References from "./sections/References";
import Renewal from "./sections/Renewal";
import ExamPractice from "./sections/ExamPractice";
import Certifications from "./sections/Certifications";
import FAQ from "./sections/FAQ";

const Sections = () => {
	const [activeSection, setActiveSection] = useState("about-the-exam");

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				for (const entry of entries) {
					if (entry.isIntersecting) {
						setActiveSection(entry.target.id);
						const navRef = document.getElementById("exam-nav");
						if (entry.target.id === "about-the-exam")
							navRef?.scrollTo({ left: 0, behavior: "smooth" });

						const navItem = document.querySelector(`button#${entry.target.id}`);
						const navItemPosition =
							(navItem?.getBoundingClientRect().left || 0) +
							(navItem?.getBoundingClientRect().width || 0) / 4;
						const navRefPosition = navRef?.scrollLeft || 0;
						const scrollPosition = navItemPosition + navRefPosition - 869;
						if (scrollPosition < 0) return;
						navRef?.scrollTo({
							left: scrollPosition,
							behavior: "smooth",
						});
					}
				}
			},
			{ threshold: 0.1 },
		);

		const sections = document.querySelectorAll("section");
		for (const section of sections) {
			observer.observe(section);
		}

		return () => observer.disconnect();
	}, []);
	const navItems = [
		"About the Exam",
		"Outline",
		"Eligibility Requirements",
		"Application Process",
		"Exam Dates and Costs",
		"Exam Format",
		"Pass/Fail Rates",
		"Exam Proctoring",
		"References Used to Develop Exam",
		"Renewal",
		"Exam Practice Questions",
		"Related Certifications",
		"FAQ",
	];
	return (
		<div>
			<ExamNavbar navItems={navItems} activeSection={activeSection} />
			<div className="divide-y *:border-slate-200 *:py-10 md:*:py-14 md:text-lg">
				<AboutExam />
				<Outline />
				<ElibilityReq />
				<ApplicationSection />
				<ExamCost />
				<ExamFormat />
				<SuccessRates />
				<Proctoring />
				<References />
				<Renewal />
				<ExamPractice />
				<Certifications />
				<FAQ />
			</div>
		</div>
	);
};

export default Sections;

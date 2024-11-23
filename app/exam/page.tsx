import { TrialSection } from "@components/pages/home";
import React from "react";
import Sections from "@components/exam/sections";
import HeroSection from "@components/pages/exam/sections/HeroSection";

const ExamPage = () => {
	return (
		<main>
			<div className="py-7 px-4 md:px-56">
				<HeroSection />
				<Sections />
			</div>
			<TrialSection />
		</main>
	);
};

export default ExamPage;

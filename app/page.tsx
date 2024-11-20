import {
	ContentCreation,
	FAQSection,
	FeatureSection,
	FindQtnBank,
	HeroSection,
	PlanSection,
	StatSection,
	TeamSection,
	Testimonials,
	TrialSection,
} from "@components/home";
import React from "react";

const Home = () => {
	return (
		<main>
			<HeroSection />
			<FindQtnBank />
			<TeamSection />
			<ContentCreation />
			<FeatureSection />
			<StatSection />
			<TrialSection />
			<Testimonials />
			<FAQSection />
			<PlanSection />
		</main>
	);
};

export default Home;

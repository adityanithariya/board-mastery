import HeroSection from "@components/home/HeroSection";
import React from "react";

const Home = () => {
	return (
		<main>
			<HeroSection />
			<div className="py-10 px-16 bg-primary">
				<div className="w-full rounded-3xl bg-primary-bright shadow py-12 flex flex-col items-center gap-8">
					<h2 className="text-gray font-semibold text-4xl">
						Find
						<span className="text-gradient pl-3">Your Question Bank</span>
					</h2>
					<div className="flex gap-4">
						<div className="flex rounded-lg font-semibold text-secondary bg-white relative border border-slate-300">
							<button type="button" className="w-[200px] text-center z-20 py-4">
								Nursing
							</button>
							<button type="button" className="w-[200px] text-center z-20 py-4">
								Nurse Practitioner
							</button>
							<div className="w-[195px] h-[90%] ml-[0.2rem] rounded-md absolute bg-secondary/20 border border-secondary top-[5%] z-10" />
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default Home;

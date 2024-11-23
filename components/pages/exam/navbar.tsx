"use client";

import clsx from "clsx";
import React from "react";
import { RxHamburgerMenu } from "react-icons/rx";

const ExamNavbar = ({
	navItems,
	activeSection,
}: { navItems: string[]; activeSection: string }) => {
	const scrollToSection = (sectionId: string) => {
		const element = document.querySelector(`section#${sectionId}`);
		if (element) {
			const offset = 160;
			const elementPosition = element.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.scrollY - offset;

			window.scrollTo({
				top: offsetPosition,
				behavior: "smooth",
			});
		}
	};
	return (
		<div className="scrollbar flex border-b border-slate-300 sticky top-[7.5rem] pt-1 bg-white z-10">
			<div className="size-5 mx-2 my-3">
				<RxHamburgerMenu />
			</div>
			<div
				id="exam-nav"
				className="flex gap-5 *:px-3 *:py-2 *:whitespace-nowrap w-[80vw] overflow-x-auto"
			>
				{navItems.map((navItem) => {
					const item = navItem
						.replaceAll(" ", "-")
						.replaceAll("/", "-")
						.toLowerCase();
					return (
						<button
							type="button"
							id={item}
							onClick={() => scrollToSection(item)}
							key={navItem}
							className={clsx(
								"cursor-pointer",
								activeSection === item &&
									"font-semibold text-gradient border-b-2 border-secondary",
							)}
						>
							{navItem}
						</button>
					);
				})}
			</div>
		</div>
	);
};

export default ExamNavbar;

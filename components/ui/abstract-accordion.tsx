import React, { type MouseEventHandler } from "react";
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from "@components/accordion";

const Accordion2 = ({ title, content }: { title: string; content: string }) => {
	const handleClick: MouseEventHandler<HTMLDivElement> = (e) => {
		if (!e.currentTarget.style.backgroundColor)
			e.currentTarget.style.backgroundColor = "#f9fafb";
		else e.currentTarget.style.backgroundColor = "";
	};
	return (
		<Accordion
			type="single"
			collapsible
			className="rounded-2xl px-2 md:px-8 py-2"
			onClick={handleClick}
		>
			<AccordionItem value="item-1">
				<AccordionTrigger className="md:w-[60vw] text-lg text-gray">
					{title}
				</AccordionTrigger>
				<AccordionContent className="md:w-[60vw] text-base pl-10">
					{content}
				</AccordionContent>
			</AccordionItem>
		</Accordion>
	);
};

export default Accordion2;

import clsx from "clsx";
import React, { type ReactNode } from "react";

const Header = ({ children }: { children: ReactNode }) => {
	return <h2 className="text-2xl md:text-3xl font-semibold text-gray mb-4">{children}</h2>;
};

export const SubHeader = ({ children }: { children: ReactNode }) => {
	return (
		<h3 className="text-xl md:text-2xl font-semibold text-gray mb-4 mt-10 md:mt-12">{children}</h3>
	);
};

export const Pointer = ({
	title,
	content,
	isAnchor,
}: { title: string; content: string; isAnchor?: boolean }) => {
	return (
		<li>
			<span
				className={clsx("font-semibold", isAnchor && "text-anchor underline")}
			>
				{title}:
			</span>{" "}
			{content}
		</li>
	);
};

export default Header;

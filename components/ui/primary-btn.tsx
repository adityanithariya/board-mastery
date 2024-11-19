import clsx from "clsx";
import React from "react";
import type { ButtonHTMLAttributes, FC } from "react";

const PrimaryButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
	children,
	className,
}) => {
	return (
		<button
			type="button"
			className={clsx(
				"bg-gradient-to-br from-[#aa79f9] via-[#8F65F8] to-[#553b9b] text-white px-5 py-4 md:py-2.5 rounded-[0.5rem] font-semibold",
				className,
			)}
		>
			{children}
		</button>
	);
};

export default PrimaryButton;

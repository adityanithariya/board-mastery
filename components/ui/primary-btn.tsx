import clsx from "clsx";
import React from "react";
import type { ButtonHTMLAttributes, FC } from "react";

const PrimaryButton: FC<ButtonHTMLAttributes<HTMLButtonElement>> = ({
	children,
	className,
	...props
}) => {
	return (
		<button
			type="button"
			className={clsx(
				"bg-gradient-to-br from-[#aa79f9] via-[#8F65F8] to-[#553b9b] text-white px-5 py-3 md:py-2.5 w-full md:w-fit rounded-[0.5rem] font-medium disabled:from-slate-100 disabled:to-slate-100 disabled:border-slate-200 disabled:border disabled:text-slate-400",
				className,
			)}
			{...props}
		>
			{children}
		</button>
	);
};

export default PrimaryButton;

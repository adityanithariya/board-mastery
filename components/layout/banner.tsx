"use client";

import React, { useState } from "react";
import { RxCross2 } from "react-icons/rx";

const Banner = () => {
	const [visible, setVisible] = useState(true);
	return (
		visible && (
			<div className="bg-gradient-to-r relative w-[100vw] from-[#ab79f9] via-[#8F65F8] to-[#5c3fa4] font-normal text-white text-sm py-2.5 text-left pl-4 md:text-center z-30">
				Earn free CE credit by
				<span className="underline pl-1">answering practice questions</span>
				<button
					type="button"
					className="absolute right-5 top-[50%] translate-y-[-50%]"
					onClick={() => setVisible(false)}
				>
					<RxCross2 className="size-4" />
				</button>
			</div>
		)
	);
};

export default Banner;

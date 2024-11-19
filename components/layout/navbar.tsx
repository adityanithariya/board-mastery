"use client";

import Image from "next/image";
import React, { useState } from "react";
import logo from "@assets/logo.svg";
import { IoIosArrowDown } from "react-icons/io";
import Button from "@components/button";
import { RxCross2, RxHamburgerMenu } from "react-icons/rx";
import clsx from "clsx";

const Navbar = () => {
	const [open, setOpen] = useState(false);
	return (
		<nav className="bg-white px-5 md:pl-[7rem] md:pr-10 py-[1.15rem] flex justify-between items-center shadow relative w-[100vw] z-10 font-semibold text text-gray-light">
			<div className="flex items-center gap-8">
				<Image
					src={logo}
					priority
					className="mr-2 z-10"
					alt="logo"
					width={100}
					height={77}
				/>
				<div
					className={clsx(
						"flex items-center gap-8 flex-col md:flex-row w-full md:w-fit absolute md:static py-6 md:py-0 left-0 bg-white transition-all",
						open ? "top-16" : "-top-96",
					)}
				>
					<div>Home</div>
					<div className="flex items-center gap-3">
						Products <IoIosArrowDown />
					</div>
					<div className="flex items-center gap-3">
						Resources <IoIosArrowDown />
					</div>
					<div>Pricing</div>
					<div>Contact</div>
				</div>
			</div>
			<div
				className={clsx(
					"flex items-center gap-8 flex-col md:flex-row w-full md:w-fit absolute md:static py-4 md:py-0 left-0 bg-white transition-all shadow md:shadow-none",
					open ? "top-[22rem]" : "-top-96",
				)}
			>
				<div>Log in</div>
				<Button>Purchase Now</Button>
			</div>
			<button
				type="button"
				className="block md:hidden z-20"
				onClick={() => setOpen(!open)}
			>
				{open ? (
					<RxCross2 className="size-7" />
				) : (
					<RxHamburgerMenu className="size-7" />
				)}
			</button>
		</nav>
	);
};

export default Navbar;

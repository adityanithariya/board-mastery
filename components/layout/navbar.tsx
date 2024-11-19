import Image from "next/image";
import React from "react";
import logo from "@assets/logo.svg";
import { IoIosArrowDown } from "react-icons/io";
import Button from "@components/button";

const Navbar = () => {
	return (
		<nav className="bg-white pl-[7rem] pr-10 py-[1.15rem] flex justify-between items-center shadow relative z-10 font-semibold text text-gray-light">
			<div className="flex items-center gap-8">
				<Image src={logo} className="mr-2" alt="logo" width={100} height={77} />
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
			<div className="flex items-center gap-8">
				<div>Log in</div>
				<Button>Purchase Now</Button>
			</div>
		</nav>
	);
};

export default Navbar;

import React from "react";
import {
	Select,
	SelectContent,
	SelectItem,
	SelectTrigger,
	SelectValue,
} from "@components/ui/select";
import Image from "next/image";
import NCHN from "@assets/qtn-bank/nchn.svg";
import ACLS from "@assets/qtn-bank/acls.svg";
import ANCCFNP from "@assets/qtn-bank/ancc-fnp.svg";
import CCRN from "@assets/qtn-bank/ccrn.svg";
import CPN from "@assets/qtn-bank/cpn.svg";
import CEN from "@assets/qtn-bank/cen.svg";
import NCLEXPN from "@assets/qtn-bank/nclex-pn.svg";
import clsx from "clsx";

const qtnBank = [
	{
		title: "NCHN",
		img: NCHN,
		alt: "nchn",
	},
	{
		title: "ACLS",
		img: ACLS,
		alt: "acls",
	},
	{
		title: "ANCC FNP",
		img: ANCCFNP,
		alt: "ancc-fnp",
	},
	{
		title: "CCRN",
		img: CCRN,
		alt: "ccrn",
	},
	{
		title: "CPN",
		img: CPN,
		alt: "cpn",
	},
	{
		title: "CEN",
		img: CEN,
		alt: "cen",
	},
	{
		title: "NCLEX-PN",
		img: NCLEXPN,
		alt: "nclex-pn",
	},
	{
		title: "PALS",
		img: ACLS,
		alt: "pals",
	},
];
const SelectExam = ({
	className,
	defaultValue = "nchn",
}: { className?: string; defaultValue?: (typeof qtnBank)[number]["alt"] }) => {
	return (
		<Select defaultValue={defaultValue}>
			<SelectTrigger
				className={clsx(
					"w-[90vw] md:w-[360px] h-14 font-semibold text-gray bg-white *:!flex *:gap-2",
					className,
				)}
			>
				<SelectValue placeholder="Select Exam" />
			</SelectTrigger>
			<SelectContent>
				{qtnBank.map((item) => (
					<SelectItem value={item.alt} key={item.title}>
						<div className="flex gap-2">
							<Image src={item.img} width={24} height={24} alt={item.alt} />
							{item.title}
						</div>
					</SelectItem>
				))}
			</SelectContent>
		</Select>
	);
};

export default SelectExam;

import Image from "next/image";
import React, { type FC } from "react";
import {
	Carousel,
	CarouselContent,
	CarouselItem,
	CarouselNext,
	CarouselPrevious,
} from "@components/carousel";
import type { StaticImport } from "next/dist/shared/lib/get-img-props";
import clsx from "clsx";

const FacultyCard: FC<{
	image: StaticImport | string;
	alt: string;
	variant: "default" | "pink";
}> = ({ image, alt, variant = "default" }) => {
	return (
		<div
			className={clsx(
				"p-2 rounded-[1.75rem] -z-10 shadow-lg my-4",
				variant === "pink" && "bg-primary-bright",
			)}
		>
			<div
				className={clsx(
					"w-full h-full rounded-2xl",
					variant === "default" && "bg-slate-100",
				)}
			>
				<div className="w-[340px] h-[290px] pr-10 relative flex items-center justify-center">
					<Image src={image} alt={alt} layout="fill" objectFit="cover" />
				</div>
			</div>
			<div className="px-5 py-8 bg-white rounded-2xl">
				<h3 className="font-semibold text-2xl">Alexa Shah</h3>
				<div className="font-semibold">MD, MPH (Master of Public Health)</div>
				<div>Chief Medical Educator in BGHU</div>
				<div>15+ years of teaching</div>
			</div>
		</div>
	);
};

const TeamSection = () => {
	return (
		<div className="py-10 bg-gradient-to-b from-[#fefeff] to-[#fbfafe]">
			<div className="px-5 md:px-32 mb-10 md:mb-16 text-gray">
				<h2 className="font-semibold text-4xl mb-5">
					Meet Our
					<span className="text-gradient pl-3">Dedicated Faculty Team</span>
				</h2>
				<div className="text-lg">
					These teachers members are committed to shaping the future of our
					students.
				</div>
			</div>
			<Carousel orientation="horizontal">
				<CarouselContent>
					{Array.from({ length: 5 }).map((_, index) => (
						<CarouselItem
							// biome-ignore lint/suspicious/noArrayIndexKey: This is a dummy component
							key={index}
							className="md:basis-1/3 md:pl-10 pl-10 pr-7"
						>
							<FacultyCard
								image={`/team/${index + 1}.png`}
								alt="team-member"
								variant={index === 2 ? "pink" : "default"}
							/>
						</CarouselItem>
					))}
				</CarouselContent>
				<div className="flex items-center justify-center gap-7 mt-7">
					<CarouselPrevious />
					<CarouselNext />
				</div>
			</Carousel>
			{/* <div className="flex py-10"></div> */}
		</div>
	);
};

export default TeamSection;

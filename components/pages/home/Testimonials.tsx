import React from "react";
import Image from "next/image";

const TestimonialCard = ({
	img,
	content,
	name,
	designation,
}: { img: string; content: string; name: string; designation: string }) => {
	return (
		<div className="p-2 rounded-3xl shadow-md border border-slate-100">
			<Image src={img} alt={name} width={360} height={360} />
			<div className="px-4 py-5">
				<div className="font-light w-[320px] line-clamp-3 overflow-hidden">
					{content}
				</div>
				<div className="text-2xl pt-6 pb-3">{name}</div>
				<div>{designation}</div>
			</div>
		</div>
	);
};

const Testimonials = () => {
	return (
		<div className="px-24 py-24 flex items-start justify-center gap-48 bg-gradient-to-b from-transparent to-[#f9f8fd]">
			<div className="w-[35vw] py-40 sticky top-0">
				<h2 className="text-4xl text-gray font-semibold mb-7">
					Trusted by{" "}
					<span className="text-gradient">Thousands of Nursing Students</span>
				</h2>
				<div className="text-slate-500 text-lg">
					Hear from our graduates: Stories from hospice and palliative care
					professionals who found great success with our course.
				</div>
			</div>
			<div className="flex flex-col gap-14">
				<TestimonialCard
					img="/testimonials/1.png"
					content={`“It's been more than 10 years since I finished nursing school and UWorld made it extra easy for me to prepare for the NCLEX NGN.”`}
					name="Maribeth M."
					designation="Passed Next Gen NCLEX"
				/>
				<TestimonialCard
					img="/testimonials/2.png"
					content={`“Helped me pass my NCLEX with just 85 questions. The lectures and videos are substantial. The questions and answers prepared me for the actual exam situation. I didn't use any other references. Just UWorld. Great job you guys.”`}
					name="Karessa S."
					designation="Passed Next Gen NCLEX"
				/>
			</div>
		</div>
	);
};

export default Testimonials;
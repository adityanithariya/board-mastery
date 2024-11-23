import React from "react";
import Header, { Pointer } from "@components/exam/header";

const Certifications = () => {
	return (
		<section id="related-certification">
			<Header>Related Certifications</Header>
			<div>
				The Hospice and Palliative Credentialing Center (HPCC) offers a range of
				certifications for healthcare professionals specializing in hospice and
				palliative care:
			</div>
			<ul className="list-disc pl-7 space-y-6 mt-5">
				<Pointer
					title="Advanced Certified Hospice and Palliative Nurse (ACHPN®)"
					content="For advanced practice registered nurses."
				/>
				<Pointer
					title="Certified Hospice and Palliative Nurse (CHPN®)"
					content="For registered nurses."
				/>
				<Pointer
					title="Certified Hospice and Palliative Pediatric Nurse (CHPPN®)"
					content="For registered nurses specializing in pediatric care."
					isAnchor
				/>
				<Pointer
					title="Certified Hospice and Palliative Licensed Nurse (CHPLN®)"
					content="For licensed practical/vocational nurses."
					isAnchor
				/>
				<Pointer
					title="Certified Hospice and Palliative Nursing Assistant (CHPNA®)"
					content="For nursing assistants."
					isAnchor
				/>
				<Pointer
					title="Certified Hospice and Palliative Care Administrator (CHPCA®) (retired exam but available for renewal)"
					content="For administrators in hospice and palliative care."
				/>
				<Pointer
					title="Certified in Perinatal Loss Care (CPLC®) (retired exam but available for renewal)"
					content="For professionals specializing in perinatal loss care."
				/>
			</ul>
		</section>
	);
};

export default Certifications;

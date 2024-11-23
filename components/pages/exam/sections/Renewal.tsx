import React from "react";
import Header, { Pointer } from "@components/exam/header";

const Renewal = () => {
	return (
		<section id="renewal">
			<Header>Renewal</Header>
			<div className="mb-5">
				The Certified Hospice and Palliative Nurse (CHPN®) certification is
				valid for four years. To renew your certification, you must complete the
				Hospice and Palliative Accrual for Recertification (HPAR) process, which
				includes:
			</div>
			<ul className="list-disc pl-7 space-y-6">
				<Pointer
					title="Practice Hours"
					content="Accumulate a minimum of 500 hours in hospice and palliative nursing practice within the prior 12 months or 1,000 hours within the prior 24 months. Practice hours for CHPN® renewal can be obtained through direct patient care, virtual and teleconference care, academic and research positions, administrative duties, consulting, case management, program development and coordination, and policymaking."
				/>
				<Pointer
					title="Professional Development"
					content="The HPAR component requires candidates to earn 100 points, which can be accumulated across multiple categories of professional development activities. While some categories have maximum allowable points, there is no limit on points earned through continuing education—each contact hour of continuing education equals one HPAR point. HPAR points can be earned by completing the BoardCerts CHPN® Question Bank, providing a convenient way to fulfill this requirement while reinforcing your knowledge."
				/>
				<Pointer
					title="Situational Judgment Exercise (SJE)"
					content="The Situational Judgment Exercise (SJE) is an open-book, online exercise that includes case-based scenarios designed to assess critical reasoning and clinical application skills. Completion of the SJE is a required part of the CHPN® renewal process."
				/>
			</ul>
			<div className="my-5">
				For the most up-to-date information on CHPN® renewal and the HPAR
				process, visit the official HPCC page:{" "}
				<a
					href="https://www.advancingexpertcare.org/hpcc/recertification/hpar/"
					className="text-anchor font-medium underline"
				>
					https://www.advancingexpertcare.org/hpcc/recertification/hpar
				</a>
			</div>
		</section>
	);
};

export default Renewal;

import React from "react";
import Header from "../header";

const References = () => {
	return (
		<section id="references-used-to-develop-exam">
			<Header>References Used to Develop Exam</Header>
			<div className="space-y-4">
				<div>
					At BoardCerts, we follow the CHPN® exam blueprint closely to ensure
					our practice questions are relevant and aligned with the content
					you'll encounter on the test. We develop our questions in coordination
					with this blueprint, taking into account the primary and secondary
					reference lists used to validate the official exam questions. This
					approach guarantees that our question bank is grounded in the same
					authoritative resources that underpin the CHPN® exam, providing you
					with an effective and thorough preparation experience.
				</div>
				<div>
					To see a complete list of these recommended references, view here:
				</div>
				<a href="#a" className="text-anchor font-medium block underline">
					CMS Medicare Hospice Center
				</a>
				<a href="#a" className="text-anchor font-medium block underline">
					Ferrell, BR., and Paice, J. (Eds.) (2019).
				</a>
			</div>
		</section>
	);
};

export default References;

import React from "react";
import logo from "@assets/logo.svg";
import Image from "next/image";
import PrimaryButton from "@components/ui/primary-btn";
import {
	FaFacebook,
	FaInstagram,
	FaTiktok,
	FaXTwitter,
	FaYoutube,
} from "react-icons/fa6";

const Footer = () => {
	return (
		<footer className="bg-[#f9f8fd] px-28 divide-y *:border-slate-200">
			<div className="flex items-start justify-between py-16">
				<div className="w-[320px] flex flex-col gap-4 items-start justify-center">
					<Image
						src={logo}
						priority
						className="mr-2 z-10"
						alt="logo"
						width={100}
						height={77}
					/>
					<div>
						Join us to make a meaningful impact in hospice and palliative care.
					</div>
					<button
						type="button"
						className="px-5 py-2 rounded-lg border border-secondary text-secondary font-semibold"
					>
						Become a Contributor
					</button>
				</div>
				<div className="flex gap-24">
					<div className="flex flex-col">
						<h3 className="text-gray-light/70 font-semibold text-sm mb-3">
							Product
						</h3>
						<div className="space-y-2">
							<div className="text-gray font-semibold">Overview</div>
							<div className="text-gray font-semibold">Features</div>
							<div className="text-gray font-semibold">Pricing</div>
						</div>
					</div>
					<div className="flex flex-col">
						<h3 className="text-gray-light/70 font-semibold text-sm mb-3">
							Resources
						</h3>
						<div className="space-y-2">
							<div className="text-gray font-semibold">Blog</div>
							<div className="text-gray font-semibold">Newsletter</div>
							<div className="text-gray font-semibold">Contact</div>
						</div>
					</div>
				</div>
				<div className="flex flex-col gap-4">
					<div className="text-gray-light/70 text-sm font-semibold">
						Stay up to date
					</div>
					<div className="flex gap-4">
						<input
							type="text"
							className="rounded-lg px-3 py-2 border border-slate-400"
							placeholder="Enter your email"
						/>
						<PrimaryButton>Subscribe</PrimaryButton>
					</div>
				</div>
			</div>
			<div className="py-8 flex items-center justify-between text-gray-light/70 font-medium">
				<div className="flex gap-7">
					<div>© Board Mastery. All rights reserved.</div>
					<div className="flex gap-4">
						<div>Terms</div>
						<div>Privacy</div>
						<div>Cookies</div>
					</div>
				</div>
				<div className="flex gap-6">
					<div>Follow us on:</div>
					<FaTiktok className="size-6 text-gray-light/50" />
					<FaYoutube className="size-6 text-gray-light/50" />
					<FaInstagram className="size-6 text-gray-light/50" />
					<FaXTwitter className="size-6 text-gray-light/50" />
					<FaFacebook className="size-6 text-gray-light/50" />
				</div>
			</div>
			<div className="py-8 text-xs text-gray-light/60">
				<p>
					The United States Medical Licensing Examination (USMLE ®) is a joint
					program of the Federation of State Medical Boards (FSMB ®) and
					National Board of Medical Examiners (NBME ®). ABIM ® is a registered
					trademark of the American Board of Internal Medicine. ABFM ® is a
					registered trademark of the American Board of Family Medicine.
					NCLEX-RN ® and NCLEX-PN ® are registered trademarks of the National
					Council of State Boards of Nursing, Inc (NCSBN ®). MCAT ® is a
					registered trademark of the Association of American Medical Colleges
					(AAMC). SAT ®, Advanced Placement ®, and AP ® are registered
					trademarks of the College Board, which are not affiliated with, and do
					not endorse, this product or site. PSAT/NMSQT® is a registered
					trademark of the College Board and the National Merit Scholarship
					Corporation, which are not affiliated with, and do not endorse, this
					product or site. ACT ® is a registered trademark of ACT, Inc. PANCE ®
					and PANRE ® are registered trademarks of the National Commission on
					Certification of Physician Assistants. NCCPA ® is a registered
					trademark of the National Commission on Certification of Physician
					Assistants. CFA Institute does not endorse, promote, or warrant the
					accuracy or quality of the products or services offered by UWorld LLC.
					CFA Institute, CFA® , and Chartered Financial Analyst ® are trademarks
					owned by CFA Institute. NCBE®, MBE®, MPRE®, MPT® and UBE® are
					trademarks of the National Conference of Bar Examiners. UWorld is
					neither endorsed by nor affiliated with NCBE. NAPLEX® and MPJE® are
					federally registered trademarks of the National Association of Boards
					of Pharmacy. UWorld LLC. and its services are neither affiliated with
					nor endorsed by the NABP. None of the trademark holders is affiliated
					with, and does not endorse, UWorld product/site. This site is
					protected by reCAPTCHA and the Google. Privacy Policy and Terms of
					Service apply.
				</p>
				<div className="mt-14 mb-4">© Board Mastery. All rights reserved.</div>
			</div>
		</footer>
	);
};

export default Footer;

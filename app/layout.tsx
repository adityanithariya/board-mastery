import type { Metadata } from "next";
import "./globals.css";
import ToastProvider from "@components/ToastProvider";
import { Lexend_Deca } from "next/font/google";
import Navbar from "@components/layout/navbar";
import Banner from "@components/layout/banner";

export const metadata: Metadata = {
	title: "Board Mastery",
	description: "Complete Guide for ACHPN Exam Success",
};

const lexend_Deca = Lexend_Deca();

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body
				className={`${lexend_Deca.className} antialiased`}
				suppressHydrationWarning
			>
				<ToastProvider>
					<div className="sticky top-0 w-[98.75dvw] z-[100]">
						<Banner />
						<Navbar />
					</div>
					{children}
				</ToastProvider>
			</body>
		</html>
	);
}

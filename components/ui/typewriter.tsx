"use client";

import React from "react";
import TypewriterComponent from "typewriter-effect";

const TypeWriter = () => {
	return (
		<TypewriterComponent
			options={{
				loop: true,
			}}
			onInit={(typewriter) => {
				typewriter
					.typeString("ACHPN Exam Success")
					.pauseFor(1000)
					.deleteAll()
					.typeString("NCHN Exam Success")
					.pauseFor(1000)
					.start();
			}}
		/>
	);
};

export default TypeWriter;

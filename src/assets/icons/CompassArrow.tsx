import React from "react";

export const CompassArrow = ({ deg }: { deg: number }) => {
	return (
		<svg
			className="compass-arrow"
			width="323"
			height="323"
			viewBox="0 0 323 323"
			fill="none"
			xmlns="http://www.w3.org/2000/svg"
			style={{ transform: `rotate(${deg}deg)` }}
		>
			<path
				d="M164.5 229V142.868V60H159.5V142.868V229L150 225.736L162 264L174 225.736L164.5 229Z"
				fill="url(#paint0_linear_208_11096)"
			/>
			<defs>
				<linearGradient
					id="paint0_linear_208_11096"
					x1="162"
					y1="60"
					x2="162"
					y2="264"
					gradientUnits="userSpaceOnUse"
				>
					<stop stopColor="white" stopOpacity="0" />
					<stop offset="0.105" stopColor="white" />
				</linearGradient>
			</defs>
		</svg>
	);
};

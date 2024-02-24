import React from "react";
import { ArrowForwardIcon } from "../../../../assets/icons/ArrowForwardIcon";
import "./arrowBtn.scss";
import { ArrowBackIcon } from "../../../../assets/icons/ArrowBackIcon";

type Direction = "left" | "right";

export const ArrowBtn = ({ direction }: { direction: Direction }) => {
	return (
		<button className={`arrow-btn ${direction}`}>
			{direction === "right" ? <ArrowForwardIcon /> : <ArrowBackIcon />}
		</button>
	);
};

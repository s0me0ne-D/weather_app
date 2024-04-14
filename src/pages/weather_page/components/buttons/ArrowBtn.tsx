import React, { useContext } from "react";
import { ArrowForwardIcon } from "../../../../assets/icons/ArrowForwardIcon";
import "./arrowBtn.scss";
import { ArrowBackIcon } from "../../../../assets/icons/ArrowBackIcon";
import { locationsContext } from "../../../../App";

type Direction = "left" | "right";
const BUTTONS_WIDTH = 110;

export const ArrowBtn = ({
	direction,
	setTranslate,
	counter,
	setCounter,
}: {
	direction: Direction;
	setTranslate: React.Dispatch<React.SetStateAction<number>>;
	counter: number;
	setCounter: React.Dispatch<React.SetStateAction<number>>;
}) => {
	const { locations } = useContext(locationsContext);
	const windowWidth = window.innerWidth;
	const onClick = () => {
		if (counter < locations.length - 1 && direction === "right") {
			setTranslate((prev) => prev - windowWidth + BUTTONS_WIDTH);
			setCounter((prev) => prev + 1);
		} else if (counter > 0 && direction === "left") {
			setTranslate((prev) => prev + windowWidth - BUTTONS_WIDTH);
			setCounter((prev) => prev - 1);
		}
	};
	return (
		<button className={`arrow-btn ${direction}`} onClick={() => onClick()}>
			{direction === "right" ? <ArrowForwardIcon /> : <ArrowBackIcon />}
		</button>
	);
};

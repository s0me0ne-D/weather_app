import React, { useContext } from "react";
import { ArrowForwardIcon } from "../../../../assets/icons/ArrowForwardIcon";
import "./arrowBtn.scss";
import { ArrowBackIcon } from "../../../../assets/icons/ArrowBackIcon";
import { locationsContext } from "../../../../App";

type Direction = "left" | "right";
interface ArrowBtnProps {
	direction: Direction;
	onClick: (translateValue: number, paginationValue: number) => void;
	counter: number;
}

const SUM_OF_BUTTONS_WIDTH = 110;

export const ArrowBtn = ({ direction, onClick, counter }: ArrowBtnProps) => {
	const { locations } = useContext(locationsContext);
	const windowWidth = window.innerWidth;
	const handleOnClick = () => {
		if (counter < locations.length - 1 && direction === "right") {
			onClick(-windowWidth + SUM_OF_BUTTONS_WIDTH, 1);
		} else if (counter > 0 && direction === "left") {
			onClick(windowWidth - SUM_OF_BUTTONS_WIDTH, -1);
		}
	};
	return (
		<button className={`arrow-btn ${direction}`} onClick={() => handleOnClick()}>
			{direction === "right" ? <ArrowForwardIcon /> : <ArrowBackIcon />}
		</button>
	);
};

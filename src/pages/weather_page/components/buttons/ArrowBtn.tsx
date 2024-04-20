import React, { useContext } from "react";
import { ArrowForwardIcon } from "../../../../assets/icons/ArrowForwardIcon";
import "./arrowBtn.scss";
import { ArrowBackIcon } from "../../../../assets/icons/ArrowBackIcon";
import { locationsContext } from "../../../../App";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../../../redux/store";
import { changeActiveLocationIndex } from "../../../../redux/activeLocationIndexSlice";

type Direction = "left" | "right";
interface ArrowBtnProps {
	direction: Direction;
}

export const ArrowBtn = ({ direction }: ArrowBtnProps) => {
	const { locations } = useContext(locationsContext);
	const { index } = useSelector((store: RootStore) => store.activeLocationIndexReducer);

	const dispatch = useDispatch();

	const handleOnClick = () => {
		if (index < locations.length - 1 && direction === "right") {
			dispatch(changeActiveLocationIndex(index + 1));
		} else if (index > 0 && direction === "left") {
			dispatch(changeActiveLocationIndex(index - 1));
		}
	};
	return (
		<button className={`arrow-btn ${direction}`} onClick={() => handleOnClick()}>
			{direction === "right" ? <ArrowForwardIcon /> : <ArrowBackIcon />}
		</button>
	);
};

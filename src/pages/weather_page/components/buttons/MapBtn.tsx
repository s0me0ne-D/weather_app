import React, { useState } from "react";
import { WorldMapIcon } from "../../../../assets/icons/WorldMapIcon";
import "./mapBtn.scss";

interface MapBtnProps {
	onClick: React.Dispatch<React.SetStateAction<boolean>>;
}

export const MapBtn = ({ onClick }: MapBtnProps) => {
	const [isActive, setIsActive] = useState<boolean>(false);
	const handleOnClick = () => {
		setIsActive((prev) => !prev);
		onClick((prev) => !prev);
	};
	return (
		<button className={`map-button button ${isActive && "active-btn"}`} onClick={handleOnClick}>
			<span>map</span>
			<WorldMapIcon />
		</button>
	);
};

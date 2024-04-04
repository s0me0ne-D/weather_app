import React, { useState } from "react";
import { WorldMapIcon } from "../../../../assets/icons/WorldMapIcon";
import "./mapBtn.scss";
export const MapBtn = ({
	setIsMap,
}: {
	setIsMap: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const [isActive, setIsActive] = useState<boolean>(false);
	const handleOnClick = () => {
		setIsActive((prev) => !prev);
		setIsMap((prev) => !prev);
	};
	return (
		<button className={`map-button button ${isActive && "active-btn"}`} onClick={handleOnClick}>
			<span>map</span>
			<WorldMapIcon />
		</button>
	);
};

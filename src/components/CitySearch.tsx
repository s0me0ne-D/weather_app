import React, { useContext, useState } from "react";
import { locationsContext } from "../App";
import "./citySearch.scss";
import { useDispatch } from "react-redux";
import { addLookingForLocation, showLocationExistPopup } from "../redux/popupSlice";

interface CitySearchProps {
	closeBurger?: React.Dispatch<React.SetStateAction<boolean>>;
	burgerState?: boolean;
}

export const CitySearch = ({ closeBurger, burgerState }: CitySearchProps) => {
	const [value, setValue] = useState<string>("");
	const { locations, setLocations } = useContext(locationsContext);
	const dispatch = useDispatch();
	const handleOnKeyDown = () => {
		if ((locations as Array<string>).includes(value)) {
			dispatch(showLocationExistPopup(true));
		} else if (value.length !== 0) {
			burgerState && closeBurger && closeBurger(false);
			dispatch(addLookingForLocation(value));
			setLocations((prev: Array<string>) => [...prev, value]);
		}
		setValue("");
	};
	return (
		<input
			className="city-search"
			type="text"
			value={value}
			onChange={(event) => setValue(event.target.value)}
			onKeyDown={(event) => event.key === "Enter" && handleOnKeyDown()}
		/>
	);
};

import React, { useContext, useState } from "react";
import { locationsContext } from "../App";
import "./citySearch.scss";
import { useDispatch } from "react-redux";
import { changeIsError, changeLocation, changeLocationExist } from "../redux/popupSlice";
import { maxLocationsError } from "./GeolocationSearch";
export const CitySearch = () => {
	const [value, setValue] = useState<string>("");
	const { locations, setLocations } = useContext(locationsContext);
	const dispatch = useDispatch();
	const handleOnKeyDown = () => {
		if (locations.length === 5) {
			dispatch(changeIsError(maxLocationsError));
		} else if ((locations as Array<string>).includes(value)) {
			dispatch(changeLocationExist(true));
		} else if (value.length !== 0) {
			dispatch(changeLocation(value));
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

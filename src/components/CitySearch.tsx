import React, { useContext, useState } from "react";
import { locationsContext } from "../App";
import "./citySearch.scss";
import { useDispatch } from "react-redux";
import { changeLocationExist } from "../redux/geolocationSearchSlice";
export const CitySearch = () => {
	const [value, setValue] = useState<string>("");
	const { locations, setLocations } = useContext(locationsContext);
	const dispatch = useDispatch();
	const handleOnKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
		if ((locations as Array<string>).includes(value)) {
			dispatch(changeLocationExist(true));
		} else if (value.length !== 0) {
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
			onKeyDown={(event) => event.key === "Enter" && handleOnKeyDown(event)}
		/>
	);
};

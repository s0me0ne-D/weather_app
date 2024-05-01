import React, { FormEvent, useContext, useState } from "react";
import { locationsContext } from "../App";
import "./citySearch.scss";
import { useDispatch } from "react-redux";
import { addLookingForLocation, showLocationExistPopup } from "../redux/popupSlice";
import { SearchIcon } from "../assets/icons/SearchIcon";

interface CitySearchProps {
	closeBurger?: React.Dispatch<React.SetStateAction<boolean>>;
	burgerState?: boolean;
}

export const CitySearch = ({ closeBurger, burgerState }: CitySearchProps) => {
	const [value, setValue] = useState<string>("");
	const { locations, setLocations } = useContext(locationsContext);
	const dispatch = useDispatch();
	const onSubmit = (event: FormEvent<HTMLFormElement>) => {
		const location = value.toLowerCase();
		if ((locations as Array<string>).includes(location)) {
			dispatch(showLocationExistPopup(true));
		} else if (value.length !== 0) {
			burgerState && closeBurger && closeBurger(false);
			dispatch(addLookingForLocation(value));
			setLocations((prev: Array<string>) => [...prev, location]);
		}
		setValue("");
		event.preventDefault();
		event.stopPropagation();
	};
	return (
		<form
			className="city-search"
			onSubmit={(event) => {
				onSubmit(event);
			}}
		>
			<input
				className="city-search_field"
				type="text"
				value={value}
				onChange={(event) => setValue(event.target.value)}
			/>
			<button type="submit" className="city-search_button">
				<SearchIcon />
			</button>
		</form>
	);
};

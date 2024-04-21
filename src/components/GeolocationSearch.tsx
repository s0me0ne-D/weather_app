import React, { useContext } from "react";
import { locationsContext } from "../App";
import "./geolocationSearch.scss";
import { LocationIcon } from "../assets/icons/LocationIcon";
import { useDispatch } from "react-redux";
import {
	changeIsError,
	changeIsLoading,
	changeLocation,
	changeLocationExist,
} from "../redux/popupSlice";
import { IError } from "../interfaces/geolocationSearch_interface";
import { ErrorMessages } from "../interfaces/errors_enums";

const navigatorError: IError = {
	isError: true,
	message: ErrorMessages.Navigator,
};

const cityNameError: IError = {
	isError: true,
	message: ErrorMessages.CityName,
};

export const GeolocationSearch = () => {
	const { locations, setLocations } = useContext(locationsContext);
	const dispatch = useDispatch();
	function handleLocationClick() {
		dispatch(changeIsLoading(true));
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(success, errorHandler);
		} else {
			dispatch(changeIsError(navigatorError));
		}
	}

	function success(position: any) {
		const latitude = position.coords.latitude;
		const longitude = position.coords.longitude;
		const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				const location = data.address.city;
				if (!(locations as Array<string>).includes(location)) {
					dispatch(changeIsLoading(false));
					dispatch(changeLocation(location));
					setLocations((prev: Array<string>) => [...prev, location]);
				} else if (location === null) {
					dispatch(changeIsError(navigatorError));
				} else {
					dispatch(changeLocationExist(true));
				}
			})

			.catch(() => {
				dispatch(changeIsError(cityNameError));
			});
	}
	function errorHandler() {
		dispatch(changeIsError(cityNameError));
	}

	return (
		<button className="geolocation-search button" onClick={handleLocationClick}>
			<span className="button_text">
				geol
				<span className="letter">
					<span className="letter_o">o</span>
					<div className="letter_icon">
						<LocationIcon />
					</div>
				</span>
				cation
			</span>
		</button>
	);
};

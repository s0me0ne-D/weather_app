import React, { useContext } from "react";
import { locationsContext } from "../App";
import "./geolocationSearch.scss";
import { LocationIcon } from "../assets/icons/LocationIcon";
import { useDispatch } from "react-redux";
import {
	changeIsError,
	changeIsLoading,
	changeLocationExist,
} from "../redux/geolocationSearchSlice";
export const GeolocationSearch = () => {
	const { locations, setLocations } = useContext(locationsContext);
	const dispatch = useDispatch();
	function handleLocationClick() {
		dispatch(changeIsLoading(true));
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(success, errorHandler);
		} else {
			dispatch(
				changeIsError({ error: true, message: "Geolocation not supported, please enter city name" })
			);
		}
	}

	function success(position: any) {
		const latitude = position.coords.latitude;
		const longitude = position.coords.longitude;
		const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => {
				if (!(locations as Array<any>).includes(data.address.city)) {
					dispatch(changeIsLoading(false));
					setLocations((prev: Array<string>) => [data.address.city, ...prev]);
				} else {
					dispatch(changeLocationExist(true));
				}
			})

			.catch(() => {
				dispatch(
					changeIsError({
						error: true,
						message: "Unable to retrieve your location, please enter city name",
					})
				);
			});
	}
	function errorHandler() {
		dispatch(
			changeIsError({
				error: true,
				message: "Unable to retrieve your location, please enter city name",
			})
		);
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

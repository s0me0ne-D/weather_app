import React, { useContext, useEffect } from "react";
import { locationsContext } from "../App";
import "./geolocationSearch.scss";
import { LocationIcon } from "../assets/icons/LocationIcon";
import { useDispatch } from "react-redux";
import { isError, isLoading } from "../redux/geolocationSearchSlice";
export const GeolocationSearch = () => {
	const { locations, setLocations } = useContext(locationsContext);
	const dispatch = useDispatch();
	function handleLocationClick() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(success, error);
		} else {
			dispatch(
				isError({ error: true, message: "Geolocation not supported, please enter city name" })
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
					setLocations((prev: Array<string>) => [...prev, data.address.city]);
				}
			})

			.catch((error) => {
				dispatch(
					isError({
						error: true,
						message: "Unable to retrieve your location, please enter city name",
					})
				);
			});
	}
	function error() {
		dispatch(
			isError({
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

import React, { useContext } from "react";
import { locationsContext } from "../App";
import "./geolocationSearch.scss";
import { LocationIcon } from "../assets/icons/LocationIcon";
export const GeolocationSearch = () => {
	const { locations, setLocations } = useContext(locationsContext);
	function handleLocationClick() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(success, error);
		} else {
			//ERROR MESSAGE:'Geolocation not supported, please enter city name'
			console.log("Geolocation not supported");
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
				//ERROR MESSAGE: 'Unable to retrieve your location, please enter city name'
			});
	}
	function error() {
		//ERROR MESSAGE: 'Unable to retrieve your location, please enter city name'
		console.log("Unable to retrieve your location");
	}

	return (
		<button className="geolocation-search" onClick={handleLocationClick}>
			geol
			<span className="letter">
				<span className="letter_o">o</span>
				<div className="letter_icon">
					<LocationIcon />
				</div>
			</span>
			cation
		</button>
	);
};

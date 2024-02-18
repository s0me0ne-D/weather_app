import React from "react";
import { CitySearch } from "../components/CitySearch";
import { GeolocationSearch } from "../components/GeolocationSearch";

export const SplashPage = () => {
	return (
		<div className="splash-page">
			<span className="splash-page_text">Enter your city</span>
			<CitySearch />
			<span>
				or
				<br />
				get the weather forecast using
			</span>
			<GeolocationSearch />
		</div>
	);
};

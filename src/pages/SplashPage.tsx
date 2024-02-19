import React from "react";
import { CitySearch } from "../components/CitySearch";
import { GeolocationSearch } from "../components/GeolocationSearch";
import "./splashPage.scss";
export const SplashPage = () => {
	return (
		<div className="splash-page">
			<span>Enter the name of your city</span>
			<CitySearch />
			<span>or</span>
			<span>get the weather forecast using</span>
			<GeolocationSearch />
		</div>
	);
};

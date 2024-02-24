import React, { useContext } from "react";
import { CitySearch } from "../../components/CitySearch";
import { GeolocationSearch } from "../../components/GeolocationSearch";
import { ForecastPage } from "./ForecastPage";
import { locationsContext } from "../../App";
import "./weatherPage.scss";
import { MapBtn } from "./components/buttons/MapBtn";
import { ArrowBtn } from "./components/buttons/ArrowBtn";

export const WeatherPage = () => {
	const { locations } = useContext(locationsContext);
	return (
		<div className="weather">
			<header className="weather_header">
				<CitySearch />
				<GeolocationSearch />
				<MapBtn />
			</header>
			<ArrowBtn direction="left" />
			<main className="weather_forecast">
				{locations.map((city, index) => (
					<ForecastPage city={city} key={index} />
				))}
			</main>
			<ArrowBtn direction="right" />
		</div>
	);
};

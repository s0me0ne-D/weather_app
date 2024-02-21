import React, { useContext } from "react";
import { CitySearch } from "../../components/CitySearch";
import { GeolocationSearch } from "../../components/GeolocationSearch";
import { ForecastPage } from "./ForecastPage";
import { locationsContext } from "../../App";

export const WeatherPage = () => {
	const { locations } = useContext(locationsContext);
	return (
		<div>
			<div>
				<CitySearch />
				<GeolocationSearch />
			</div>
			{locations.map((city, index) => (
				<ForecastPage city={city} key={index} />
			))}
		</div>
	);
};

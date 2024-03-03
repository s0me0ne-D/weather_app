import React, { useContext, useState } from "react";
import { CitySearch } from "../../components/CitySearch";
import { GeolocationSearch } from "../../components/GeolocationSearch";
import { ForecastPage } from "./ForecastPage";
import { locationsContext } from "../../App";
import "./weatherPage.scss";
import { MapBtn } from "./components/buttons/MapBtn";
import { ArrowBtn } from "./components/buttons/ArrowBtn";
import { Map } from "./components/map/Map";

export const WeatherPage = () => {
	const { locations } = useContext(locationsContext);
	const [isMap, setIsMap] = useState<boolean>(false);
	return (
		<div className="weather">
			<header className="weather_header">
				<CitySearch />
				<GeolocationSearch />
				<MapBtn setIsMap={setIsMap} />
			</header>
			<main className="main">
				<ArrowBtn direction="left" />
				<div className="weather_forecast">
					{locations.map((city, index) => (
						<ForecastPage city={city} key={index} />
					))}
				</div>
				<ArrowBtn direction="right" />
				{isMap && <Map />}
			</main>
		</div>
	);
};

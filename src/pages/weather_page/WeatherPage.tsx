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
	const [translate, setTranslate] = useState(0);
	const [paginationCounter, setPaginationCounter] = useState(0);
	return (
		<div className="weather">
			<header className="weather_header">
				<CitySearch />
				<GeolocationSearch />
				<MapBtn setIsMap={setIsMap} />
			</header>
			<main className="main">
				<ArrowBtn
					direction="left"
					setTranslate={setTranslate}
					counter={paginationCounter}
					setCounter={setPaginationCounter}
				/>
				<div className="weather_container">
					<div className="weather_forecast" style={{ transform: `translateX(${translate}px)` }}>
						{locations.map((city, index) => (
							<ForecastPage city={city} key={index} />
						))}
					</div>
				</div>
				<ArrowBtn
					direction="right"
					setTranslate={setTranslate}
					counter={paginationCounter}
					setCounter={setPaginationCounter}
				/>
				{isMap && <Map />}

				<div className="pagination-dots"></div>
			</main>
		</div>
	);
};

import React, { useContext, useState } from "react";
import { CitySearch } from "../../components/CitySearch";
import { GeolocationSearch } from "../../components/GeolocationSearch";
import { ForecastPage } from "./ForecastPage";
import { locationsContext } from "../../App";
import "./weatherPage.scss";
import { MapBtn } from "./components/buttons/MapBtn";
import { ArrowBtn } from "./components/buttons/ArrowBtn";
import { Map } from "./components/map/Map";
import { useSelector } from "react-redux";
import { RootStore } from "../../redux/store";
import { Popup } from "../../components/Popup";
import { Header } from "./components/header/Header";

export const WeatherPage = () => {
	const { locations } = useContext(locationsContext);
	const [isMap, setIsMap] = useState<boolean>(false);
	const [translate, setTranslate] = useState(0);
	const [paginationCounter, setPaginationCounter] = useState(0);
	const { error, isLoading, locationExist, isSuccess } = useSelector(
		(store: RootStore) => store.popupReducer
	);

	return (
		<div className="weather">
			<Header onClick={setIsMap} />
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
				<div className="pagination-dots">
					{locations.map((location, index) => (
						<div
							className={`pagination-dots_dot ${index === paginationCounter ? "active-dot" : ""}`}
							key={location}
						></div>
					))}
				</div>
			</main>
			{error.isError || isLoading || locationExist || isSuccess ? <Popup /> : null}
		</div>
	);
};

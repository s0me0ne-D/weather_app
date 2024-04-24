import React, { useContext } from "react";
import { ArrowBtn } from "../components/buttons/ArrowBtn";
import { locationsContext } from "../../../App";
import { ForecastPage } from "./ForecastPage";
import { MapPage } from "../components/map/MapPage";
import { useSelector } from "react-redux";
import { RootStore } from "../../../redux/store";
import "./main.scss";

export const Main = ({ isMap }: { isMap: boolean }) => {
	const { locations } = useContext(locationsContext);
	const { index: activeIndex } = useSelector(
		(store: RootStore) => store.activeLocationIndexReducer
	);

	return (
		<main className="main">
			{isMap && <MapPage />}
			<ArrowBtn direction="left" />
			<div className="weather_container">
				<div className="weather_forecast">
					{locations.map((city, index) => (
						<ForecastPage city={city} key={index} />
					))}
				</div>
			</div>
			<ArrowBtn direction="right" />

			<div className="pagination-dots">
				{locations.map((location, index) => (
					<div
						className={`pagination-dots_dot ${index === activeIndex ? "active-dot" : ""}`}
						key={location}
					></div>
				))}
			</div>
		</main>
	);
};

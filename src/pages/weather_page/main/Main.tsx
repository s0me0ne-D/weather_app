import React, { useContext, useState } from "react";
import { ArrowBtn } from "../components/buttons/ArrowBtn";
import { locationsContext } from "../../../App";
import { ForecastPage } from "../ForecastPage";
import { Map } from "../components/map/Map";

export const Main = ({ isMap }: { isMap: boolean }) => {
	const { locations } = useContext(locationsContext);
	const [translate, setTranslate] = useState(0);
	const [paginationCounter, setPaginationCounter] = useState(0);

	return (
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
	);
};

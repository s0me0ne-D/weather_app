import React from "react";
import "./map.scss";
import { World } from "../../../../assets/icons/World";
import { useSelector } from "react-redux";
import { RootStore } from "../../../../redux/store";

export const Map = () => {
	const forecasts = useSelector((state: RootStore) => state.forecastsReducer);
	const mapLatitude = 48.3 + forecasts[0].longitude / 180;
	console.log(mapLatitude);
	console.log(forecasts[0]);

	return (
		<div className="map">
			<div className="map_container">
				<World />
				<div className="map_location" style={{ left: `${mapLatitude}%` }}></div>
			</div>
		</div>
	);
};

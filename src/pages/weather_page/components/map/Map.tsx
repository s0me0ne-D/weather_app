import React, { useEffect, useState } from "react";
import "./map.scss";
import { World } from "../../../../assets/icons/World";
import { useSelector } from "react-redux";
import { RootStore } from "../../../../redux/store";
import { BlankMapWorld } from "../../../../assets/icons/BlankMapWorld";
import { WorldMap } from "../../../../assets/icons/WorldMap";

export const Map = () => {
	const forecasts = useSelector((state: RootStore) => state.forecastsReducer);
	const [latitide, setLatitude] = useState(0);
	const [longitude, setLongitude] = useState(0);
	useEffect(() => {
		setLatitude(50 - (forecasts[0].latitude * 50) / 90);
		setLongitude(50 + (forecasts[0].longitude * 50) / 180);
	}, [forecasts]);
	console.log(forecasts);
	return (
		<div className="map">
			<div className="map_container">
				<WorldMap />
				<div className="center" style={{ top: `${latitide}%`, left: `${longitude}%` }}></div>
			</div>
		</div>
	);
};

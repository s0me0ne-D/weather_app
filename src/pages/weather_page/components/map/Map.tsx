import React, { useEffect, useState } from "react";
import "./map.scss";
import { WorldMap } from "../../../../assets/icons/WorldMap";
import { useSelector } from "react-redux";
import { RootStore } from "../../../../redux/store";
import { MapLocation } from "./MapLocation";

export const Map = () => {
	const forecasts = useSelector((state: RootStore) => state.forecastsReducer);
	return (
		<div className="map">
			<div className="map_container">
				<WorldMap />
				{forecasts.map((location) => (
					<MapLocation key={location.address} location={location} />
				))}
			</div>
		</div>
	);
};

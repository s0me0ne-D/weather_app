import React, { useState } from "react";
import "./map.scss";
import { WorldMap } from "../../../../assets/icons/WorldMap";
import { useSelector } from "react-redux";
import { RootStore } from "../../../../redux/store";
import { MapLocation } from "./map_components/MapLocation";
import { MapAddress } from "./map_components/MapAddress";

export const Map = () => {
	const forecasts = useSelector((state: RootStore) => state.forecastsReducer);
	const [isActiveLocation, setIsActiveLocation] = useState<number | undefined>(undefined);
	console.log(isActiveLocation);
	return (
		<div className="map">
			<div className="map_container">
				<WorldMap />
				{forecasts.map((location, index) => (
					<MapLocation
						key={location.address}
						location={location}
						index={index}
						isActiveLocation={isActiveLocation}
						setIsActiveLocation={setIsActiveLocation}
					/>
				))}
			</div>
			<div className="map_location">
				{forecasts.map((location, index) => (
					<MapAddress
						key={location.address}
						location={location}
						index={index}
						isActiveLocation={isActiveLocation}
						setIsActiveLocation={setIsActiveLocation}
					/>
				))}
			</div>
		</div>
	);
};

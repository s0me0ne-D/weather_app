import React, { useContext, useState } from "react";
import "./map.scss";
import { WorldMap } from "../../../../assets/icons/WorldMap";
import { MapLocation } from "./map_components/MapLocation";
import { MapAddress } from "./map_components/MapAddress";
import { locationsContext } from "../../../../App";

export const Map = () => {
	const [isActiveLocation, setIsActiveLocation] = useState<number | undefined>(undefined);
	const { locations } = useContext(locationsContext);
	return (
		<div className="map">
			<div className="map_container">
				<WorldMap />
				{locations.map((location, index) => (
					<MapLocation
						key={location}
						location={location}
						index={index}
						isActiveLocation={isActiveLocation}
						setIsActiveLocation={setIsActiveLocation}
					/>
				))}
			</div>
			<div className="map_location">
				{locations.map((location, index) => (
					<MapAddress
						key={location}
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

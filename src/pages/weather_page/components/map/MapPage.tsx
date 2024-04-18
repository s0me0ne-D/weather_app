import "./mapPage.scss";
import "leaflet/dist/leaflet.css";
import { Map } from "./map_components/Map";
import { Locations } from "./map_components/locations/Locations";
import { useState } from "react";

export const MapPage = () => {
	return (
		<div className="map-component">
			<Locations />
			<Map />
		</div>
	);
};

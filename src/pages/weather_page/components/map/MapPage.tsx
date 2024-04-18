import "./mapPage.scss";
import "leaflet/dist/leaflet.css";
import { Map } from "./map_components/Map";
import { Locations } from "./map_components/locations/Locations";

export const MapPage = ({ currentLocationIndex }: { currentLocationIndex: number }) => {
	return (
		<div className="map-component">
			<Locations />
			<Map currentLocationIndex={currentLocationIndex} />
		</div>
	);
};

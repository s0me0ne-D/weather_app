import "./mapPage.scss";
import "leaflet/dist/leaflet.css";
import { Map } from "./map_components/Map";

export const MapPage = ({ currentLocationIndex }: { currentLocationIndex: number }) => {
	return (
		<div className="map-component">
			<Map currentLocationIndex={currentLocationIndex} />
		</div>
	);
};

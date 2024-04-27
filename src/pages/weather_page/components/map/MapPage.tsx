import "./mapPage.scss";
import "leaflet/dist/leaflet.css";
import { Map } from "./map_components/Map";
import { Locations } from "./map_components/locations/Locations";
import { useWindowWidth } from "../../../../hooks/useWindowWidth";
import { useMemo } from "react";
import { MobileLocations } from "./map_components/locations/Mobile_locations/MobileLocations";

export const MapPage = () => {
	const windowWidth = useWindowWidth();
	const isMobile = useMemo(() => (windowWidth <= 700 ? true : false), [windowWidth]);

	return (
		<div className="map-component">
			{isMobile ? <MobileLocations /> : <Locations />}
			<Map />
		</div>
	);
};

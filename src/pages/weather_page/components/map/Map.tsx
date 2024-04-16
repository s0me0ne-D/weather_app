import React, { useContext, useEffect, useState } from "react";
import "./map.scss";
import { locationsContext } from "../../../../App";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import { useGetForecastByCityQuery } from "../../../../redux/api";
import "leaflet/dist/leaflet.css";
import { Icon, LatLngExpression } from "leaflet";
import marker from "../../../../assets/icons/marker.png";
import MarkerClusterGroup from "react-leaflet-cluster";

const DARK_MAP = "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png";

function LocationMarker({ location }: { location: string }) {
	const { data } = useGetForecastByCityQuery(location);
	const [position, setPosition] = useState<LatLngExpression>({ lat: 51.505, lng: -0.09 });
	useEffect(() => {
		data && setPosition({ lat: data.latitude, lng: data.longitude });
	}, [data]);

	const markerIcon = new Icon({
		iconUrl: marker,
		iconSize: [38, 38],
	});

	return position === null ? null : (
		<Marker position={position} icon={markerIcon}>
			<Popup>{data?.resolvedAddress}</Popup>
		</Marker>
	);
}

export const Map = () => {
	const [isActiveLocation, setIsActiveLocation] = useState<number | undefined>(undefined);
	const { locations } = useContext(locationsContext);

	return (
		<div className="map-component">
			<MapContainer center={[51.505, -0.09]} zoom={7}>
				<TileLayer
					attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
					url={DARK_MAP}
				/>
				<MarkerClusterGroup>
					{locations.map((location) => (
						<LocationMarker location={location} />
					))}
				</MarkerClusterGroup>
			</MapContainer>{" "}
		</div>
	);
};

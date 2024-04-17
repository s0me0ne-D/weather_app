import React, { useContext } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useGetForecastByCityQuery } from "../../../../../redux/api";
import { locationsContext } from "../../../../../App";
import { LocationMarker } from "./LocationMarker";
import "./map.scss";

const DARK_MAP = "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png";
const DAY_MAP = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

export const Map = ({ currentLocationIndex }: { currentLocationIndex: number }) => {
	const { locations } = useContext(locationsContext);
	const { data } = useGetForecastByCityQuery(locations[currentLocationIndex]);

	return data ? (
		<MapContainer center={[data?.latitude, data?.longitude]} zoom={7} minZoom={3}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url={DAY_MAP}
			/>
			<MarkerClusterGroup>
				{locations.map((location) => (
					<LocationMarker location={location} />
				))}
			</MarkerClusterGroup>
		</MapContainer>
	) : null;
};

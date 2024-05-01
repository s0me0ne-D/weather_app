import React, { useContext } from "react";
import { MapContainer, TileLayer } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useGetForecastByCityQuery } from "../../../../../redux/api";
import { locationsContext } from "../../../../../App";
import { LocationMarker } from "./LocationMarker";
import "./map.scss";
import { useSelector } from "react-redux";
import { RootStore } from "../../../../../redux/store";
import { ResetCenterView } from "./locations/ResetCenterView";

const MAP_URL = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

export const Map = () => {
	const { locations } = useContext(locationsContext);
	const { index: activeIndex } = useSelector(
		(store: RootStore) => store.activeLocationIndexReducer
	);
	const { data } = useGetForecastByCityQuery(locations[activeIndex]);

	return data ? (
		<MapContainer center={[data?.latitude, data?.longitude]} zoom={10} minZoom={3}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url={MAP_URL}
			/>
			<MarkerClusterGroup>
				{locations.map((location, index) => (
					<LocationMarker location={location} key={location} index={index} />
				))}
			</MarkerClusterGroup>
			<ResetCenterView />
		</MapContainer>
	) : null;
};

import React, { useContext, useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, useMap } from "react-leaflet";
import MarkerClusterGroup from "react-leaflet-cluster";
import { useGetForecastByCityQuery } from "../../../../../redux/api";
import { locationsContext } from "../../../../../App";
import { LocationMarker } from "./LocationMarker";
import "./map.scss";
import { useSelector } from "react-redux";
import { RootStore } from "../../../../../redux/store";
import { ResetCenterView } from "./locations/ResetCenterView";

const DARK_MAP = "https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png";
const DAY_MAP = "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png";

export const Map = () => {
	const { locations } = useContext(locationsContext);
	const { index } = useSelector((store: RootStore) => store.activeLocationIndexReducer);
	const { data } = useGetForecastByCityQuery(locations[index]);

	return data ? (
		<MapContainer center={[data?.latitude, data?.longitude]} zoom={10} minZoom={3}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url={DAY_MAP}
			/>
			<MarkerClusterGroup>
				{locations.map((location) => (
					<LocationMarker location={location} key={location} index={index} />
				))}
			</MarkerClusterGroup>
			<ResetCenterView />
		</MapContainer>
	) : null;
};

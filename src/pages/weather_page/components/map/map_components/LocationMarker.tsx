import React, { useEffect, useState } from "react";
import { useGetForecastByCityQuery } from "../../../../../redux/api";
import { Icon, LatLngExpression } from "leaflet";
import locationMarker from "../../../../../assets/icons/locationMarker.svg";
import { Marker, Popup } from "react-leaflet";

export const LocationMarker = ({ location }: { location: string }) => {
	const { data } = useGetForecastByCityQuery(location);
	const [position, setPosition] = useState<LatLngExpression>({ lat: 51.505, lng: -0.09 });
	useEffect(() => {
		data && setPosition({ lat: data.latitude, lng: data.longitude });
	}, [data]);

	const markerIcon = new Icon({
		iconUrl: locationMarker,
		iconSize: [30, 30],
		iconAnchor: [15, 30],
		popupAnchor: [0, -28],
	});

	return position === null ? null : (
		<Marker position={position} icon={markerIcon}>
			<Popup>{data?.resolvedAddress}</Popup>
		</Marker>
	);
};

import React, { useEffect, useState } from "react";
import { IWeather } from "../../../../../interfaces/weather_interface";
import "./mapLocation.scss";
import { useGetForecastByCityQuery } from "../../../../../redux/api";

export const MapLocation = ({
	location,
	index,
	setIsActiveLocation,
	isActiveLocation,
}: {
	location: string;
	index: number;
	setIsActiveLocation: React.Dispatch<React.SetStateAction<number | undefined>>;
	isActiveLocation: number | undefined;
}) => {
	const { data } = useGetForecastByCityQuery(location);
	console.log(data);
	const [latitide, setLatitude] = useState(0);
	const [longitude, setLongitude] = useState(0);
	useEffect(() => {
		if (data) {
			setLatitude(50 - (data.latitude * 50) / 90);
			setLongitude(50 + (data.longitude * 50) / 180);
		}
	}, [data]);

	return (
		<div
			className={`location ${isActiveLocation === index ? "isActiveLocation" : ""}`}
			style={{ top: `${latitide}%`, left: `${longitude}%` }}
			title={data?.resolvedAddress}
		>
			<div
				className="location_marker"
				onClick={() => {
					setIsActiveLocation((prev) => (prev !== undefined && index === prev ? undefined : index));
				}}
			></div>
			{isActiveLocation === index && (
				<div className={`location_pin`} onClick={() => setIsActiveLocation(undefined)}></div>
			)}
		</div>
	);
};

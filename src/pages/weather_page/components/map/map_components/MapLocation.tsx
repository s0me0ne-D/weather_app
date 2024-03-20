import React, { useEffect, useState } from "react";
import { IWeather } from "../../../../../interfaces/weather_interface";
import "./mapLocation.scss";

export const MapLocation = ({
	location,
	index,
	setIsActiveLocation,
	isActiveLocation,
}: {
	location: IWeather;
	index: number;
	setIsActiveLocation: React.Dispatch<React.SetStateAction<number | undefined>>;
	isActiveLocation: number | undefined;
}) => {
	console.log(location);
	const [latitide, setLatitude] = useState(0);
	const [longitude, setLongitude] = useState(0);
	useEffect(() => {
		setLatitude(50 - (location.latitude * 50) / 90);
		setLongitude(50 + (location.longitude * 50) / 180);
	}, [location]);

	return (
		<div className="location" style={{ top: `${latitide}%`, left: `${longitude}%` }}>
			<div
				className={`location_marker ${isActiveLocation === index ? "isActiveLocation" : ""}`}
				onClick={() => {
					setIsActiveLocation((prev) => (prev !== undefined ? undefined : index));
				}}
			></div>
			{isActiveLocation === index && (
				<div className={`location_pin`} onClick={() => setIsActiveLocation(undefined)}></div>
			)}
		</div>
	);
};

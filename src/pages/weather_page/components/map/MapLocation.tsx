import React, { useEffect, useState } from "react";
import { IWeather } from "../../../../interfaces/weather_interface";
import "./mapLocation.scss";

export const MapLocation = ({ location }: { location: IWeather }) => {
	const [latitide, setLatitude] = useState(0);
	const [longitude, setLongitude] = useState(0);
	useEffect(() => {
		setLatitude(50 - (location.latitude * 50) / 90);
		setLongitude(50 + (location.longitude * 50) / 180);
	}, [location]);

	return (
		<div className="location">
			<div className="location_marker" style={{ top: `${latitide}%`, left: `${longitude}%` }}></div>
		</div>
	);
};

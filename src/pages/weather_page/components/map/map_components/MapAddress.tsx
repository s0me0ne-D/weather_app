import React from "react";
import { IIconType, IWeather } from "../../../../../interfaces/weather_interface";
import { addressHandler } from "../../../../../utils/addressHandler";
import "./mapAdress.scss";
import { WeatherIcon } from "../../WeatherIcon";
import { useGetForecastByCityQuery } from "../../../../../redux/api";

export const MapAddress = ({
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
	const { cityName, country } = addressHandler(data?.resolvedAddress ?? "");
	return data ? (
		<div className={`map-address ${isActiveLocation === index ? "isActiveAddress" : ""}`}>
			<div className="map-address_description">
				<div className="map-address_description_location-address">
					<span>{cityName}</span>,<span>{country}</span>
				</div>
				<div className="map-address_description_forecast">
					<div className="map-address_description_forecast_temp">
						{Math.floor(data?.currentConditions.temp)}
						<span>°C</span>
					</div>
					<div className="map-address_description_forecast_icon">
						<WeatherIcon condition={data.currentConditions.icon as IIconType} />
					</div>
				</div>
			</div>
			<div
				className={`map-address_border ${isActiveLocation === index ? "isActiveBorder" : ""}`}
				onClick={() => {
					setIsActiveLocation((prev) => (prev !== undefined && index === prev ? undefined : index));
				}}
			></div>
		</div>
	) : null;
};

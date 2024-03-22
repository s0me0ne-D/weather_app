import React from "react";
import { IIconType, IWeather } from "../../../../../interfaces/weather_interface";
import { addressHandler } from "../../../../../utils/addressHandler";
import { CurrentConditionIcon } from "../../current_condition_icon/CurrentConditionIcon";
import "./mapAdress.scss";
import { WeatherIcon } from "../../WeatherIcon";

export const MapAddress = ({ location }: { location: IWeather }) => {
	const { cityName, country } = addressHandler(location.resolvedAddress);
	return (
		<div className="map-address">
			<div className="map-address_description">
				<div className="map-address_description_location-address">
					<span>{cityName}</span>,<span>{country}</span>
				</div>
				<div className="map-address_description_forecast">
					<div className="map-address_description_forecast_temp">
						{location.currentConditions.temp}
						<span>°C</span>
					</div>
					<div className="map-address_description_forecast_icon">
						<WeatherIcon condition={location.currentConditions.icon as IIconType} />
					</div>
				</div>
			</div>
			<div className="map-address_border"></div>
		</div>
	);
};

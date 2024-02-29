import React from "react";
import { Day, IIconType } from "../../../../interfaces/weather_interface";
import { WeatherIcon } from "../WeatherIcon";
import { conditionHandler } from "../../../../utils/conditionHandler";

export const DayForecast = ({ forecast }: { forecast: Day }) => {
	const date = forecast.datetime.split("-").splice(1, 2).reverse().join("/");
	console.log(date);
	return (
		<div className="weekly_day">
			<span>{date}</span>
			<div className="weekly_day_description">
				{WeatherIcon(forecast.icon as IIconType)}
				<span>{conditionHandler(forecast.icon as IIconType)}</span>
			</div>
			<div>
				{forecast.temp}
				<span>°C</span>
			</div>
		</div>
	);
};

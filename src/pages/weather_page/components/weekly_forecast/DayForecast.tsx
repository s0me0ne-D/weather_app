import React from "react";
import { Day, IIconType } from "../../../../interfaces/weather_interface";
import { conditionHandler } from "../../../../utils/conditionHandler";
import { WeatherIcon } from "../WeatherIcon";

export const DayForecast = ({
	forecast,
	index,
	setPopupForecastIndex,
	setIsHourslyForecastForDate,
}: {
	forecast: Day;
	index: number;
	setPopupForecastIndex: React.Dispatch<React.SetStateAction<number>>;
	setIsHourslyForecastForDate: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const date = forecast.datetime.split("-").splice(1, 2).reverse().join("/");
	return (
		<div
			className="weekly_day"
			onClick={() => {
				setPopupForecastIndex(index);
				setIsHourslyForecastForDate(true);
			}}
		>
			<span className="index">{date}</span>
			<div className="weekly_day_description index">
				<WeatherIcon condition={forecast.icon as IIconType} />
				<span>{conditionHandler(forecast.icon as IIconType)}</span>
			</div>
			<div className="index">
				{Math.floor(forecast.temp)}
				<span>°C</span>
			</div>
		</div>
	);
};

import React from "react";
import { Day, IIconType } from "../../../../interfaces/weather_interface";
import { conditionHandler } from "../../../../utils/conditionHandler";
import { WeatherIcon } from "../WeatherIcon";

const handleDate = (date: string) => {
	return date.split("-").splice(1, 2).reverse().join("/");
};

interface DayForecastProps {
	forecast: Day;
	index: number;
	setPopupForecastIndex: React.Dispatch<React.SetStateAction<number>>;
	setIsHourslyForecastForDate: React.Dispatch<React.SetStateAction<boolean>>;
}

export const DayForecast = ({
	forecast,
	index,
	setPopupForecastIndex,
	setIsHourslyForecastForDate,
}: DayForecastProps) => {
	const date = handleDate(forecast.datetime);
	const currentCondition = conditionHandler(forecast.icon as IIconType);
	const handleOnClick = () => {
		setPopupForecastIndex(index);
		setIsHourslyForecastForDate(true);
	};
	return (
		<div className="weekly_day" onClick={handleOnClick}>
			<span className="index">{date}</span>
			<div className="weekly_day_description index">
				<WeatherIcon condition={forecast.icon as IIconType} />
				<span>{currentCondition}</span>
			</div>
			<div className="index">
				{Math.floor(forecast.temp)}
				<span>°C</span>
			</div>
		</div>
	);
};

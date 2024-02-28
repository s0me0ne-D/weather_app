import React from "react";
import "./weeklyForecast.scss";
import { Day } from "../../../../interfaces/weather_interface";
import { DayForecast } from "./DayForecast";

export const WeeklyForecast = ({ weekly }: { weekly: Array<Day> }) => {
	return (
		<div className="weekly forecast-element">
			{weekly.map(
				(dayForecast, index) => index > 0 && <DayForecast key={index} forecast={dayForecast} />
			)}
		</div>
	);
};

import React, { useState } from "react";
import "./weeklyForecast.scss";
import { Day } from "../../../../interfaces/weather_interface";
import { DayForecast } from "./DayForecast";
import { HourlyForecast } from "../hourlyFocrecast/HourlyForecast";

export const WeeklyForecast = ({ weekly }: { weekly: Array<Day> }) => {
	const [isHourlyForecastForDate, setIsHourslyForecastForDate] = useState<boolean>(false);
	const [popupForecastIndex, setPopupForecastIndex] = useState(99);
	return (
		<div className="weekly forecast-element">
			{weekly.map(
				(dayForecast, index) =>
					index > 0 && (
						<DayForecast
							key={index}
							forecast={dayForecast}
							index={index}
							setPopupForecastIndex={setPopupForecastIndex}
							setIsHourslyForecastForDate={setIsHourslyForecastForDate}
						/>
					)
			)}
			{isHourlyForecastForDate && (
				<HourlyForecast
					hourly={weekly[popupForecastIndex].hours}
					isPopup={isHourlyForecastForDate}
					date={weekly[popupForecastIndex].datetime}
					setIsPopup={setIsHourslyForecastForDate}
				/>
			)}
		</div>
	);
};

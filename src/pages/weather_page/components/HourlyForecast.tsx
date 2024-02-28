import React, { useEffect, useLayoutEffect, useState } from "react";
import "./hourlyForecast.scss";
import { Hour, IIconType } from "../../../interfaces/weather_interface";
import { WeatherIcon } from "./WeatherIcon";

export const HourlyForecast = ({ hourly }: { hourly: Array<Hour> }) => {
	const [dataTime, setDataTime] = useState<Array<string>>([]);
	const [isHoverColumnIndex, setIsHoverColumnIndex] = useState(99);
	const [isCurrentTimeIndex, setIsCurrentTimeIndex] = useState(99);
	const currentTime = new Date().getHours();
	const mouseOn = (index: number) => {
		setIsHoverColumnIndex(index);
	};
	const mouseLeave = () => {
		setIsHoverColumnIndex(99);
	};

	useLayoutEffect(() => {
		const newTime: Array<string> = [];
		hourly.forEach((el, index) => {
			const time = el.datetime.split(":");
			+time[0] === currentTime && setIsCurrentTimeIndex(index);
			newTime.push(time.splice(0, 2).join(":"));
		});
		setDataTime(newTime);
	}, []);
	return (
		<div className="hourly forecast-element">
			<table className="hourly_forecast">
				<tbody>
					<tr>
						<th></th>
						{dataTime.map((time, index) => (
							<td
								key={time}
								className={`hourly_forecast_time bb ${
									isCurrentTimeIndex === index && "currentTime"
								} ${isHoverColumnIndex === index && "isHover"}`}
								onMouseEnter={() => mouseOn(index)}
								onMouseLeave={mouseLeave}
							>
								{time}
							</td>
						))}
					</tr>
					<tr>
						<th></th>
						{hourly.map((hour, index) => (
							<td
								className={`bb ${isCurrentTimeIndex === index && "currentTime"} ${
									isHoverColumnIndex === index ? "isHover" : ""
								}`}
								key={index}
								onMouseEnter={() => mouseOn(index)}
								onMouseLeave={mouseLeave}
							>
								{WeatherIcon(hour.icon as IIconType)}
							</td>
						))}
					</tr>
					<tr>
						<th className="hourly_forecast_description">Temperature</th>
						{hourly.map((hour, index) => (
							<td
								className={`bb ${isCurrentTimeIndex === index && "currentTime"} ${
									isHoverColumnIndex === index ? "isHover" : ""
								}`}
								key={index}
								onMouseEnter={() => mouseOn(index)}
								onMouseLeave={mouseLeave}
							>
								<div className="temp">
									{Math.floor(hour.temp)}
									<span>°C</span>
								</div>
							</td>
						))}
					</tr>
					<tr>
						<th className="hourly_forecast_description">Feels like</th>
						{hourly.map((hour, index) => (
							<td
								className={`bb ${isCurrentTimeIndex === index && "currentTime"} ${
									isHoverColumnIndex === index ? "isHover" : ""
								}`}
								key={index}
								onMouseEnter={() => mouseOn(index)}
								onMouseLeave={mouseLeave}
							>
								<div className="temp">
									{Math.floor(hour.feelslike)}
									<span>°C</span>
								</div>
							</td>
						))}
					</tr>
					<tr>
						<th className="hourly_forecast_description">Precipitation</th>

						{hourly.map((hour, index) => (
							<td
								className={`bb ${isCurrentTimeIndex === index && "currentTime"} ${
									isHoverColumnIndex === index ? "isHover" : ""
								}`}
								key={index}
								onMouseEnter={() => mouseOn(index)}
								onMouseLeave={mouseLeave}
							>
								{Math.floor(hour.precip)}
								<span>mm</span>
							</td>
						))}
					</tr>
					<tr>
						<th className="hourly_forecast_description">Precipitation chance</th>
						{hourly.map((hour, index) => (
							<td
								className={`${isCurrentTimeIndex === index && "currentTime"} ${
									isHoverColumnIndex === index ? "isHover" : ""
								}`}
								key={index}
								onMouseEnter={() => mouseOn(index)}
								onMouseLeave={mouseLeave}
							>
								{Math.floor(hour.precipprob)}
								<span>%</span>
							</td>
						))}
					</tr>
				</tbody>
			</table>
		</div>
	);
};

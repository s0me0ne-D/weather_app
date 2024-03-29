import React, { useEffect, useLayoutEffect, useState } from "react";
import "./hourlyForecast.scss";
import { Hour, IIconType } from "../../../interfaces/weather_interface";
import { WeatherIcon } from "./WeatherIcon";
import { CloseIcon } from "../../../assets/icons/CloseIcon";

export const HourlyForecast = ({
	hourly,
	isPopup,
	date,
	setIsPopup,
}: {
	hourly: Array<Hour>;
	isPopup?: boolean;
	date?: string;
	setIsPopup?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const [dataTime, setDataTime] = useState<Array<string>>([]);
	const [isHoverColumnIndex, setIsHoverColumnIndex] = useState(99);
	const [isCurrentTimeIndex, setIsCurrentTimeIndex] = useState(99);
	const currentTime = new Date().getHours();
	const currentHourlyDate = date?.split("-").reverse().join("/");
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
			if (+time[0] === currentTime && !isPopup) {
				setIsCurrentTimeIndex(index);
			}
			newTime.push(time.splice(0, 2).join(":"));
		});
		setDataTime(newTime);
	}, []);

	return (
		<div className={`hourly forecast-element ${isPopup ? "popup" : ""}`}>
			{isPopup && (
				<button
					className="popup_close-btn"
					onClick={() => {
						setIsPopup && setIsPopup(false);
					}}
				>
					<CloseIcon />
				</button>
			)}
			<table className="hourly_forecast">
				<tbody>
					<tr>
						<th className="hourly_forecast_description">
							{currentHourlyDate && currentHourlyDate}
						</th>
						{dataTime.map((time, index) => (
							<td
								key={time}
								className={`hourly_forecast_time bb ${
									isCurrentTimeIndex === index ? "currentTime" : ""
								} ${isHoverColumnIndex === index ? "isHover" : ""}`}
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
								className={`bb ${isCurrentTimeIndex === index ? "currentTime" : ""} ${
									isHoverColumnIndex === index ? "isHover" : ""
								}`}
								key={index}
								onMouseEnter={() => mouseOn(index)}
								onMouseLeave={mouseLeave}
							>
								<WeatherIcon condition={hour.icon as IIconType} />
							</td>
						))}
					</tr>
					<tr>
						<th className="hourly_forecast_description">Temperature</th>
						{hourly.map((hour, index) => (
							<td
								className={`bb ${isCurrentTimeIndex === index ? "currentTime" : ""} ${
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
								className={`bb ${isCurrentTimeIndex === index ? "currentTime" : ""} ${
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
								className={`bb ${isCurrentTimeIndex === index ? "currentTime" : ""} ${
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
								className={`${isCurrentTimeIndex === index ? "currentTime" : ""} ${
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

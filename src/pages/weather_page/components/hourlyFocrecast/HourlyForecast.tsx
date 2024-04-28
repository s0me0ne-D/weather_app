import React, { useLayoutEffect, useState } from "react";
import "./hourlyForecast.scss";
import { Hour, IIconType } from "../../../../interfaces/weather_interface";
import { WeatherIcon } from "../WeatherIcon";
import { CloseIcon } from "../../../../assets/icons/CloseIcon";
import { getLocalTime } from "../../../../utils/getLocalTime";
import { useOutsideClick } from "../../../../hooks/useOutsideClick";
import { useSwiper } from "swiper/react";

interface HourlyForecastProps {
	hourly: Array<Hour>;
	isPopup?: boolean;
	date?: string;
	timezone?: string;
	setIsPopup?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const HourlyForecast = ({
	hourly,
	isPopup,
	date,
	timezone,
	setIsPopup,
}: HourlyForecastProps) => {
	const [dataTime, setDataTime] = useState<Array<string>>([]);
	const [hoverColumnIndex, setHoverColumnIndex] = useState<number | null>(null);
	const [currentTimeIndex, setCurrentTimeIndex] = useState<number | null>(null);
	const currentHourlyDate = date?.split("-").reverse().join("/");
	const hourlyPopupRef = useOutsideClick(() => setIsPopup && setIsPopup(false));

	const changeCurrentTimeIndex = (time: string[], index: number, timezone: string) => {
		const localHour = getLocalTime(timezone).substring(0, 2);
		if (time[0] === localHour && !isPopup) {
			setCurrentTimeIndex(index);
		}
	};

	const mouseOn = (index: number) => {
		setHoverColumnIndex(index);
	};
	const mouseLeave = () => {
		setHoverColumnIndex(99);
	};

	useLayoutEffect(() => {
		const newTime: Array<string> = [];
		hourly.forEach((el, index) => {
			const time = el.datetime.split(":");
			timezone && changeCurrentTimeIndex(time, index, timezone);
			newTime.push(time.splice(0, 2).join(":"));
		});
		setDataTime(newTime);
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	return (
		<div
			ref={isPopup ? hourlyPopupRef : undefined}
			className={`forecast-element ${isPopup ? "popup popup-hourly" : "hourly"} swiper-no-swiping`}
		>
			{isPopup && (
				<button
					className="popup-hourly_close-btn"
					onClick={() => {
						setIsPopup && setIsPopup(false);
					}}
				>
					<CloseIcon />
				</button>
			)}
			<div className={`hourly-container ${isPopup ? "popup popup-hourly" : "hourly"}`}>
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
										currentTimeIndex === index ? "currentTime" : ""
									} ${hoverColumnIndex === index ? "isHover" : ""}`}
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
									className={`bb ${currentTimeIndex === index ? "currentTime" : ""} ${
										hoverColumnIndex === index ? "isHover" : ""
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
									className={`bb ${currentTimeIndex === index ? "currentTime" : ""} ${
										hoverColumnIndex === index ? "isHover" : ""
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
									className={`bb ${currentTimeIndex === index ? "currentTime" : ""} ${
										hoverColumnIndex === index ? "isHover" : ""
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
									className={`bb ${currentTimeIndex === index ? "currentTime" : ""} ${
										hoverColumnIndex === index ? "isHover" : ""
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
									className={`${currentTimeIndex === index ? "currentTime" : ""} ${
										hoverColumnIndex === index ? "isHover" : ""
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
		</div>
	);
};

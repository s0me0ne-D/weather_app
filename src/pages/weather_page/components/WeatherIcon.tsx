import React from "react";
import { ClearDay } from "../../../assets/icons/forecast_icons/ClearDay";
import { IIconType } from "../../../interfaces/weather_interface";
import { ClearNight } from "../../../assets/icons/forecast_icons/ClearNight";
import { Cloudy } from "../../../assets/icons/forecast_icons/Cloudy";
import { Fog } from "../../../assets/icons/forecast_icons/Fog";
import { CloudyDay } from "../../../assets/icons/forecast_icons/CloudyDay";
import { CloudyNight } from "../../../assets/icons/forecast_icons/CloudyNight";
import { Rain } from "../../../assets/icons/forecast_icons/Rain";
import { Snow } from "../../../assets/icons/forecast_icons/Snow";
import { Windy } from "../../../assets/icons/forecast_icons/Windy";

export const WeatherIcon = ({ condition }: { condition: IIconType }) => {
	switch (condition) {
		case "clear-day":
			return <ClearDay />;
		case "clear-night":
			return <ClearNight />;
		case "cloudy":
			return <Cloudy />;
		case "fog":
			return <Fog />;
		case "partly-cloudy-day":
			return <CloudyDay />;
		case "partly-cloudy-night":
			return <CloudyNight />;
		case "rain":
			return <Rain />;
		case "snow":
			return <Snow />;
		case "wind":
			return <Windy />;
	}
};

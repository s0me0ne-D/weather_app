import React, { useContext, useEffect, useLayoutEffect, useState } from "react";
import { useGetForecastByCityQuery } from "../../../redux/api";
import { locationsContext } from "../../../App";
import { CityDate } from "../components/city_date/CityDate";
import "./forecastPage.scss";
import { CurrentConditionIcon } from "../components/current_condition_icon/CurrentConditionIcon";
import { IIconType } from "../../../interfaces/weather_interface";
import { WindInfo } from "../components/wind_info/WindInfo";
import { HourlyForecast } from "../components/hourlyFocrecast/HourlyForecast";
import { WeeklyForecast } from "../components/weekly_forecast/WeeklyForecast";
import { useDispatch, useSelector } from "react-redux";
import { showErrorPopup, showSuccessPopup } from "../../../redux/popupSlice";
import { IError } from "../../../interfaces/geolocationSearch_interface";
import { RootStore } from "../../../redux/store";
import { ThermometerIcon } from "../../../assets/icons/ThermometerIcon";
import { Box, CircularProgress } from "@mui/material";
import { useWindowWidth } from "../../../hooks/useWindowWidth";

const errorLocation: IError = {
	isError: true,
	message: "Ooooops, can`t find this city name.",
};

const loaderStyle = {
	width: "100%",
	height: "100%",
	display: "grid",
	placeItems: "center",
	gridColumn: "1/span4",
	gridRow: "1/span3",
};

const SUM_OF_BUTTONS_WIDTH = 110;
const SUM_OF_MOBILE_PADDINGS = 10;

export const ForecastPage = ({ city }: { city: string }) => {
	const { data, isError, isLoading } = useGetForecastByCityQuery(city);

	const { locations, setLocations } = useContext(locationsContext);
	const [translate, setTranslate] = useState<number | null>(null);

	const { index } = useSelector((store: RootStore) => store.activeLocationIndexReducer);
	const { lookingForLocation } = useSelector((store: RootStore) => store.popupReducer);

	const windowWidth = useWindowWidth();

	const dispatch = useDispatch();

	useEffect(() => {
		const arg = windowWidth <= 700 ? SUM_OF_MOBILE_PADDINGS : SUM_OF_BUTTONS_WIDTH;
		setTranslate((windowWidth - arg) * -index);
	}, [index, windowWidth]);

	useEffect(() => {
		data && lookingForLocation === city && dispatch(showSuccessPopup(true));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	useLayoutEffect(() => {
		if (isError) {
			dispatch(showErrorPopup(errorLocation));
			deleteErrorCityName();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isError]);

	const deleteErrorCityName = () => {
		const newLocations = locations.filter((el) => el !== city);
		setLocations(newLocations);
	};

	return (
		<div className="forecast" style={{ transform: `translateX(${translate}px)` }}>
			{data ? (
				<>
					{" "}
					<CityDate adress={data.resolvedAddress} timezone={data.timezone} />
					<div className="forecast_temp forecast-element">
						<div className="forecast-element_icon">
							<ThermometerIcon />
						</div>
						<div className="forecast_temp_description">
							{Math.floor(data.currentConditions.temp)}
							<span className="forecast_temp_deg">°c</span>
						</div>
					</div>
					<CurrentConditionIcon condition={data.currentConditions.icon as IIconType} />
					<WindInfo
						deg={data.currentConditions.winddir}
						windspeed={data.currentConditions.windspeed}
						windgust={data.currentConditions.windgust}
					/>
					<WeeklyForecast weekly={data.days} />
					<HourlyForecast hourly={data.days[0].hours} timezone={data.timezone} />
				</>
			) : isLoading ? (
				<Box sx={loaderStyle}>
					<CircularProgress sx={{ color: "#00ffeb" }} />
				</Box>
			) : null}
		</div>
	);
};

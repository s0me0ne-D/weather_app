import React, { useContext, useEffect, useLayoutEffect } from "react";
import { useGetForecastByCityQuery } from "../../redux/api";
import { locationsContext } from "../../App";
import { CityDate } from "./components/city_date/CityDate";
import "./forecastPage.scss";
import { CurrentConditionIcon } from "./components/current_condition_icon/CurrentConditionIcon";
import { IIconType } from "../../interfaces/weather_interface";
import { WindInfo } from "./components/wind_info/WindInfo";
import { HourlyForecast } from "./components/HourlyForecast";
import { WeeklyForecast } from "./components/weekly_forecast/WeeklyForecast";
import { useDispatch, useSelector } from "react-redux";
import { addForecast } from "../../redux/forecastsSlice";
import { changeIsError, changeIsSuccess } from "../../redux/geolocationSearchSlice";
import { IError } from "../../interfaces/geolocationSearch_interface";
import { RootStore } from "../../redux/store";

const errorLocation: IError = {
	isError: true,
	message: "Ooooops, can`t find this city name.",
};

export const ForecastPage = ({ city }: { city: string }) => {
	const { data, isError, isLoading, isFetching } = useGetForecastByCityQuery(city);
	const { locations, setLocations } = useContext(locationsContext);
	const { location } = useSelector((store: RootStore) => store.geolocationSearchReducer);
	const dispatch = useDispatch();
	useEffect(() => {
		data && dispatch(addForecast(data));
		data && location === city && dispatch(changeIsSuccess(true));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [data]);

	useLayoutEffect(() => {
		if (isError) {
			dispatch(changeIsError(errorLocation));
			deleteErrorCityName();
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [isError]);

	const deleteErrorCityName = () => {
		const newLocations = locations.filter((el) => el !== city);
		setLocations(newLocations);
	};

	return data ? (
		<div className="forecast">
			<CityDate adress={data.resolvedAddress} timezone={data.timezone} />
			<div className="forecast_temp forecast-element">
				<div className="forecast_temp_block">
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
		</div>
	) : (
		<>Loading...</>
	);
};

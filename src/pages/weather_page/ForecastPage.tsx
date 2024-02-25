import React, { useContext, useEffect, useLayoutEffect } from "react";
import { useGetForecastByCityQuery } from "../../redux/api";
import { locationsContext } from "../../App";
import { ISerializedError } from "../../interfaces/api_interface";
import { CityDate } from "./components/city_date/CityDate";
import "./forecastPage.scss";
import { CurrentConditionIcon } from "./components/current_condition_icon/CurrentConditionIcon";
import { IIconType } from "../../interfaces/weather_interface";
import { WindInfo } from "./components/wind_info/WindInfo";

export const ForecastPage = ({ city }: { city: string }) => {
	const { data, error, isError, isLoading, isFetching } = useGetForecastByCityQuery(city);
	const { locations, setLocations } = useContext(locationsContext);

	//Deleting a city from the array if error.status === 400
	useLayoutEffect(() => {
		if (isError) {
			if ((error as ISerializedError).originalStatus === "400") {
				const newLocations = locations.filter((el) => el !== city);
				setLocations(newLocations);
			}
		}
	}, [isError]);
	useEffect(() => {
		console.log(data);
	}, [data]);

	return data ? (
		<div className="forecast">
			<CityDate adress={data.resolvedAddress} />
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
		</div>
	) : (
		<>Loading...</>
	);
};

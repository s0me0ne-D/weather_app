import React, { useEffect, useState } from "react";
import { useGetForecastByCityQuery } from "../../../../../../redux/api";
import { addressHandler } from "../../../../../../utils/addressHandler";
import { WeatherIcon } from "../../../WeatherIcon";
import { IIconType } from "../../../../../../interfaces/weather_interface";

export const Location = ({ location }: { location: string }) => {
	const { data } = useGetForecastByCityQuery(location);
	const [cityName, setCityName] = useState("");
	useEffect(() => {
		data && setCityName(addressHandler(data.resolvedAddress).cityName);
	}, [data]);
	console.log(data?.currentConditions.conditions);

	return data ? (
		<button className="locations_location">
			<span className="locations_location_city">{cityName}</span>
			<div className="locations_location_description">
				<WeatherIcon condition={data.currentConditions.icon as IIconType} />
				<span className="locations_location_description_temp">
					{data?.currentConditions.temp}
					<span>°C</span>
				</span>
			</div>
		</button>
	) : null;
};

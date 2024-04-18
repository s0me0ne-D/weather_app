import React, { useEffect, useState } from "react";
import { useGetForecastByCityQuery } from "../../../../../../redux/api";
import { addressHandler } from "../../../../../../utils/addressHandler";
import { WeatherIcon } from "../../../WeatherIcon";
import { IIconType } from "../../../../../../interfaces/weather_interface";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../../../../../redux/store";
import { changeActiveLocationIndex } from "../../../../../../redux/activeLocationIndexSlice";

export const Location = ({ location, index }: { location: string; index: number }) => {
	const { index: activeIndex } = useSelector(
		(store: RootStore) => store.activeLocationIndexReducer
	);
	const { data } = useGetForecastByCityQuery(location);
	const [cityName, setCityName] = useState("");
	const dispatch = useDispatch();
	const handleOnClick = () => {
		dispatch(changeActiveLocationIndex(index));
	};

	useEffect(() => {
		data && setCityName(addressHandler(data.resolvedAddress).cityName);
	}, [data]);

	return data ? (
		<button
			className={`locations_location ${activeIndex === index && "activeLocation"}`}
			onClick={() => handleOnClick()}
		>
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

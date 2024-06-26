import React from "react";
import { useGetForecastByCityQuery } from "../../../../../../redux/api";
import { addressHandler } from "../../../../../../utils/addressHandler";
import { WeatherIcon } from "../../../WeatherIcon";
import { IIconType } from "../../../../../../interfaces/weather_interface";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../../../../../redux/store";
import { changeActiveLocationIndex } from "../../../../../../redux/activeLocationIndexSlice";

interface LocationProps {
	location: string;
	index?: number;
	openMobileList?: React.Dispatch<React.SetStateAction<boolean>>;
}

export const Location = ({ location, index, openMobileList }: LocationProps) => {
	const { index: activeIndex } = useSelector(
		(store: RootStore) => store.activeLocationIndexReducer
	);
	const { data } = useGetForecastByCityQuery(location);
	const dispatch = useDispatch();
	const handleOnClick = () => {
		index !== undefined && dispatch(changeActiveLocationIndex(index));
		openMobileList && openMobileList((prev) => !prev);
	};

	const temp = data ? Math.floor(data.currentConditions.temp) : undefined;
	const cityName = data ? addressHandler(data.resolvedAddress).cityName : "";

	return data ? (
		<button
			className={`locations_location ${activeIndex === index ? "activeLocation" : ""}`}
			onClick={handleOnClick}
		>
			<span className="locations_location_city">{cityName}</span>
			<div className="locations_location_description">
				<WeatherIcon condition={data.currentConditions.icon as IIconType} />
				<span className="locations_location_description_temp">
					{temp && temp}
					<span>°C</span>
				</span>
			</div>
		</button>
	) : null;
};

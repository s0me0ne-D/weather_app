import React, { useContext, useLayoutEffect } from "react";
import { useGetForecastByCityQuery } from "../redux/api";
import { locationsContext } from "../App";

export const ForecastPage = ({ city }: { city: string }) => {
	const { data, isError } = useGetForecastByCityQuery(city);
	const { locations, setLocations } = useContext(locationsContext);
	console.log(city);
	console.log(data);
	console.log(isError);
	useLayoutEffect(() => {
		if (isError) {
			const newLocations = locations.filter((el) => el !== city);
			setLocations(newLocations);
		}
	}, [isError]);
	return <div>{data?.locations[`/${city}`].address}</div>;
};

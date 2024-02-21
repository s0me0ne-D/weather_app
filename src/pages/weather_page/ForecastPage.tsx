import React, { useContext, useLayoutEffect } from "react";
import { useGetForecastByCityQuery } from "../../redux/api";
import { locationsContext } from "../../App";

export const ForecastPage = ({ city }: { city: string }) => {
	const { data, isError, isLoading } = useGetForecastByCityQuery(city);
	const { locations, setLocations } = useContext(locationsContext);
	useLayoutEffect(() => {
		if (isError) {
			const newLocations = locations.filter((el) => el !== city);
			setLocations(newLocations);
		}
	}, [isError]);
	return <div></div>;
};

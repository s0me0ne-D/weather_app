import React, { useContext, useEffect, useLayoutEffect } from "react";
import { useGetForecastByCityQuery } from "../../redux/api";
import { locationsContext } from "../../App";
import { ISerializedError } from "../../interfaces/api_interface";
import { CityDate } from "./components/CityDate";

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
	// useEffect(() => {
	// 	console.log(data);
	// }, [data]);

	return <div>{data && <CityDate adress={data.resolvedAddress} />}</div>;
};

import React from "react";
import { getCurrentDate } from "../../../utils/getCurrentDate";
import { addressHandler } from "../../../utils/addressHandler";

export const CityDate = ({ adress }: { adress: string }) => {
	const currentDate = getCurrentDate();
	const { cityName, country } = addressHandler(adress);
	console.log(cityName, country);
	return (
		<div>
			{currentDate}
			<br />
			{cityName}
			<br />
			{country && country}
		</div>
	);
};

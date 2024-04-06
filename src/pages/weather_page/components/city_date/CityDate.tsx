import React from "react";
import { getCurrentDate } from "../../../../utils/getCurrentDate";
import { addressHandler } from "../../../../utils/addressHandler";
import "./cityDate.scss";
import { Clock } from "./Clock";
import { DateIcon } from "../../../../assets/icons/DateIcon";

export const CityDate = ({ adress, timezone }: { adress: string; timezone: string }) => {
	const currentDate = getCurrentDate();
	const { cityName, country } = addressHandler(adress);
	return (
		<div className="city-date forecast-element">
			<div className="city-date_location">
				<span className="city-date_location_city">{cityName}</span>

				{country && <span className="city-date_location_country">{country}</span>}
			</div>
			<span className="line"></span>
			<div className="city-date_date">
				<div className="forecast-element_icon">
					<DateIcon />
				</div>
				<div className="city-date_date_description">
					<span className="city-date_date_current">{currentDate}</span>
					<Clock timeZone={timezone} />
				</div>
			</div>
		</div>
	);
};

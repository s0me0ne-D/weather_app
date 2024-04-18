import React, { useContext } from "react";
import { locationsContext } from "../../../../../../App";
import { Location } from "./Location";
import "./locations.scss";

export const Locations = () => {
	const { locations } = useContext(locationsContext);

	return (
		<div className="locations">
			{locations?.map((cityName) => (
				<Location location={cityName} key={cityName} />
			))}
		</div>
	);
};

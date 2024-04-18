import React, { useContext } from "react";
import { locationsContext } from "../../../../../../App";
import { Location } from "./Location";
import "./locations.scss";

export const Locations = () => {
	const { locations } = useContext(locationsContext);

	return (
		<div className="locations">
			<div className="locations_container">
				{locations?.map((cityName, index) => (
					<Location location={cityName} key={cityName} index={index} />
				))}
			</div>
		</div>
	);
};

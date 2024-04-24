import React from "react";
import { Compass } from "../../../../assets/icons/Compass";
import "./windInfo.scss";
import { CompassArrow } from "../../../../assets/icons/CompassArrow";
import { Windy } from "../../../../assets/icons/forecast_icons/Windy";

interface WindInfoProps {
	deg: number;
	windspeed: number;
	windgust: number;
}

export const WindInfo = ({ deg, windspeed, windgust }: WindInfoProps) => {
	return (
		<div className="wind forecast-element">
			<div className="wind_title">
				<Windy />
			</div>
			<div className="wind_description">
				<div className="wind_info">
					<div className="wind_info_speed">
						<span className="wind_info_speed_value">{windspeed}</span>
						<div className="wind_info_speed_des">
							<span>m/s</span>
							<span>speed</span>
						</div>
					</div>
					<span className="wind_info_line"></span>
					<div className="wind_info_speed">
						<span className="wind_info_speed_value">{windgust ? windgust : "-"}</span>
						<div className="wind_info_speed_des">
							<span>m/s</span>
							<span>max</span>
						</div>
					</div>
				</div>
				<div className="wind_compass">
					<div className="wind_compass_container">
						<CompassArrow deg={deg} />
						<Compass />
					</div>
				</div>
			</div>
		</div>
	);
};

import React, { useEffect, useState } from "react";
import { IIconType } from "../../../../interfaces/weather_interface";
import { WeatherIcon } from "./WeatherIcon";
import "./currentConditionIcon.scss";

export const CurrentConditionIcon = ({ condition }: { condition: IIconType }) => {
	const icon = WeatherIcon(condition);
	const [currentCondition, setCurrentCondition] = useState<string>("");
	useEffect(() => {
		const newCondition = condition
			.split("-")
			.map((el) => el.charAt(0).toUpperCase() + el.slice(1))
			.join(" ");
		setCurrentCondition(newCondition);
	}, [condition]);
	return (
		<div className="condition forecast-element">
			{icon && icon}
			<span className="condition_text">{currentCondition}</span>
		</div>
	);
};

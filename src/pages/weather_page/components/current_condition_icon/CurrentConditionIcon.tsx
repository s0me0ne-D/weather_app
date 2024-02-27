import React, { useEffect, useState } from "react";
import { IIconType } from "../../../../interfaces/weather_interface";
import { WeatherIcon } from "../WeatherIcon";
import "./currentConditionIcon.scss";
import { conditionHandler } from "../../../../utils/conditionHandler";

export const CurrentConditionIcon = ({ condition }: { condition: IIconType }) => {
	const icon = WeatherIcon(condition);
	const [currentCondition, setCurrentCondition] = useState<string>("");
	useEffect(() => {
		setCurrentCondition(conditionHandler(condition));
	}, [condition]);
	return (
		<div className="condition forecast-element">
			{icon && icon}
			<span className="condition_text">{currentCondition}</span>
		</div>
	);
};

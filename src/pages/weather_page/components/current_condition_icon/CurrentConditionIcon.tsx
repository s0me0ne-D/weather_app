import React, { useEffect, useMemo, useState } from "react";
import { IIconType } from "../../../../interfaces/weather_interface";
import { WeatherIcon } from "../WeatherIcon";
import "./currentConditionIcon.scss";
import { conditionHandler } from "../../../../utils/conditionHandler";

export const CurrentConditionIcon = ({ condition }: { condition: IIconType }) => {
	const currentCondition = useMemo(() => {
		return conditionHandler(condition);
	}, [condition]);
	return (
		<div className="condition forecast-element">
			<WeatherIcon condition={condition} />
			<span className="condition_text">{currentCondition}</span>
		</div>
	);
};

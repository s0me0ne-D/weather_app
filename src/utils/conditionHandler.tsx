import { IIconType } from "../interfaces/weather_interface";

export const conditionHandler = (condition: IIconType) => {
	return condition
		.split("-")
		.map((el) => el.charAt(0).toUpperCase() + el.slice(1))
		.join(" ");
};

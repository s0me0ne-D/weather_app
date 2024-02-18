import React, { useContext, useState } from "react";
import { locationsContext } from "../App";

export const CitySearch = () => {
	const [value, setValue] = useState<string>("");
	const { locations, setLocations } = useContext(locationsContext);
	return (
		<input
			type="text"
			value={value}
			onChange={(event) => setValue(event.target.value)}
			onKeyDown={(event) => {
				if (
					event.key === "Enter" &&
					!(locations as Array<string>).includes(value) &&
					value.length !== 0
				) {
					setLocations((prev: Array<string>) => [...prev, value]);
					setValue("");
				}
			}}
		/>
	);
};

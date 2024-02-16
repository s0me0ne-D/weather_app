import React, { useState } from "react";
import { ICurrentLocation } from "../interfaces/interfaces";

export const SplashPage = ({
	location,
	setLocation,
}: {
	location: ICurrentLocation;
	setLocation: React.Dispatch<React.SetStateAction<ICurrentLocation>>;
}) => {
	const [value, setValue] = useState("");
	return (
		<div className="splash-page">
			<span className="splash-page_text">Enter your city</span>
			<input
				type="text"
				value={value}
				onChange={(event) => setValue(event.target.value)}
				onKeyDown={(event) => {
					event.key === "Enter" && setLocation((prev) => ({ ...prev, city: [value] }));
				}}
			/>

			<span>
				or
				<br />
				get the weather forecast using
			</span>
			<button>geolocation</button>
		</div>
	);
};

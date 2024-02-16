import React, { useEffect, useState } from "react";

export const SplashPage = ({
	setLocation,
}: {
	setLocation: React.Dispatch<React.SetStateAction<Array<string>>>;
}) => {
	const [value, setValue] = useState("");
	useEffect(() => {
		console.log("render");
	}, []);
	function handleLocationClick() {
		if (navigator.geolocation) {
			navigator.geolocation.getCurrentPosition(success, error);
		} else {
			//ERROR MESSAGE:'Geolocation not supported, please enter city name'
			console.log("Geolocation not supported");
		}
	}

	function success(position: any) {
		const latitude = position.coords.latitude;
		const longitude = position.coords.longitude;
		const url = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;
		fetch(url)
			.then((response) => response.json())
			.then((data) => setLocation((prev) => [...prev, data.address.city]))
			.catch((error) => {
				//ERROR MESSAGE: 'Unable to retrieve your location, please enter city name'
			});
	}
	function error() {
		//ERROR MESSAGE: 'Unable to retrieve your location, please enter city name'
		console.log("Unable to retrieve your location");
	}
	return (
		<div className="splash-page">
			<span className="splash-page_text">Enter your city</span>
			<input
				type="text"
				value={value}
				onChange={(event) => setValue(event.target.value)}
				onKeyDown={(event) => {
					event.key === "Enter" && setLocation((prev: any) => [...prev, value]);
				}}
			/>

			<span>
				or
				<br />
				get the weather forecast using
			</span>
			<button onClick={handleLocationClick}>geolocation</button>
		</div>
	);
};

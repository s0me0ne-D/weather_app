import React, { useState, useEffect } from "react";

export const Clock = () => {
	const [time, setTime] = useState({
		minutes: new Date().getMinutes(),
		hours: new Date().getHours(),
	});

	useEffect(() => {
		const intervalId = setInterval(() => {
			const date = new Date();
			setTime({
				minutes: date.getMinutes(),
				hours: date.getHours(),
			});
		}, 1000);

		return () => clearInterval(intervalId);
	}, []);

	return (
		<div className="city-date_date_clock">
			{time.hours}
			<span>:</span>
			{time.minutes}
		</div>
	);
};

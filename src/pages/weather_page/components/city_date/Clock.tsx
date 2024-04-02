import React, { useState, useEffect, useCallback } from "react";
import { getLocalTime } from "../../../../utils/getLocalTime";

export const Clock = ({ timeZone }: { timeZone: string }) => {
	const [time, setTime] = useState({
		hours: 0,
		minutes: 0,
	});
	const getTime = useCallback(() => {
		const localTime = getLocalTime(timeZone).split(":");
		setTime({
			minutes: +localTime[1],
			hours: +localTime[0],
		});
	}, []);
	useEffect(() => {
		getTime();
	}, []);
	useEffect(() => {
		const intervalId = setInterval(() => {
			getTime();
		}, 60000);

		return () => clearInterval(intervalId);
	}, []);
	return (
		<div className="city-date_date_clock">
			{time.hours}
			<span>:</span>
			{time.minutes < 10 ? "0" + time.minutes : time.minutes}
		</div>
	);
};

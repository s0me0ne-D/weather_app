import React, { useState, useEffect, useCallback } from "react";

interface IDate {
	abbreviation: string;
	client_ip: string;
	datetime: string;
	day_of_week: number;
	day_of_year: number;
	dst: boolean;
	dst_from: null;
	dst_offset: number;
	dst_until: null;
	raw_offset: number;
	timezone: string;
	unixtime: number;
	utc_datetime: string;
	utc_offset: string;
	week_number: number;
}

export const Clock = ({ timeZone }: { timeZone: string }) => {
	const [time, setTime] = useState({
		hours: 0,
		minutes: 0,
	});
	const getTime = useCallback(() => {
		const newTime = new Date().toLocaleTimeString("en-GB", { timeZone }).split(":");
		setTime({
			minutes: +newTime[1],
			hours: +newTime[0],
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

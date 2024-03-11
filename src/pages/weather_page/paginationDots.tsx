import React from "react";

export const paginationDots = (paginationCounter: number, forecastsLength: number) => {
	for (let i = 0; i < forecastsLength; i++) {
		<div className={`pagination-dots_dot ${i === paginationCounter ? "active-dot" : ""}`}></div>;
	}
};

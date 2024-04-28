import React, { useContext } from "react";
import { ArrowBtn } from "../components/buttons/ArrowBtn";
import { locationsContext } from "../../../App";
import { ForecastPage } from "./ForecastPage";
import { MapPage } from "../components/map/MapPage";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../../../redux/store";
import "./main.scss";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

import { MoveToSlide } from "./MoveToSlide";
import { changeActiveLocationIndex } from "../../../redux/activeLocationIndexSlice";

export const Main = ({ isMap }: { isMap: boolean }) => {
	const { locations } = useContext(locationsContext);
	const { index: activeIndex } = useSelector(
		(store: RootStore) => store.activeLocationIndexReducer
	);

	const dispatch = useDispatch();

	return (
		<main className="main">
			{isMap && <MapPage />}
			<ArrowBtn direction="left" />
			<div className="weather_container">
				<div className="weather_forecast">
					<Swiper
						className="mySwiper"
						onActiveIndexChange={(swiperCore: any) => {
							dispatch(changeActiveLocationIndex(swiperCore.activeIndex));
						}}
					>
						{locations.map((city, index) => (
							<SwiperSlide key={index}>
								<ForecastPage city={city} />
							</SwiperSlide>
						))}
						<MoveToSlide />
					</Swiper>
				</div>
			</div>
			<ArrowBtn direction="right" />
			<div className="pagination-dots">
				{locations.map((location, index) => (
					<div
						className={`pagination-dots_dot ${index === activeIndex ? "active-dot" : ""}`}
						key={location}
					></div>
				))}
			</div>
		</main>
	);
};

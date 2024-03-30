import React, { useEffect } from "react";
import { CitySearch } from "../components/CitySearch";
import { GeolocationSearch } from "../components/GeolocationSearch";
import "./splashPage.scss";
import { World } from "../assets/icons/World";
import { RootStore } from "../redux/store";
import { useSelector } from "react-redux";

export const SplashPage = () => {
	const { isError, isLoading, locationExist } = useSelector(
		(store: RootStore) => store.geolocationSearchReducer
	);
	useEffect(() => {
		console.log(isError, isLoading, locationExist);
	}, [isError, isLoading, locationExist]);
	return (
		<div className="splash-page">
			<div className="splash-page_background">
				<World />
			</div>
			<div className="splash-page_context">
				<span>Enter the name of your city</span>
				<CitySearch />
				<span>or</span>
				<span>get the weather forecast using</span>
				<GeolocationSearch />
			</div>
		</div>
	);
};

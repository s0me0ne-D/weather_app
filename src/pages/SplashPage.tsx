import React from "react";
import { CitySearch } from "../components/CitySearch";
import { GeolocationSearch } from "../components/GeolocationSearch";
import "./splashPage.scss";
import { World } from "../assets/icons/World";
import { RootStore } from "../redux/store";
import { useSelector } from "react-redux";
import { Popup } from "../components/Popup";

export const SplashPage = () => {
	const { error, isLoading, locationExist } = useSelector(
		(store: RootStore) => store.geolocationSearchReducer
	);

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
			{error.isError || isLoading || locationExist ? <Popup /> : null}
		</div>
	);
};

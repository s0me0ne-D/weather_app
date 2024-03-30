import React from "react";
import { useSelector } from "react-redux";
import { RootStore } from "../redux/store";
import searchAnimation from "../assets/animations/locationSearchAnimation.json";
import { useLottie } from "lottie-react";
import "./popup.scss";

export const Popup = () => {
	const { isError, isLoading, locationExist } = useSelector(
		(store: RootStore) => store.geolocationSearchReducer
	);
	const options = {
		animationData: searchAnimation,
		loop: true,
	};
	const { View } = useLottie(options);
	return (
		<div className="popup location-popup">
			<div className="location-popup_description">
				{View}
				{isError.error && <span>{isError.message}</span>}
				{locationExist && <span>Location already exist</span>}
			</div>
			{!isLoading && <button className="location-popup_btn">Ok</button>}
		</div>
	);
};

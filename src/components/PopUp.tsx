import React, { useMemo } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../redux/store";
import searchAnimation from "../assets/animations/locationSearchAnimation.json";
import attentionAnimation from "../assets/animations/attentionAnimation.json";
import successAnimation from "../assets/animations/successAnimation.json";
import { useLottie } from "lottie-react";
import {
	showErrorPopup,
	showSuccessPopup,
	addLookingForLocation,
	showLocationExistPopup,
} from "../redux/popupSlice";
import "./popup.scss";

const messages = {
	locationExist: "Location already exist.",
	isSuccess: "was added.",
	maxLocations: "Sorry, you can add only 5 locations",
};

export const Popup = () => {
	const { error, isLoading, locationExist, isSuccess, lookingForLocation } = useSelector(
		(store: RootStore) => store.popupReducer
	);
	const animation = useMemo(() => {
		if (isLoading) {
			return JSON.parse(JSON.stringify(searchAnimation));
		} else if (isSuccess) {
			return JSON.parse(JSON.stringify(successAnimation));
		} else {
			return JSON.parse(JSON.stringify(attentionAnimation));
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [error.isError, isLoading, locationExist, isSuccess]);

	const dispatch = useDispatch();
	const handlerConfirmation = () => {
		if (error.isError) {
			dispatch(showErrorPopup({ isError: false, message: "" }));
		} else if (isSuccess) {
			dispatch(showSuccessPopup(false));
			dispatch(addLookingForLocation(""));
		} else {
			dispatch(showLocationExistPopup(false));
		}
	};
	const options = {
		animationData: animation,
		loop: true,
	};
	const { View } = useLottie(options);
	return (
		<div className="popup location-popup">
			<div className="location-popup_description">
				{View}
				{error.isError ? (
					<span>{error.message}</span>
				) : locationExist ? (
					<span>{messages.locationExist}</span>
				) : isSuccess ? (
					<span>
						{lookingForLocation} {messages.isSuccess}
					</span>
				) : null}
			</div>
			{!isLoading && (
				<button className="location-popup_btn" onClick={handlerConfirmation}>
					Ok
				</button>
			)}
		</div>
	);
};

import React, { useContext, useEffect, useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../redux/store";
import searchAnimation from "../assets/animations/locationSearchAnimation.json";
import attentionAnimation from "../assets/animations/attentionAnimation.json";
import successAnimation from "../assets/animations/successAnimation.json";
import questionAnimation from "../assets/animations/questionAnimation.json";
import { useLottie } from "lottie-react";
import {
	showErrorPopup,
	showSuccessPopup,
	addLookingForLocation,
	showLocationExistPopup,
	showConfirmation,
} from "../redux/popupSlice";
import "./popup.scss";
import { locationsContext } from "../App";

const messages = {
	locationExist: "Location already exist.",
	isSuccess: "was added.",
	isConfirmation: "Are you sure you want to delete",
};

const handleJson = (animation: any) => {
	return JSON.parse(JSON.stringify(animation));
};

export const Popup = () => {
	const { error, isLoading, locationExist, isSuccess, lookingForLocation, isConfirmation } =
		useSelector((store: RootStore) => store.popupReducer);
	const { index: activeIndex } = useSelector(
		(store: RootStore) => store.activeLocationIndexReducer
	);

	const { locations, setLocations } = useContext(locationsContext);

	const [message, setMessage] = useState<undefined | string>(undefined);

	useEffect(() => {
		if (error.isError) {
			setMessage(error.message);
		} else if (locationExist) {
			setMessage(messages.locationExist);
		} else if (isSuccess) {
			setMessage(`${lookingForLocation} ${messages.isSuccess}`);
		} else if (isConfirmation) {
			setMessage(`${messages.isConfirmation} ${locations[activeIndex]}?`);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [error.isError, locationExist, isSuccess, isConfirmation]);

	const animation = useMemo(() => {
		if (isLoading) {
			return handleJson(searchAnimation);
		} else if (isSuccess) {
			return handleJson(successAnimation);
		} else if (isConfirmation) {
			return handleJson(questionAnimation);
		} else {
			return handleJson(attentionAnimation);
		}
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [error.isError, isLoading, locationExist, isSuccess]);

	const dispatch = useDispatch();

	const deleteLocation = () => {
		const newLocations = locations.filter((location, index) => index !== activeIndex && location);
		setLocations(newLocations);
	};

	const handleOnClick = () => {
		if (error.isError) {
			dispatch(showErrorPopup({ isError: false, message: "" }));
		} else if (isSuccess) {
			dispatch(showSuccessPopup(false));
			dispatch(addLookingForLocation(""));
		} else if (isConfirmation) {
			deleteLocation();
			dispatch(showConfirmation(false));
		} else {
			dispatch(showLocationExistPopup(false));
		}
	};

	const handleCancel = () => {
		dispatch(showConfirmation(false));
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
				{message && <span>{message}</span>}
			</div>
			<div className="popup_buttons">
				{!isLoading && (
					<button
						className={`location-popup_btn ${isConfirmation ? "delete" : ""}`}
						onClick={handleOnClick}
					>
						{isConfirmation ? "Delete" : "Ok"}
					</button>
				)}
				{isConfirmation && (
					<button className="location-popup_btn" onClick={handleCancel}>
						Cancel
					</button>
				)}
			</div>
		</div>
	);
};

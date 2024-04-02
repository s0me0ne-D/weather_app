import React, { useMemo, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootStore } from "../redux/store";
import searchAnimation from "../assets/animations/locationSearchAnimation.json";
import attentionAnimation from "../assets/animations/attentionAnimation.json";
import { useLottie } from "lottie-react";
import { changeIsError, changeLocationExist } from "../redux/geolocationSearchSlice";
import "./popup.scss";

export const Popup = () => {
	const { isError, isLoading, locationExist } = useSelector(
		(store: RootStore) => store.geolocationSearchReducer
	);
	const animation = useMemo(() => {
		if (isLoading) {
			return JSON.parse(JSON.stringify(searchAnimation));
		} else {
			return JSON.parse(JSON.stringify(attentionAnimation));
		}
	}, [isError.error, isLoading, locationExist]);

	const dispatch = useDispatch();
	const handlerConfirmation = () => {
		if (isError.error) {
			dispatch(changeIsError({ error: false, message: "" }));
		} else {
			dispatch(changeLocationExist(false));
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
				{isError.error && <span>{isError.message}</span>}
				{locationExist && <span>Location already exist</span>}
			</div>
			{!isLoading && (
				<button className="location-popup_btn" onClick={handlerConfirmation}>
					Ok
				</button>
			)}
		</div>
	);
};

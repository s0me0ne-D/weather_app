import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IError, IGeolocationSearch } from "../interfaces/geolocationSearch_interface";

const initialState: IGeolocationSearch = {
	lookingForLocation: "",
	isLoading: false,
	error: { isError: false, message: "" },
	locationExist: false,
	isSuccess: false,
	isConfirmation: false,
};

export const popup = createSlice({
	name: "geolocationSearch",
	initialState,
	reducers: {
		addLookingForLocation: (state, action: PayloadAction<string>) => {
			state.lookingForLocation = action.payload;
		},
		showLoadingPopup: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		showErrorPopup: (state, action: PayloadAction<IError>) => {
			state.isLoading = false;
			state.error = action.payload;
		},
		showLocationExistPopup: (state, action: PayloadAction<boolean>) => {
			state.isLoading = false;
			state.locationExist = action.payload;
		},
		showSuccessPopup: (state, action: PayloadAction<boolean>) => {
			state.isSuccess = action.payload;
		},
		showConfirmation: (state, action: PayloadAction<boolean>) => {
			state.isConfirmation = action.payload;
		},
	},
});
export const popupReducer = popup.reducer;
export const {
	addLookingForLocation,
	showErrorPopup,
	showLoadingPopup,
	showLocationExistPopup,
	showSuccessPopup,
	showConfirmation,
} = popup.actions;

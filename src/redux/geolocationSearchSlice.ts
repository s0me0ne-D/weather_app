import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IError, IGeolocationSearch } from "../interfaces/geolocationSearch_interface";

const initialState: IGeolocationSearch = {
	isLoading: false,
	isError: { error: false, message: "" },
	locationExist: false,
};

export const geolocationSearch = createSlice({
	name: "geolocationSearch",
	initialState,
	reducers: {
		isLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		isError: (state, action: PayloadAction<IError>) => {
			state.isError = action.payload;
			state.isLoading = false;
		},
		locationExist: (state, action: PayloadAction<boolean>) => {
			state.locationExist = action.payload;
			state.isLoading = false;
		},
	},
});
export const geolocationSearchReducer = geolocationSearch.reducer;
export const { isLoading, isError, locationExist } = geolocationSearch.actions;

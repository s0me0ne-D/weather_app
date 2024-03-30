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
		changeIsLoading: (state, action: PayloadAction<boolean>) => {
			state.isLoading = action.payload;
		},
		changeIsError: (state, action: PayloadAction<IError>) => {
			state.isError = action.payload;
			state.isLoading = false;
		},
		changeLocationExist: (state, action: PayloadAction<boolean>) => {
			state.locationExist = action.payload;
			state.isLoading = false;
		},
	},
});
export const geolocationSearchReducer = geolocationSearch.reducer;
export const { changeIsError, changeIsLoading, changeLocationExist } = geolocationSearch.actions;

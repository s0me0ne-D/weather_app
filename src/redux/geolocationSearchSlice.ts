import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IError, IGeolocationSearch } from "../interfaces/geolocationSearch_interface";

const initialState: IGeolocationSearch = {
	location: "",
	isLoading: false,
	error: { isError: false, message: "" },
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
			state.isLoading = false;
			state.error = action.payload;
		},
		changeLocationExist: (state, action: PayloadAction<boolean>) => {
			state.isLoading = false;
			state.locationExist = action.payload;
		},
	},
});
export const geolocationSearchReducer = geolocationSearch.reducer;
export const { changeIsError, changeIsLoading, changeLocationExist } = geolocationSearch.actions;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { IWeather } from "../interfaces/weather_interface";

const initialState: Array<IWeather> = [];

export const forecasts = createSlice({
	name: "forecasts",
	initialState,
	reducers: {
		addForecast: (state, action: PayloadAction<IWeather>) => {
			state.push(action.payload);
		},
	},
});
export const forecastsReducer = forecasts.reducer;
export const { addForecast } = forecasts.actions;

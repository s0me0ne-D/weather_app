import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "./api";
import { forecastsReducer } from "./forecastsSlice";
export const store = configureStore({
	reducer: { forecastsReducer, [weatherApi.reducerPath]: weatherApi.reducer },
	middleware: (gDM) => gDM().concat(weatherApi.middleware),
});
export type RootStore = ReturnType<typeof store.getState>;

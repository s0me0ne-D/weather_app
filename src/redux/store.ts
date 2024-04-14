import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "./api";
import { geolocationSearchReducer } from "./geolocationSearchSlice";
export const store = configureStore({
	reducer: {
		[weatherApi.reducerPath]: weatherApi.reducer,
		geolocationSearchReducer,
	},
	middleware: (gDM) => gDM().concat(weatherApi.middleware),
});
export type RootStore = ReturnType<typeof store.getState>;

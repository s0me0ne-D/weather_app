import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "./api";
import { popupReducer } from "./popupSlice";
export const store = configureStore({
	reducer: {
		[weatherApi.reducerPath]: weatherApi.reducer,
		popupReducer,
	},
	middleware: (gDM) => gDM().concat(weatherApi.middleware),
});
export type RootStore = ReturnType<typeof store.getState>;

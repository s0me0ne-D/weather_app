import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "./api";
import { popupReducer } from "./popupSlice";
import { activeLocationIndexReducer } from "./activeLocationIndexSlice";
export const store = configureStore({
	reducer: {
		[weatherApi.reducerPath]: weatherApi.reducer,
		activeLocationIndexReducer,
		popupReducer,
	},
	middleware: (gDM) => gDM().concat(weatherApi.middleware),
});
export type RootStore = ReturnType<typeof store.getState>;

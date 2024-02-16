import { configureStore } from "@reduxjs/toolkit";
import { weatherApi } from "./api";
export const store = configureStore({
	reducer: { [weatherApi.reducerPath]: weatherApi.reducer },
	middleware: (gDM) => gDM().concat(weatherApi.middleware),
});
export type RootStore = ReturnType<typeof store.getState>;

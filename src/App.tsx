import React, { useEffect, useState } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./api/store";
import { WeatherPage } from "./WeatherPage";
import { useLocation } from "./hooks/useLocation";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { ICurrentLocation } from "./interfaces/interfaces";

function App() {
	const currentLocation: ICurrentLocation = {
		city: useLocalStorage(),
		geolocation: useLocation(),
	};

	return (
		<Provider store={store}>
			<WeatherPage currentLocation={currentLocation} />
		</Provider>
	);
}

export default App;

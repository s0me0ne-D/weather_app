import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./api/store";
import { WeatherPage } from "./WeatherPage";

function App() {
	return (
		<Provider store={store}>
			<WeatherPage />
		</Provider>
	);
}

export default App;

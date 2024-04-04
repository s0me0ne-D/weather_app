import React from "react";
import "./App.scss";
import { SplashPage } from "./pages/SplashPage";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { WeatherPage } from "./pages/weather_page/WeatherPage";
import { createContext } from "react";

export const locationsContext = createContext({
	locations: [],
	setLocations: (newValue: any) => {},
});

function App() {
	const [locations, setLocations] = useLocalStorage([]);
	return (
		<div className="App night">
			<locationsContext.Provider value={{ locations, setLocations }}>
				{locations.length > 0 ? <WeatherPage /> : <SplashPage />}
			</locationsContext.Provider>
		</div>
	);
}

export default App;

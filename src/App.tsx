import React from "react";
import "./App.css";
import { SplashPage } from "./pages/SplashPage";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { WeatherPage } from "./pages/WeatherPage";
import { createContext } from "react";

export const locationsContext = createContext({
	locations: [],
	setLocations: (newValue: any) => {},
});

function App() {
	const [locations, setLocations] = useLocalStorage([]);
	return (
		<locationsContext.Provider value={{ locations, setLocations }}>
			{locations.length > 0 ? <WeatherPage /> : <SplashPage />}
		</locationsContext.Provider>
	);
}

export default App;

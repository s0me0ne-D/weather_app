import React, { useEffect, useLayoutEffect, useState } from "react";
import "./App.css";
import { SplashPage } from "./pages/SplashPage";
import { useLocalStorage } from "./hooks/useLocalStorage";
import { WeatherPage } from "./pages/WeatherPage";

function App() {
	const [location, setLocation] = useLocalStorage([]);
	return location.length > 0 ? (
		<WeatherPage location={location} />
	) : (
		<SplashPage setLocation={setLocation} />
	);
}

export default App;

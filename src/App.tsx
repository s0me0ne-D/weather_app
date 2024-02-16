import React, { useEffect, useState } from "react";
import "./App.css";
import { Provider } from "react-redux";
import { store } from "./api/store";
import { SplashPage } from "./components/SplashPage";
import { ICurrentLocation } from "./interfaces/interfaces";

function App() {
	const [location, setLocation] = useState<ICurrentLocation>({ city: false, geolocation: false });
	const [isLocation, setIsLocation] = useState(false);
	useEffect(() => {
		setIsLocation(true);
		console.log(location);
	}, [location]);
	return (
		<Provider store={store}>
			<SplashPage location={location} setLocation={setLocation} />
		</Provider>
	);
}

export default App;

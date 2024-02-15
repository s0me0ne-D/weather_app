import { useState } from "react";

export const useLocation = () => {
	const [location, setLocation] = useState<boolean | string>(false);

	if (navigator.geolocation) {
		navigator.geolocation.getCurrentPosition(success);
	}

	function success(position: any) {
		const latitude = position.coords.latitude;
		const longitude = position.coords.longitude;
		setLocation(`${latitude},${longitude}`);
	}
	return location;
};

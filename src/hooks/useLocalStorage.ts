import { useState } from "react";

export const useLocalStorage = () => {
	const [cities, setCities] = useState<false | [any]>(false);
	const storage = localStorage.getItem("locations");
	storage && setCities(JSON.parse(storage));
	return cities;
};

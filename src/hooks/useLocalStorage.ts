import { useState, useEffect } from "react";

const STORAGE_KEY = "City";

export const useLocalStorage = (initialValue: Array<string>) => {
	const getTasks = () => {
		const storage = localStorage.getItem(STORAGE_KEY);
		if (storage) {
			return JSON.parse(storage);
		}
		return initialValue;
	};
	const [value, setValue] = useState(getTasks);
	useEffect(() => {
		localStorage.setItem(STORAGE_KEY, JSON.stringify(value));
	}, [value]);
	return [value, setValue];
};

export const getLocalTime = (timeZone: string) => {
	const localTime = new Date().toLocaleTimeString("en-GB", { timeZone });
	return localTime;
};

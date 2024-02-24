export const addressHandler = (address: string) => {
	const addressArray = address.split(",");
	const cityName = addressArray[0];
	const country = addressArray.length > 1 ? addressArray[addressArray.length - 1] : undefined;
	return { cityName, country };
};

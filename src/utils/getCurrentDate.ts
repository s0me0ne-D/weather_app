export const getCurrentDate = () => {
	const date = new Date();
	const day = date.getDate();
	const month = date.getMonth() + 1;
	const year = date.getFullYear();
	const separator = "/";
	const todayDate = `${day}${separator}${month < 10 ? `0${month}` : month}${separator}${year}`;
	return todayDate;
};

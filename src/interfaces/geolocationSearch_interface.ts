export interface IGeolocationSearch {
	location: string;
	isLoading: boolean;
	error: IError;
	locationExist: boolean;
	isSuccess: boolean;
}
export interface IError {
	isError: boolean;
	message: string;
}

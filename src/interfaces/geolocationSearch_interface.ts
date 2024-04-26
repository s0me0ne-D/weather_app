export interface IGeolocationSearch {
	lookingForLocation: string;
	isLoading: boolean;
	error: IError;
	locationExist: boolean;
	isSuccess: boolean;
}
export interface IError {
	isError: boolean;
	message: string;
}

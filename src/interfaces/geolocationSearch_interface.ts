export interface IGeolocationSearch {
	lookingForLocation: string;
	isLoading: boolean;
	error: IError;
	locationExist: boolean;
	isSuccess: boolean;
	isConfirmation: boolean;
}
export interface IError {
	isError: boolean;
	message: string;
}

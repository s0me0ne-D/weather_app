export interface IGeolocationSearch {
	isLoading: boolean;
	isError: IError;
	locationExist: boolean;
}
export interface IError {
	error: boolean;
	message: string;
}

import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { IWeather } from "../interfaces/weather_interface";

const BASE_URL =
	"https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/";
const ENDPOINT_URL = "/next7days?unitGroup=uk&key=" + process.env.REACT_APP_API_KEY;

export const weatherApi = createApi({
	reducerPath: "weatherApi",
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
	}),
	endpoints: (builder) => ({
		getForecastByCity: builder.query<IWeather, string>({
			query: (city) => city + ENDPOINT_URL,
		}),
	}),
});
export const { useGetForecastByCityQuery } = weatherApi;

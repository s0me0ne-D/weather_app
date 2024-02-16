import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const BASE_URL =
	"https://visual-crossing-weather.p.rapidapi.com/forecast?aggregateHours=24&&contentType=json&unitGroup=metric&shortColumnNames=0&location=";

export const weatherApi = createApi({
	reducerPath: "weatherApi",
	baseQuery: fetchBaseQuery({
		baseUrl: BASE_URL,
		prepareHeaders: (headers) => {
			headers.set("X-RapidAPI-Host", "visual-crossing-weather.p.rapidapi.com");
			headers.set("X-RapidAPI-Key", process.env.REACT_APP_API_KEY as string);
			return headers;
		},
	}),
	endpoints: (builder) => ({
		getForecastByCity: builder.query<any, string | undefined>({
			query: (city) => `${city}`,
		}),
		getForecastByLocation: builder.query<string, undefined>({
			query: (location) => `${location}`,
		}),
	}),
});
export const { useGetForecastByCityQuery, useGetForecastByLocationQuery } = weatherApi;

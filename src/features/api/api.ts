import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { Location } from "../../vite-env";

export const locationApi = createApi({
    reducerPath: 'locationApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://us1.locationiq.com/v1/reverse'}),
    endpoints: (builder) => ({
        getLocation: builder.query<Location, {lat: number, lon: number}>({
            query: ({lat, lon}) => `?key=${import.meta.env.VITE_API_KEY}&lat=${lat}&lon=${lon}&format=json`
        })
    })
})

export const { useGetLocationQuery } = locationApi;
;
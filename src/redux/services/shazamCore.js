import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const options = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "875b8cd63bmsh7c0007f626dc4fdp1f6aa4jsnacbf250a9353",
    "X-RapidAPI-Host": "shazam-core.p.rapidapi.com",
  },
};

export const shazamCoreApi = createApi({
  reducerPath: "shazamCoreApi",
  baseQuery: fetchBaseQuery({
    baseUrl: "https://shazam-core.p.rapidapi.com/v1/",
    prepareHeaders: (headers) => {
      headers.set(
        "X-RapidAPI-Key",
        "875b8cd63bmsh7c0007f626dc4fdp1f6aa4jsnacbf250a9353"
      );
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getTopWorldCharts: builder.query({ query: () => "/charts/world" }),
  }),
});

export const { useGetTopWorldChartsQuery } = shazamCoreApi;

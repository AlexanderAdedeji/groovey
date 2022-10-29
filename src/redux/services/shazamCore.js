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
    getSongsByGenre: builder.query({
      query: (genreCode) => `/charts/genre-world?genre_code=${genreCode}`,
    }),

    getSongDetails: builder.query({
      query: ({ songid }) => `/tracks/details?track_id=${songid}`,
    }),
    getArtistDetails: builder.query({
      query: ({ artistId }) => `/artists/details?artist_id=${artistId}`,
    }),
    getRelatedSongs: builder.query({
      query: ({ songid }) => `/tracks/related?track_id=${songid}`,
    }),
    getSongsByCountry: builder.query({
      query: (country) => `/charts/country?country_code=${country}`,
    }),
    getSongsBySearch: builder.query({
      query: (search) => `/search/multi?search_type=SONGS_ARTISTS&query=${search}`,
    }),
  }),
});

export const {
  useGetTopWorldChartsQuery,
  useGetSongDetailsQuery,
  useGetRelatedSongsQuery,
  useGetArtistDetailsQuery,
  useGetSongsByCountryQuery,
  useLazyGetTopWorldChartsByGenreQuery,
  useGetSongsByGenreQuery,
  useGetSongsBySearchQuery,
} = shazamCoreApi;

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { API_ROOT } from 'constants/constants';
import { Data } from 'pages/HomePage/HomePage';

export const personsApi = createApi({
  reducerPath: 'personsApi',
  baseQuery: fetchBaseQuery({ baseUrl: API_ROOT }),
  endpoints: (build) => ({
    getPersonByName: build.query<Data, string>({
      query: (searchText) => `/people?search=${searchText}`,
    }),
  }),
});

export const { useGetPersonByNameQuery } = personsApi;

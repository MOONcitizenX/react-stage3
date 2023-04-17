import { configureStore } from '@reduxjs/toolkit';
import SearchTextReducer from './searchTextSlice';
import ReportFormsReducer from './reportFormSlice';
import { personsApi } from 'API/swapi';

export const store = configureStore({
  reducer: {
    searchText: SearchTextReducer,
    reportForms: ReportFormsReducer,
    [personsApi.reducerPath]: personsApi.reducer,
  },
  middleware: (getDefaultMiddleWare) => getDefaultMiddleWare().concat(personsApi.middleware),
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

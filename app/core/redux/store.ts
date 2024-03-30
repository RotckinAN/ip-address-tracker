import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";

import { ipifyGeoApi } from "@/app/services/ipify-geo-api";
import { ipifyApi } from "@/app/services/ipify-api";
import ipSlice from "@/app/core/redux/slices/ipSlice";

const rootReducer = combineReducers({
  [ipifyGeoApi.reducerPath]: ipifyGeoApi.reducer,
  [ipifyApi.reducerPath]: ipifyApi.reducer,
  ipify: ipSlice,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware()
      .concat(ipifyGeoApi.middleware)
      .concat(ipifyApi.middleware),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

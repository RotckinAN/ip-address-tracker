import { createSlice } from "@reduxjs/toolkit";
import { ipifyGeoApi } from "@/app/services/ipify-geo-api";
import { GeoRequest } from "@/app/types";
import { ipifyApi } from "@/app/services/ipify-api";

interface State {
  ipify: GeoRequest;
  automaticallyDeterminedIp: string | null;
  isFetching: boolean;
}

const initialState: State = {
  ipify: {
    ip: null,
    location: {
      country: null,
      region: null,
      city: null,
      lat: null,
      lng: null,
      postalCode: null,
      timezone: null,
      geonameId: null,
    },
    domains: null,
    as: {
      asn: null,
      name: null,
      route: null,
      domain: null,
      type: null,
    },
    isp: null,
  },
  automaticallyDeterminedIp: null,
  isFetching: false,
};

export const ipSlice = createSlice({
  name: "ipify",
  initialState,
  reducers: {
    setIsFetching: (state, { payload }) => {
      state.isFetching = payload;
    },
  },
  extraReducers: (build) => {
    build.addMatcher(
      ipifyGeoApi.endpoints?.getGeolocation.matchFulfilled,
      (state, { payload }) => {
        state.ipify = payload;
      }
    );
    build.addMatcher(
      ipifyApi.endpoints?.getIp.matchFulfilled,
      (state, { payload }) => {
        state.automaticallyDeterminedIp = payload.ip;
      }
    );
  },
});

export const { setIsFetching } = ipSlice.actions;

export default ipSlice.reducer;

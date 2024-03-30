import { toast } from "react-toastify";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GeoRequest } from "@/app/types";

const errorToast = (message: string) =>
  toast.error(message, { theme: "colored" });

export const ipifyGeoApi = createApi({
  reducerPath: "ipifyGeoApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.IPIFY_GEO_BASE_URL,
    prepareHeaders: async (headers) => {
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getGeolocation: builder.query<GeoRequest, string>({
      query: (ipValue) =>
        `/country,city?apiKey=${process.env.IPIFY_API_KEY}&ipAddress=${ipValue}`,
      async onQueryStarted(_, { queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
        } catch (e: any) {
          const message = e?.error;

          message &&
            errorToast(
              `status: ${message.originalStatus}, message: ${message.status}`
            );
        }
      },
    }),
  }),
});

export const { useLazyGetGeolocationQuery } = ipifyGeoApi;

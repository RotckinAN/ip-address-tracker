import { toast } from "react-toastify";
import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { GeoRequest } from "@/app/types";

const errorToast = (message: string) =>
  toast.error(message, { theme: "colored" });

export const ipifyApi = createApi({
  reducerPath: "ipifyApi",
  baseQuery: fetchBaseQuery({
    baseUrl: process.env.IPIFY_API_BASE_URL,
    prepareHeaders: async (headers) => {
      return headers;
    },
  }),
  endpoints: (builder) => ({
    getIp: builder.query<Record<"ip", string>, void>({
      query: () => `?format=json`,
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

export const { useLazyGetIpQuery } = ipifyApi;

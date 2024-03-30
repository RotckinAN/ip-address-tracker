import { useAppSelector } from "@/app/core/redux/hooks";

export type GeoLocationKey = "ip address" | "location" | "timezone" | "isp";

export const useGeoLocationResult = (): Record<
  GeoLocationKey,
  string | number | null
> => {
  const { ipify } = useAppSelector((state) => state.ipify);

  const { ip, isp } = ipify;
  const { city, region, timezone, country, postalCode } = ipify.location;

  return {
    "ip address": ip,
    location: city
      ? postalCode
        ? `${city}, ${region}, ${country}, ${postalCode}`
        : `${city}, ${region}, ${country}`
      : null,
    timezone: timezone ? `UTC ${timezone}` : null,
    isp,
  };
};

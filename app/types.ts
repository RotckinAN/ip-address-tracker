export interface GeoRequest {
  ip: null;
  location: {
    country: string | null;
    region: string | null;
    city: string | null;
    lat: number | null;
    lng: number | null;
    postalCode: string | null;
    timezone: string | null;
    geonameId: number | null;
  };
  domains: string[] | null;
  as: {
    asn: number | null;
    name: string | null;
    route: string | null;
    domain: string | null;
    type: string | null;
  };
  isp: null;
}

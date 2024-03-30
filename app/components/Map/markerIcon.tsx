import { Icon } from "leaflet";

const markerIcon = new Icon({
  iconUrl: "/images/icon-location.svg",
  iconSize: [46, 56],
  iconAnchor: [22, 55],
  popupAnchor: [-3, -76],
});

export default markerIcon;

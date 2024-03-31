"use client";

import React, { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  useMap,
  ZoomControl,
} from "react-leaflet";
import { useAppSelector } from "@/app/core/redux/hooks";
import "leaflet/dist/leaflet.css";
import markerIcon from "@/app/components/Map/markerIcon";
import { useLazyGetGeolocationQuery } from "@/app/services/ipify-geo-api";

function ChangeView({
  center,
  zoom,
}: {
  center: [number, number];
  zoom: number;
}) {
  const map = useMap();
  map.setView(center, zoom);
  return null;
}

const Map = () => {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const { ipify } = useAppSelector((state) => state.ipify);

  useEffect(() => {
    const { lat, lng } = ipify.location;

    if (lat && lng) setPosition([lat, lng]);
  }, [ipify]);

  return (
    <section className="h-full max-h-full w-full xl:max-h-[700px]">
      {position && (
        <MapContainer
          center={position}
          zoom={16}
          scrollWheelZoom={false}
          className="h-full w-full"
          zoomControl={false}
        >
          <ChangeView center={position} zoom={16} />
          <ZoomControl position="bottomleft" />
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          <Marker position={position} icon={markerIcon} />
        </MapContainer>
      )}
    </section>
  );
};

export default Map;

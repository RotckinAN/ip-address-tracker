"use client";

import React, { useEffect, useState } from "react";
import {
  MapContainer,
  Marker,
  TileLayer,
  useMap,
  ZoomControl,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import Progress from "@/app/components/Progress";
import markerIcon from "@/app/components/Map/markerIcon";
import { useAppSelector } from "@/app/core/redux/hooks";

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
  const { ipify, isFetching } = useAppSelector((state) => state.ipify);

  useEffect(() => {
    const { lat, lng } = ipify.location;

    if (lat && lng) setPosition([lat, lng]);
  }, [ipify]);

  return (
    <section className="relative flex h-full max-h-full w-full items-center justify-center xl:max-h-[700px]">
      {position ? (
        <>
          {isFetching && (
            <div className="absolute z-[1005] h-full max-h-full w-full backdrop-blur-xl xl:max-h-[700px]">
              <Progress />
            </div>
          )}

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
        </>
      ) : (
        <h6 className="z-[1011] w-3/4 rounded-xl bg-[#5365C9] p-3 text-center text-xl font-medium text-white shadow-2xl tablet:w-2/5 tablet:rounded-2xl tablet:p-5 tablet:text-2xl">
          You need to enter the IP address in the input field or put the
          checkbox in the enabled position to automatically determine the IP
          address
        </h6>
      )}
    </section>
  );
};

export default Map;

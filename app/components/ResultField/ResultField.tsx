"use client";

import React from "react";
import {
  GeoLocationKey,
  useGeoLocationResult,
} from "@/app/components/ResultField/hooks/useGeoLocationResult";

const ResultField = () => {
  const geoLocation = useGeoLocationResult();

  return (
    <article className="absolute -bottom-[82px] z-[1000] h-fit min-h-[164px] w-[77%] rounded-2xl bg-white p-8">
      <ul className="flex h-full w-full gap-6">
        {Object.keys(geoLocation).map((geoTitle) => (
          <li
            key={geoTitle}
            className="relative flex w-1/4 flex-col gap-2 pl-6 before:absolute before:-left-2 before:h-full before:w-1 before:border-l before:border-[#9696964d] first:pl-0 first:before:border-none"
          >
            <h2 className="text-sm font-medium tracking-wider text-[#969696]">
              {geoTitle?.toUpperCase()}
            </h2>
            <p className="whitespace-pre-wrap text-2xl font-medium">
              {geoLocation[geoTitle as GeoLocationKey] ?? "-"}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ResultField;

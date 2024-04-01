"use client";

import React from "react";
import {
  GeoLocationKey,
  useGeoLocationResult,
} from "@/app/components/ResultField/hooks/useGeoLocationResult";

const ResultField = () => {
  const geoLocation = useGeoLocationResult();

  return (
    <article className="absolute top-[215px] z-[1010] h-fit min-h-[164px] w-11/12 rounded-2xl bg-white p-3 shadow-xl sm:top-[215px] sm:p-8 tablet:top-[198px] tablet:shadow-2xl 1xl:w-[77%]">
      <ul className="flex h-full w-full flex-wrap gap-4 sm:gap-6 tablet:flex-nowrap">
        {Object.keys(geoLocation).map((geoTitle) => (
          <li
            key={geoTitle}
            className="relative flex w-full flex-col items-center gap-0.5 before:absolute before:-left-2 before:h-full before:w-1 before:border-l-0 before:border-[#9696964d] first:pl-0 odd:before:border-0 even:pl-0 sm:w-[calc(50%-12px)] sm:items-start sm:gap-2 sm:before:border-l sm:even:pl-6 tablet:w-1/4 tablet:pl-6 tablet:first:before:border-none tablet:odd:before:border-l"
          >
            <h2 className="text-xs font-medium tracking-wider text-[#969696] sm:text-sm">
              {geoTitle?.toUpperCase()}
            </h2>
            <p className="whitespace-pre-wrap text-center text-base font-medium sm:text-start sm:text-xl xl:text-2xl">
              {geoLocation[geoTitle as GeoLocationKey] ?? "-"}
            </p>
          </li>
        ))}
      </ul>
    </article>
  );
};

export default ResultField;

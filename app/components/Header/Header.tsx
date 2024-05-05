"use client";

import React, { ChangeEvent, useEffect, useState } from "react";

import ResultField from "@/app/components/ResultField";
import Input from "@/app/components/Input";
import Checkbox from "@/app/components/Checkbox";
import { useLazyGetGeolocationQuery } from "@/app/services/ipify-geo-api";
import { useLazyGetIpQuery } from "@/app/services/ipify-api";
import { useAppDispatch, useAppSelector } from "@/app/core/redux/hooks";
import { setIsFetching } from "@/app/core/redux/slices/ipSlice";

const Header = () => {
  const [isIpValid, setIsIpValid] = useState(true);
  const [isIpAutomatically, setIsIpAutomatically] = useState(false);
  const { automaticallyDeterminedIp } = useAppSelector((state) => state.ipify);

  const dispatch = useAppDispatch();
  const [ipTrigger, { isFetching: isGetIpQueryFetching }] = useLazyGetIpQuery();
  const [geoLocationTrigger, { isFetching: isGetGeolocationFetching }] =
    useLazyGetGeolocationQuery();

  useEffect(() => {
    if (isIpAutomatically) ipTrigger();
  }, [isIpAutomatically, ipTrigger]);

  useEffect(() => {
    if (automaticallyDeterminedIp && isIpAutomatically)
      geoLocationTrigger(automaticallyDeterminedIp);
  }, [automaticallyDeterminedIp, geoLocationTrigger, isIpAutomatically]);

  useEffect(() => {
    dispatch(setIsFetching(isGetGeolocationFetching || isGetIpQueryFetching));
  }, [isGetGeolocationFetching, isGetIpQueryFetching, dispatch]);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsIpAutomatically(event.target.checked);
  };

  return (
    <section className='relative flex h-[300px] min-h-[300px] w-full flex-col items-center justify-evenly bg-[url("/images/pattern-bg-mobile.png")] bg-cover bg-center bg-no-repeat pb-[32px] mobile:h-[280px] mobile:min-h-[280px] mobile:bg-[url("/images/pattern-bg-desktop.png")] sm:pb-[42px] tablet:pb-[82px]'>
      <Checkbox checked={isIpAutomatically} onChange={handleCheckboxChange} />

      <h1 className="mt-2 text-center text-xl font-medium tracking-wide text-white tablet:mt-4 tablet:text-3xl ">
        IP Address Tracker
      </h1>
      <Input setIsIpValid={setIsIpValid} disabled={isIpAutomatically} />

      <p
        className={`absolute bottom-[82px] text-red-500 mobile:bottom-[70px] sm:bottom-[74px] tablet:bottom-[85px] ${isIpValid || isIpAutomatically ? "hidden" : "flex"}`}
      >
        You need to enter a valid IP address!
      </p>

      <ResultField />
    </section>
  );
};

export default Header;

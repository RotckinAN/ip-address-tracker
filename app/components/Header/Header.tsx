"use client";

import React, { ChangeEvent, useEffect, useState } from "react";

import ResultField from "@/app/components/ResultField";
import Input from "@/app/components/Input";
import Checkbox from "@/app/components/Checkbox";
import { useLazyGetGeolocationQuery } from "@/app/services/ipify-geo-api";
import { useLazyGetIpQuery } from "@/app/services/ipify-api";
import { useAppSelector } from "@/app/core/redux/hooks";

const Header = () => {
  const [isIpValid, setIsIpValid] = useState(true);
  const [isIpAutomatically, setIsIpAutomatically] = useState(false);
  const { automaticallyDeterminedIp } = useAppSelector((state) => state.ipify);

  const [ipTrigger] = useLazyGetIpQuery();
  const [geoLocationTrigger] = useLazyGetGeolocationQuery();

  useEffect(() => {
    if (isIpAutomatically) ipTrigger();
  }, [isIpAutomatically, ipTrigger]);

  useEffect(() => {
    if (automaticallyDeterminedIp)
      geoLocationTrigger(automaticallyDeterminedIp);
  }, [automaticallyDeterminedIp, geoLocationTrigger]);

  const handleCheckboxChange = (event: ChangeEvent<HTMLInputElement>) => {
    setIsIpAutomatically(event.target.checked);
  };

  return (
    <section className='mobile:bg-[url("/images/pattern-bg-desktop.png")] tablet:pb-[82px] mobile:h-[280px] mobile:min-h-[280px] relative flex h-[300px] min-h-[300px] w-full flex-col items-center justify-evenly bg-[url("/images/pattern-bg-mobile.png")] bg-cover bg-center bg-no-repeat pb-[32px] sm:pb-[42px]'>
      <Checkbox checked={isIpAutomatically} onChange={handleCheckboxChange} />

      <h1 className="tablet:mt-4 mt-2 text-center text-3xl font-medium tracking-wide text-white ">
        IP Address Tracker
      </h1>
      <Input setIsIpValid={setIsIpValid} disabled={isIpAutomatically} />

      <p
        className={`absolute bottom-[92px] text-red-500 ${isIpValid ? "hidden" : "flex"}`}
      >
        You need to enter a valid IP address!
      </p>

      <ResultField />
    </section>
  );
};

export default Header;

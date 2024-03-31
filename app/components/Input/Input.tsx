import React, { Dispatch, useState } from "react";
import { isIP } from "is-ip";
import { useLazyGetGeolocationQuery } from "@/app/services/ipify-geo-api";

interface InputProps {
  setIsIpValid: Dispatch<React.SetStateAction<boolean>>;
  disabled: boolean;
}

const Input = ({ setIsIpValid, disabled }: InputProps) => {
  const [inputValue, setInputValue] = useState("");

  const [trigger, { isFetching }] = useLazyGetGeolocationQuery();

  const handleInputClick = () => {
    if (isIP(inputValue)) {
      trigger(inputValue);
      setIsIpValid(true);
    } else {
      setIsIpValid(false);
    }
  };

  return (
    <div className="tablet:mt-0 -mt-12 flex w-11/12 sm:w-fit">
      <input
        className="w-full rounded-l-2xl px-6 py-4 font-rubik text-lg focus:outline-none sm:w-[500px]"
        type="text"
        placeholder="Search for any IP address or domain"
        value={inputValue}
        onChange={(evt) => setInputValue(evt.target.value)}
        disabled={disabled || isFetching}
      />
      <button
        className="h-full w-[56px] min-w-[56px] rounded-r-2xl bg-black bg-[url('/images/icon-arrow.svg')] bg-[length:11px_16px] bg-center bg-no-repeat transition-all hover:bg-[#323232] hover:opacity-80 disabled:bg-[#323232] disabled:hover:opacity-100"
        onClick={handleInputClick}
        disabled={disabled || isFetching}
      />
    </div>
  );
};

export default Input;

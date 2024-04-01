import React, { ChangeEvent } from "react";
import { FormControlLabel, Switch, Typography } from "@mui/material";

interface CheckboxProps {
  checked: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const Checkbox = ({ checked, onChange }: CheckboxProps) => {
  return (
    <FormControlLabel
      className="absolute right-3 top-4 rounded-2xl bg-white p-1 pr-2 shadow-xl sm:p-2 sm:pr-3 xl:p-3 xl:pr-4"
      control={<Switch checked={checked} onChange={onChange} />}
      label={
        <Typography
          variant="h6"
          className="font-rubik text-base font-medium text-black tablet:text-lg xl:text-xl"
        >
          Determine your IP
        </Typography>
      }
    />
  );
};

export default Checkbox;

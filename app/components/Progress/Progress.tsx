import React from "react";
import { Box, CircularProgress } from "@mui/material";

const Progress = () => {
  return (
    <div className="h-full max-h-full w-full xl:max-h-[700px]">
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100%",
          width: "100%",
        }}
      >
        <CircularProgress />
      </Box>
    </div>
  );
};

export default Progress;

import { Box } from "@mui/material";
import React from "react";
import Navigation from "./Navigation";

const Base = ({ children }) => {
  return (
    <>
      <Box sx={{ display: "flex" }}>
        <Navigation />
        {children}
      </Box>
    </>
  );
};

export default Base;

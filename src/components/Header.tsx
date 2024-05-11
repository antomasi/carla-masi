import { useMediaQuery } from "@mui/material";
import React from "react";

export const Header = () => {
  const matches = useMediaQuery("(min-width:600px)");
  return <span>{`(min-width:600px) matches: ${matches}`}</span>;
};

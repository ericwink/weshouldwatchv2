"use client";

import { createTheme } from "@mui/material/styles";
import { deepPurple, blue } from "@mui/material/colors";

export const darkTheme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: blue,
    mode: "dark",
  },
});

export const lightTheme = createTheme({
  palette: {
    primary: deepPurple,
    secondary: blue,
    mode: "light",
  },
});

import React from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { mainTheme } from "./mainTheme";

const theme = createTheme(mainTheme);

export default function ThemeMui({ children }) {
  return <ThemeProvider theme={theme}>{children}</ThemeProvider>;
}

import React from "react";
import { ThemeProvider } from "styled-components";
import { mainTheme } from "./mainTheme";

export default function ThemeStyled({ children }) {
  return <ThemeProvider theme={mainTheme}>{children}</ThemeProvider>;
}

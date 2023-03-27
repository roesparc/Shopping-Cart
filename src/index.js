import React from "react";
import ReactDOM from "react-dom/client";
import { ThemeProvider } from "styled-components";
import RouteSwitch from "./RouteSwitch";
import GlobalStyle from "./styles/GlobalStyle";
import theme from "./styles/Theme";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouteSwitch />
    </ThemeProvider>
  </React.StrictMode>
);

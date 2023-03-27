import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { ThemeProvider } from "styled-components";
import theme from "../styles/Theme";
import "jest-styled-components";

const userClick = userEvent.click;

const renderHome = () => {
  render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <Home />
      </BrowserRouter>
    </ThemeProvider>
  );
};

describe("Home Page", () => {
  test("Renders correctly", () => {
    renderHome();
    const headerEl = screen.getByRole("heading", {
      name: /the perfect towel for every occasion/i,
    });
    const subHeaderEl = screen.getByRole("heading", {
      name: /wrap yourself in luxury/i,
    });
    const browseBtn = screen.getByRole("button", {
      name: /browse our collection/i,
    });

    expect(headerEl).toBeInTheDocument();
    expect(subHeaderEl).toBeInTheDocument();
    expect(browseBtn).toBeInTheDocument();
  });

  test("Clicking the browse button navigates the user to the shop page", () => {
    renderHome();
    const browseBtn = screen.getByRole("button", {
      name: /browse our collection/i,
    });

    expect(window.location.pathname).toEqual("/");

    act(() => userClick(browseBtn));

    expect(window.location.pathname).toEqual("/shop");
  });

  test("Layout renders correctly", () => {
    renderHome();
    const home = screen.getByTestId("home");

    expect(home).toHaveStyleRule("display", "flex");
    expect(home).toHaveStyleRule("flex-direction", "column");
    expect(home).toHaveStyleRule("justify-content", "center");
    expect(home).toHaveStyleRule("align-items", "center");
    expect(home).toHaveStyleRule("flex-grow", "1");
  });
});

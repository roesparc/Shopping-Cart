import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

const userClick = userEvent.click;

const renderHome = () => {
  render(
    <BrowserRouter>
      <Home />
    </BrowserRouter>
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
});

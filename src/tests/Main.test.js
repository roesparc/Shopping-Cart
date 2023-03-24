import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { MemoryRouter } from "react-router-dom";
import Main from "../components/Main";

let currentPage;

jest.mock("../pages/Home", () => () => (
  <div>
    <h1>Home page</h1>
  </div>
));

jest.mock("../pages/Shop", () => () => (
  <div>
    <h1>Shop page</h1>
  </div>
));

jest.mock("../pages/ProductDetails", () => () => (
  <div>
    <h1>Product Details page</h1>
  </div>
));

const renderMain = () => {
  render(
    <MemoryRouter initialEntries={[currentPage]}>
      <Main />
    </MemoryRouter>
  );
};

describe("Main component", () => {
  test("Renders Home page correctly", () => {
    currentPage = "/";
    renderMain();
    const homeHeader = screen.getByRole("heading", { name: /home page/i });

    expect(homeHeader).toBeInTheDocument();
  });

  test("Renders Shop page correctly", () => {
    currentPage = "/shop";
    renderMain();
    const shopHeader = screen.getByRole("heading", { name: /shop page/i });

    expect(shopHeader).toBeInTheDocument();
  });

  test("Renders Product Details page correctly", () => {
    currentPage = "/shop/0";
    renderMain();
    const productDetailsHeader = screen.getByRole("heading", {
      name: /product details page/i,
    });

    expect(productDetailsHeader).toBeInTheDocument();
  });
});

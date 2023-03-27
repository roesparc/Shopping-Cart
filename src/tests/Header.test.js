import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import Header from "../components/Header";
import { CartContext } from "../contexts/CartContext";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";
import { ThemeProvider } from "styled-components";
import theme from "../styles/Theme";
import "jest-styled-components";

let itemsQuantity;
let cartTotal;
let toggleCartOpen;

const userClick = userEvent.click;

const renderHeaderWithContext = () => {
  render(
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <CartContext.Provider
          value={{ itemsQuantity, cartTotal, toggleCartOpen }}
        >
          <Header />
        </CartContext.Provider>
      </BrowserRouter>
    </ThemeProvider>
  );
};

describe("Header component", () => {
  beforeEach(() => {
    itemsQuantity = 0;
    cartTotal = 0;
    toggleCartOpen = jest.fn();
  });

  test("Renders correctly", () => {
    renderHeaderWithContext();
    const headerEl = screen.getByRole("heading", { name: /towel world/i });
    const homeLink = screen.getByRole("link", { name: /home/i });
    const shopLink = screen.getByRole("link", { name: /shop/i });
    const cartBtn = screen.getByRole("button", { name: /cart button/i });

    expect(headerEl).toBeInTheDocument();
    expect(homeLink).toBeInTheDocument();
    expect(shopLink).toBeInTheDocument();
    expect(cartBtn).toBeInTheDocument();
  });

  test("Clicking on header and Home link navigates the user to the home page", () => {
    renderHeaderWithContext();
    const headerEl = screen.getByRole("heading", { name: /towel world/i });
    const homeLink = screen.getByRole("link", { name: /home/i });

    act(() => userClick(headerEl));

    expect(window.location.pathname).toBe("/");

    act(() => userClick(homeLink));

    expect(window.location.pathname).toBe("/");
  });

  test("Clicking on Shop link navigates the user to the shop page", () => {
    renderHeaderWithContext();
    const shopEl = screen.getByRole("link", { name: /shop/i });

    act(() => userClick(shopEl));

    expect(window.location.pathname).toBe("/shop");
  });

  test("Clicking on cart button toggles cart open", () => {
    renderHeaderWithContext();
    const cartBtn = screen.getByRole("button", { name: /cart button/i });

    act(() => userClick(cartBtn));

    expect(toggleCartOpen).toHaveBeenCalled();
  });

  test("Cart button should not display any quantity or cart total price when the cart is empty", () => {
    renderHeaderWithContext();
    const cartBtn = screen.getByRole("button", { name: /cart button/i });

    expect(cartBtn).not.toHaveTextContent();
  });

  test("Cart button displays the correct number of items when items are added to the cart", () => {
    itemsQuantity = 3;
    renderHeaderWithContext();
    const itemsQuantityEl = screen.getByRole("status", {
      name: /the cart has 3 items/i,
    });

    expect(itemsQuantityEl).toHaveTextContent(itemsQuantity);
  });

  test("Cart button displays the correct cart total price", () => {
    itemsQuantity = 1;
    cartTotal = 78.99;
    renderHeaderWithContext();
    const cartTotalEl = screen.getByRole("status", {
      name: /the total of your cart is \$78.99/i,
    });

    expect(cartTotalEl).toHaveTextContent(`$${cartTotal}`);
  });

  test("Cart button displays fixed value when the cart total price is above $999", () => {
    itemsQuantity = 1;
    cartTotal = 1000;
    renderHeaderWithContext();
    const cartTotalEl = screen.getByRole("status", {
      name: /the total of your cart is \$1000/i,
    });

    expect(cartTotalEl).toHaveTextContent("$999+");
  });

  test("Layout renders correctly", () => {
    renderHeaderWithContext();
    const header = screen.getByRole("banner");
    const nav = screen.getByRole("navigation");

    expect(header).toHaveStyleRule("display", "flex");
    expect(header).toHaveStyleRule("justify-content", "space-around");
    expect(header).toHaveStyleRule("align-items", "center");
    expect(header).toHaveStyleRule("position", "sticky");
    expect(header).toHaveStyleRule("top", "0");

    expect(nav).toHaveStyleRule("display", "flex");
    expect(nav).toHaveStyleRule("align-items", "center");
    expect(nav).toHaveStyleRule("gap", "3rem");
  });
});

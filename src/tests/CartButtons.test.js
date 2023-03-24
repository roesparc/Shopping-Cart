import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import CartButtons from "../components/shared/CartButtons";
import { CartContext } from "../contexts/CartContext";
import { act } from "react-dom/test-utils";

let cartItems;
let updateCart;
let product = { id: 0, name: "product", cartQuantity: 3 };

const userClick = userEvent.click;

const renderShopWithContext = () => {
  render(
    <BrowserRouter>
      <CartContext.Provider value={{ cartItems, updateCart }}>
        <CartButtons product={product} />
      </CartContext.Provider>
    </BrowserRouter>
  );
};

describe("CartButtons component", () => {
  beforeEach(() => {
    cartItems = [];
    updateCart = jest.fn();
  });

  test("Renders correctly", () => {
    renderShopWithContext();
    const addToCartBtn = screen.getByRole("button", { name: /add to cart/i });
    const increaseQuantityButton = screen.queryByRole("button", {
      name: /increase cart quantity/i,
    });
    const decreaseQuantityButton = screen.queryByRole("button", {
      name: /decrease cart quantity/i,
    });
    const productCartQuantity = screen.queryByRole("status", {
      name: /product cart quantity/i,
    });

    expect(addToCartBtn).toBeInTheDocument();
    expect(increaseQuantityButton).not.toBeInTheDocument();
    expect(decreaseQuantityButton).not.toBeInTheDocument();
    expect(productCartQuantity).not.toBeInTheDocument();
  });

  test("Clicking add to cart button send correct parameters for updating the cart", () => {
    renderShopWithContext();
    const addToCartBtn = screen.getByRole("button", { name: /add to cart/i });

    act(() => userClick(addToCartBtn));

    expect(updateCart).toHaveBeenCalledWith(product, "add");
  });

  test("When the passed product is in the cart, cart buttons are displayed to adjust cart quantity and show how many are in the cart", () => {
    cartItems.push({ ...product });
    renderShopWithContext();
    const addToCartBtn = screen.queryByRole("button", { name: /add to cart/i });
    const increaseQuantityButton = screen.getByRole("button", {
      name: /increase cart quantity/i,
    });
    const decreaseQuantityButton = screen.getByRole("button", {
      name: /decrease cart quantity/i,
    });
    const productCartQuantity = screen.getByRole("status", {
      name: /product cart quantity/i,
    });

    expect(addToCartBtn).not.toBeInTheDocument();
    expect(increaseQuantityButton).toBeInTheDocument();
    expect(decreaseQuantityButton).toBeInTheDocument();
    expect(productCartQuantity).toBeInTheDocument();
    expect(productCartQuantity).toHaveTextContent(`${product.cartQuantity}`);
  });

  test("Clicking the increase quantity and decrease quantity buttons send correct parameters for updating the cart", () => {
    cartItems.push({ ...product });
    renderShopWithContext();
    const increaseQuantityButton = screen.getByRole("button", {
      name: /increase cart quantity/i,
    });
    const decreaseQuantityButton = screen.getByRole("button", {
      name: /decrease cart quantity/i,
    });

    act(() => userClick(increaseQuantityButton));
    act(() => userClick(decreaseQuantityButton));

    expect(updateCart).nthCalledWith(1, product, "increase");
    expect(updateCart).nthCalledWith(2, product, "decrease");
  });
});

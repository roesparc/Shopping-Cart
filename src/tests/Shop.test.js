import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import Shop from "../pages/Shop";
import { act } from "react-dom/test-utils";
import products from "../assets/productsData";

let cartItems;
let updateCart;

const userClick = userEvent.click;

jest.mock("../assets/productsData", () => [
  {
    id: 0,
    name: "Mock Product 1",
    color: "white",
    price: 10,
    decription: "first description",
    image: "mocked_image_url_1",
  },
  {
    id: 1,
    name: "Mock Product 2",
    color: "black",
    price: 20,
    decription: "second description",
    image: "mocked_image_url_2",
  },
  {
    id: 2,
    name: "Mock Product 3",
    color: "red",
    price: 30,
    decription: "third description",
    image: "mocked_image_url_3",
  },
]);

const renderShopWithContext = () => {
  render(
    <BrowserRouter>
      <CartContext.Provider value={{ cartItems, updateCart }}>
        <Shop />
      </CartContext.Provider>
    </BrowserRouter>
  );
};

describe("Shop Page", () => {
  beforeEach(() => {
    cartItems = [];
    updateCart = jest.fn();
  });

  test("Renders correctly", () => {
    renderShopWithContext();
    const productListEl = screen.getByRole("list", { name: /product list/i });
    const productEl = screen.getByRole("listitem", {
      name: /mock product 1 - white/i,
    });
    const productEls = screen.getAllByRole("listitem", { name: /product:/i });
    const productLinkEls = screen.getAllByRole("link", {
      name: /view product/i,
    });
    const productImgs = screen.getAllByRole("img", { name: /product image/i });
    const ProductDetailsEls = screen.getAllByRole("region", {
      name: /product details/i,
    });
    const addToCartBtns = screen.getAllByRole("button", {
      name: /add to cart/i,
    });

    expect(productListEl).toBeInTheDocument();
    expect(productEl).toBeInTheDocument();
    expect(productEls).toHaveLength(3);
    expect(productLinkEls).toHaveLength(3);
    expect(productImgs).toHaveLength(3);
    expect(productImgs[0]).toHaveAttribute("src", "mocked_image_url_1");
    expect(ProductDetailsEls).toHaveLength(3);
    expect(ProductDetailsEls[0]).toHaveTextContent("Mock Product 1white$10");
    expect(addToCartBtns).toHaveLength(3);
  });

  test("Clicking a product navigates the user to the product details page", () => {
    renderShopWithContext();
    const productLinks = screen.getAllByRole("link", {
      name: /view product/i,
    });

    productLinks.forEach((productLink, index) => {
      const productImage = screen.getAllByRole("img", {
        name: /product image/i,
      })[index];
      const productDetails = screen.getAllByRole("region", {
        name: /product details/i,
      })[index];

      act(() => userClick(productLink));
      expect(window.location.pathname).toBe(`/${index}`);
      act(() => userClick(productImage));
      expect(window.location.pathname).toBe(`/${index}`);
      act(() => userClick(productDetails));
      expect(window.location.pathname).toBe(`/${index}`);
    });
  });

  test("Clicking add to cart button updates cart", () => {
    renderShopWithContext();
    const addToCartBtns = screen.getAllByRole("button", {
      name: /add to cart/i,
    });

    act(() => userClick(addToCartBtns[0]));

    expect(updateCart).toHaveBeenCalledWith(products[0], "add");
  });

  test("When a product is in the cart, cart buttons are displayed to adjust cart quantity and show how many are in the cart", () => {
    const productInCart = { ...products[0], cartQuantity: 5 };
    cartItems.push(productInCart);
    renderShopWithContext();
    const productElements = screen.getAllByRole("listitem", {
      name: /product:/i,
    });
    const increaseQuantityButton = screen.getByRole("button", {
      name: /increase cart quantity/i,
    });
    const decreaseQuantityButton = screen.getByRole("button", {
      name: /decrease cart quantity/i,
    });
    const productCartQuantity = screen.getByRole("status", {
      name: /product cart quantity/i,
    });

    expect(productElements[0]).toContainElement(increaseQuantityButton);
    expect(productElements[0]).toContainElement(decreaseQuantityButton);
    expect(productElements[0]).toContainElement(productCartQuantity);
    expect(productCartQuantity).toHaveTextContent("5");

    expect(productElements[1]).not.toContainElement(increaseQuantityButton);
    expect(productElements[1]).not.toContainElement(decreaseQuantityButton);
    expect(productElements[1]).not.toContainElement(productCartQuantity);

    expect(productElements[2]).not.toContainElement(increaseQuantityButton);
    expect(productElements[2]).not.toContainElement(decreaseQuantityButton);
    expect(productElements[2]).not.toContainElement(productCartQuantity);

    act(() => userClick(increaseQuantityButton));
    act(() => userClick(decreaseQuantityButton));

    expect(updateCart).toHaveBeenCalledWith(products[0], "increase");
    expect(updateCart).toHaveBeenCalledWith(products[0], "decrease");
  });
});

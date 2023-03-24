import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import Shop from "../pages/Shop";
import { act } from "react-dom/test-utils";
import products from "../assets/productsData";

let cartItems = [];
let updateCart = jest.fn();

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
  test("Renders correctly", () => {
    renderShopWithContext();
    const productListEl = screen.getByRole("list", { name: /product list/i });
    const productEls = screen.getAllByRole("listitem", { name: /product:/i });
    const productLinkEls = screen.getAllByRole("link", {
      name: /view product/i,
    });
    const productImages = screen.getAllByRole("img", {
      name: /product image/i,
    });
    const ProductDetailsEls = screen.getAllByRole("region", {
      name: /product details/i,
    });
    const addToCartBtns = screen.getAllByRole("button", {
      name: /add to cart/i,
    });

    expect(productListEl).toBeInTheDocument();
    expect(productEls).toHaveLength(3);
    expect(productLinkEls).toHaveLength(3);
    expect(productImages).toHaveLength(3);
    expect(ProductDetailsEls).toHaveLength(3);
    expect(addToCartBtns).toHaveLength(3);
  });

  test("Product cards render with the correct information", () => {
    renderShopWithContext();
    screen
      .getAllByRole("listitem", { name: /product:/i })
      .forEach((product, index) => {
        const productImage = screen.getAllByRole("img", {
          name: /product image/i,
        })[index];
        const productDetails = screen.getAllByRole("region", {
          name: /product details/i,
        })[index];
        const productData = products[index];

        expect(product).toHaveAttribute(
          "aria-label",
          `Product: ${productData.name} - ${productData.color}`
        );
        expect(product).toContainElement(productImage);
        expect(product).toContainElement(productDetails);
        expect(productImage).toHaveAttribute("src", productData.image);
        expect(productDetails).toHaveTextContent(
          `${productData.name}${productData.color}$${productData.price}`
        );
      });
  });

  test("Clicking a product navigates the user to the product details page", () => {
    renderShopWithContext();
    screen
      .getAllByRole("link", { name: /view product/i })
      .forEach((productLink, index) => {
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
});

import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import userEvent from "@testing-library/user-event";
import { BrowserRouter } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import ProductDetails from "../pages/ProductDetails";
import products from "../assets/productsData";
import { act } from "react-dom/test-utils";

let cartItems = [];
let updateCart = jest.fn();

const userClick = userEvent.click;

jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useParams: () => ({ id: "0" }),
}));

jest.mock("../assets/productsData", () => [
  {
    id: 0,
    name: "Mock Product 1",
    color: "white",
    price: 10,
    description: "first description",
    image: "mocked_image_url_1",
  },
]);

const renderProductDetailsWithContext = () => {
  render(
    <BrowserRouter>
      <CartContext.Provider value={{ cartItems, updateCart }}>
        <ProductDetails />
      </CartContext.Provider>
    </BrowserRouter>
  );
};

describe("ProductDetails page", () => {
  test("Renders correctly", () => {
    renderProductDetailsWithContext();
    const backBtn = screen.getByRole("button", { name: /back/i });
    const productImage = screen.getByRole("img", { name: /product image/i });
    const productDetails = screen.getByRole("region", {
      name: /product details/i,
    });
    const addToCartBtn = screen.getByRole("button", { name: /add to cart/i });

    expect(backBtn).toBeInTheDocument();
    expect(productImage).toBeInTheDocument();
    expect(productDetails).toBeInTheDocument();
    expect(addToCartBtn).toBeInTheDocument();
  });

  test("Product details page renders with the correct information", () => {
    renderProductDetailsWithContext();
    const product = products[0];
    const productImage = screen.getByRole("img", { name: /product image/i });
    const productDetails = screen.getByRole("region", {
      name: /product details/i,
    });
    const productTitle = screen.getByRole("heading", {
      name: `${product.name} - ${product.color}`,
    });
    const description = within(productDetails).getByText(
      `${product.description}`
    );
    const price = within(productDetails).getByText(`$${product.price}`);

    expect(productImage).toHaveAttribute("src", `${product.image}`);
    expect(productTitle).toBeInTheDocument();
    expect(description).toBeInTheDocument();
    expect(price).toBeInTheDocument();
  });

  test("Back button click navigates user to Shop page", () => {
    renderProductDetailsWithContext();
    const backBtn = screen.getByRole("button", { name: /back/i });

    act(() => userClick(backBtn));

    expect(window.location.pathname).toBe("/shop");
  });
});

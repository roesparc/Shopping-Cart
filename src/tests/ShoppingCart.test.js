import { render, screen, within } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter } from "react-router-dom";
import ShoppingCart from "../components/ShoppingCart";
import { CartContext } from "../contexts/CartContext";
import userEvent from "@testing-library/user-event";
import { act } from "react-dom/test-utils";

let cartItems;
let cartOpen;
let cartTotal;
let toggleCartOpen;

const userClick = userEvent.click;

const cartItemsArray = [
  {
    id: 0,
    name: "Product 1",
    color: "white",
    price: 10,
    image: "image_url_1",
    cartQuantity: 1,
  },
  {
    id: 1,
    name: "Product 2",
    color: "black",
    price: 20,
    image: "image_url_2",
    cartQuantity: 2,
  },
  {
    id: 2,
    name: "Product 3",
    color: "red",
    price: 30,
    image: "image_url_3",
    cartQuantity: 3,
  },
];

const renderShoppingCartWithContext = () => {
  render(
    <BrowserRouter>
      <CartContext.Provider
        value={{ cartItems, cartOpen, cartTotal, toggleCartOpen }}
      >
        <ShoppingCart />
      </CartContext.Provider>
    </BrowserRouter>
  );
};

describe("ShoppingCart component", () => {
  beforeEach(() => {
    cartItems = cartItemsArray;
    cartOpen = true;
    cartTotal = 100;
    toggleCartOpen = jest.fn();
  });

  test("Shopping cart is not visible when cart is closed", () => {
    cartOpen = false;
    renderShoppingCartWithContext();
    const overlay = screen.getByTestId("shopping-cart-overlay");
    const shoppingCart = screen.getByTestId("shopping-cart");

    expect(overlay).toHaveStyle("transform: translateX(100%)");
    expect(shoppingCart).toHaveStyle("transform: translateX(100%)");
  });

  test("Shopping cart is visible when cart is open", () => {
    renderShoppingCartWithContext();
    const overlay = screen.getByTestId("shopping-cart-overlay");
    const shoppingCart = screen.getByTestId("shopping-cart");

    expect(overlay).toHaveStyle("transform: translateX(0)");
    expect(shoppingCart).toHaveStyle("transform: translateX(0)");
  });

  test("Clicking the overlay and close cart button closes the cart", () => {
    renderShoppingCartWithContext();
    const overlay = screen.getByTestId("shopping-cart-overlay");
    const closeCartBtn = screen.getByRole("button", { name: /close cart/i });

    act(() => userClick(overlay));
    act(() => userClick(closeCartBtn));

    expect(toggleCartOpen).toBeCalledTimes(2);
  });

  test("Renders correct information when the cart is empty", () => {
    cartItems = [];
    renderShoppingCartWithContext();
    const closeCartBtn = screen.getByRole("button", { name: /close cart/i });
    const emptyCartHeader = screen.getByRole("heading", {
      name: /your cart is empty/i,
    });
    const myCartHeader = screen.queryByRole("heading", { name: /my cart/i });
    const cartProducts = screen.queryByRole("list", { name: /your cart has/i });
    const subtotal = screen.queryByRole("heading", { name: /subtotal/i });
    const checkoutBtn = screen.queryByRole("button", { name: /checkout/i });

    expect(closeCartBtn).toBeInTheDocument();
    expect(emptyCartHeader).toBeInTheDocument();
    expect(myCartHeader).not.toBeInTheDocument();
    expect(cartProducts).not.toBeInTheDocument();
    expect(subtotal).not.toBeInTheDocument();
    expect(checkoutBtn).not.toBeInTheDocument();
  });

  test("Renders correct information when cart has items", () => {
    renderShoppingCartWithContext();
    const closeCartBtn = screen.getByRole("button", { name: /close cart/i });
    const emptyCartHeader = screen.queryByRole("heading", {
      name: /your cart is empty/i,
    });
    const myCartHeader = screen.getByRole("heading", { name: /my cart/i });
    const cartProducts = screen.getByRole("list", {
      name: `Your cart has ${cartItems.length} different products`,
    });
    const subtotal = screen.getByRole("heading", { name: /subtotal/i });
    const checkoutBtn = screen.getByRole("button", { name: /checkout/i });

    expect(closeCartBtn).toBeInTheDocument();
    expect(emptyCartHeader).not.toBeInTheDocument();
    expect(myCartHeader).toBeInTheDocument();
    expect(cartProducts).toBeInTheDocument();
    expect(subtotal).toBeInTheDocument();
    expect(subtotal).toHaveTextContent(`$${cartTotal}`);
    expect(checkoutBtn).toBeInTheDocument();
  });

  test("Products in cart render with the correct informartion", () => {
    renderShoppingCartWithContext();
    screen
      .getAllByRole("listitem", { name: /product:/i })
      .forEach((product, index) => {
        const productImage = screen.getAllByRole("img", {
          name: /product/i,
        })[index];
        const decreaseQuantityButton = screen.getAllByRole("button", {
          name: /decrease cart quantity/i,
        })[index];
        const increaseQuantityButton = screen.getAllByRole("button", {
          name: /increase cart quantity/i,
        })[index];
        const productCartQuantity = screen.getAllByRole("status", {
          name: /product cart quantity/i,
        })[index];
        const itemData = cartItems[index];

        expect(product).toHaveAttribute(
          "aria-label",
          `Product: ${itemData.name} - ${itemData.color}`
        );
        expect(product).toContainElement(productImage);
        expect(productImage).toHaveAttribute("src", itemData.image);
        expect(product).toContainElement(decreaseQuantityButton);
        expect(product).toContainElement(increaseQuantityButton);
        expect(product).toContainElement(productCartQuantity);
        expect(productCartQuantity).toHaveTextContent(
          `${itemData.cartQuantity}`
        );
        expect(product).toHaveTextContent(
          `${itemData.name}${itemData.color}$${(
            itemData.price * itemData.cartQuantity
          ).toFixed(2)}`
        );
      });
  });

  test("Clicking a product navigates the user to the product details page", () => {
    renderShoppingCartWithContext();
    screen
      .getAllByRole("link", { name: /product/i })
      .forEach((productLink, index) => {
        const productImage = screen.getAllByRole("img", {
          name: /product/i,
        })[index];
        const productName = within(productLink).getByText(
          `${cartItems[index].name}`
        );
        const productColor = within(productLink).getByText(
          `${cartItems[index].color}`
        );

        act(() => userClick(productLink));
        expect(window.location.pathname).toBe(`/shop/${index}`);
        act(() => userClick(productImage));
        expect(window.location.pathname).toBe(`/shop/${index}`);
        act(() => userClick(productName));
        expect(window.location.pathname).toBe(`/shop/${index}`);
        act(() => userClick(productColor));
        expect(window.location.pathname).toBe(`/shop/${index}`);
      });
  });
});

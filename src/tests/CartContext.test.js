import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { useContext, useEffect } from "react";
import { act } from "react-dom/test-utils";
import { CartContext, CartProvider } from "../contexts/CartContext";

let cartItemsCopy;
let cartOpenCopy;
let itemsQuantityCopy;
let cartTotalCopy;
let item;

const userClick = userEvent.click;

const renderMockWithContext = () => {
  render(
    <CartProvider>
      <MockComponent />
    </CartProvider>
  );
};

const MockComponent = () => {
  const {
    cartItems,
    cartOpen,
    itemsQuantity,
    cartTotal,
    updateCart,
    toggleCartOpen,
  } = useContext(CartContext);

  useEffect(() => {
    cartItemsCopy = cartItems;
    cartOpenCopy = cartOpen;
    itemsQuantityCopy = itemsQuantity;
    cartTotalCopy = cartTotal;
  }, [cartItems, cartOpen, itemsQuantity, cartTotal]);

  return (
    <>
      <button onClick={() => updateCart(item, "add")}>Add to Cart</button>
      <button onClick={() => updateCart(item, "increase")}>
        Increase Quantity
      </button>
      <button onClick={() => updateCart(item, "decrease")}>
        Decrease Quantity
      </button>
      <button onClick={toggleCartOpen}>Toggle Cart Open</button>
    </>
  );
};

describe("CartContext", () => {
  describe("Test initial values", () => {
    test("Initial cartItems value is an empty array", () => {
      renderMockWithContext();

      expect(Array.isArray(cartItemsCopy)).toBeTruthy();
      expect(cartItemsCopy.length).toBe(0);
    });

    test("Initial cartOpen value is false", () => {
      renderMockWithContext();

      expect(cartOpenCopy).toBeFalsy();
    });

    test("Initial itemsQuantity value is zero", () => {
      renderMockWithContext();

      expect(itemsQuantityCopy).toBe(0);
    });
  });

  describe("Test updateCart function behavior", () => {
    test("Item is added to the cart", () => {
      renderMockWithContext();
      const addToCartBtn = screen.getByRole("button", { name: "Add to Cart" });

      item = { id: 1, name: "item 1", price: 10 };
      act(() => userClick(addToCartBtn));

      expect(cartItemsCopy).toHaveLength(1);
      expect(cartItemsCopy).toContainEqual(item);
      expect(cartItemsCopy[0]).toHaveProperty("cartQuantity", 1);
      expect(itemsQuantityCopy).toBe(1);
      expect(cartTotalCopy).toBe(10);
    });

    test("Multiple items are added to the cart", () => {
      renderMockWithContext();
      const addToCartBtn = screen.getByRole("button", { name: "Add to Cart" });

      item = { id: 1, name: "item 1", price: 10 };
      act(() => userClick(addToCartBtn));
      item = { id: 2, name: "item 2", price: 10 };
      act(() => userClick(addToCartBtn));
      item = { id: 3, name: "item 3", price: 10 };
      act(() => userClick(addToCartBtn));

      expect(cartItemsCopy).toHaveLength(3);
      expect(cartItemsCopy).toEqual([
        { id: 1, name: "item 1", price: 10, cartQuantity: 1 },
        { id: 2, name: "item 2", price: 10, cartQuantity: 1 },
        { id: 3, name: "item 3", price: 10, cartQuantity: 1 },
      ]);
      expect(itemsQuantityCopy).toBe(3);
      expect(cartTotalCopy).toBe(30);
    });

    test("Item's cart quantity is increased", () => {
      renderMockWithContext();
      const addToCartBtn = screen.getByRole("button", { name: "Add to Cart" });
      const increaseQuantityBtn = screen.getByRole("button", {
        name: "Increase Quantity",
      });

      item = { id: 1, name: "item 1", price: 10 };
      act(() => userClick(addToCartBtn));
      act(() => userClick(increaseQuantityBtn));
      act(() => userClick(increaseQuantityBtn));

      expect(cartItemsCopy).toHaveLength(1);
      expect(cartItemsCopy).toContainEqual(item);
      expect(cartItemsCopy[0]).toHaveProperty("cartQuantity", 3);
      expect(itemsQuantityCopy).toBe(3);
      expect(cartTotalCopy).toBe(30);
    });

    test("Item's cart quantity is decreased and deleted from the cart when the quantity reaches zero", () => {
      renderMockWithContext();
      const addToCartBtn = screen.getByRole("button", { name: "Add to Cart" });
      const increaseQuantityBtn = screen.getByRole("button", {
        name: "Increase Quantity",
      });
      const decreaseQuantityBtn = screen.getByRole("button", {
        name: "Decrease Quantity",
      });

      item = { id: 1, name: "item 1", price: 10 };
      act(() => userClick(addToCartBtn));
      act(() => userClick(increaseQuantityBtn));
      act(() => userClick(decreaseQuantityBtn));

      expect(cartItemsCopy).toHaveLength(1);
      expect(cartItemsCopy).toContainEqual(item);
      expect(cartItemsCopy[0]).toHaveProperty("cartQuantity", 1);
      expect(itemsQuantityCopy).toBe(1);
      expect(cartTotalCopy).toBe(10);

      act(() => userClick(decreaseQuantityBtn));
      expect(cartItemsCopy).toHaveLength(0);
      expect(itemsQuantityCopy).toBe(0);
      expect(cartTotalCopy).toBe(0);
    });
  });

  describe("Test toggleCartOpen function behavior", () => {
    test("Cart toggles between open and close when it's clicked", () => {
      renderMockWithContext();
      const toggleCartOpenBtn = screen.getByRole("button", {
        name: "Toggle Cart Open",
      });

      act(() => userClick(toggleCartOpenBtn));

      expect(cartOpenCopy).toBeTruthy();

      act(() => userClick(toggleCartOpenBtn));

      expect(cartOpenCopy).toBeFalsy();
    });
  });
});

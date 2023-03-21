import { createContext, useState, useEffect, useCallback } from "react";

const CartContext = createContext();

const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [itemsQuantity, setItemsQuantity] = useState(0);
  const [cartTotal, setCartTotal] = useState(0);

  useEffect(() => {
    setItemsQuantity(() =>
      cartItems.reduce((quantity, item) => quantity + item.cartQuantity, 0)
    );

    setCartTotal(() =>
      cartItems.reduce(
        (total, item) => total + item.cartQuantity * item.price,
        0
      )
    );
  }, [cartItems]);

  const updateCart = useCallback((item, action) => {
    setCartItems((prev) => {
      const updatedCartItems = [...prev];
      const itemIndex = updatedCartItems.findIndex(
        (cartItem) => cartItem.id === item.id
      );

      if (action === "add") {
        updatedCartItems.push({ ...item, cartQuantity: 1 });
      } else {
        const newQuantity =
          updatedCartItems[itemIndex].cartQuantity +
          (action === "increase" ? 1 : -1);

        if (newQuantity > 0) {
          updatedCartItems.splice(itemIndex, 1, {
            ...item,
            cartQuantity: newQuantity,
          });
        } else {
          updatedCartItems.splice(itemIndex, 1);
        }
      }

      return updatedCartItems;
    });
  }, []);

  const toggleCartOpen = useCallback(() => {
    setCartOpen((prev) => !prev);
  }, []);

  const value = {
    cartItems,
    cartOpen,
    itemsQuantity,
    cartTotal,
    updateCart,
    toggleCartOpen,
  };

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};

export { CartContext, CartProvider };

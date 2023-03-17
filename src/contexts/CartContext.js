import { createContext, useState, useEffect } from "react";

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

  const updateCart = (item, action) => {
    setCartItems((prev) => {
      const itemIndex = prev.findIndex((cartItem) => cartItem.id === item.id);
      const updatedCartItems = [...prev];

      switch (action) {
        case "add":
          item.cartQuantity = 1;
          updatedCartItems.push(item);
          break;

        case "increase":
          updatedCartItems[itemIndex].cartQuantity += 1;
          break;

        case "decrease":
          updatedCartItems[itemIndex].cartQuantity -= 1;
          if (updatedCartItems[itemIndex].cartQuantity <= 0) {
            updatedCartItems.splice(itemIndex, 1);
          }
          break;

        default:
          break;
      }

      return updatedCartItems;
    });
  };

  const toggleCartOpen = () => {
    setCartOpen((prev) => !prev);
  };

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

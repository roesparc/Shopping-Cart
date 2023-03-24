import { object } from "prop-types";
import { useContext, useEffect, useState } from "react";
import { CartContext } from "../../contexts/CartContext";
import styles from "../../styles/StyledCartButtons";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartButtons = ({ product }) => {
  const { cartItems, updateCart } = useContext(CartContext);
  const [productCartQuantity, setProductCartQuantity] = useState(0);

  useEffect(() => {
    const foundProduct = cartItems.find(
      (cartItem) => cartItem.id === product.id
    );
    setProductCartQuantity(foundProduct ? foundProduct.cartQuantity : 0);
  }, [cartItems, product]);

  return (
    <styles.StyledCartButtons data-testid="cart-buttons-container">
      {productCartQuantity > 0 ? (
        <>
          <button
            aria-label="Decrease cart quantity"
            onClick={() => updateCart(product, "decrease")}
          >
            <FaMinus />
          </button>

          <styles.ProductQuantity
            aria-label="Product cart quantity"
            role="status"
          >
            {productCartQuantity}
          </styles.ProductQuantity>

          <button
            aria-label="Increase cart quantity"
            onClick={() => updateCart(product, "increase")}
          >
            <FaPlus />
          </button>
        </>
      ) : (
        <button onClick={() => updateCart(product, "add")}>Add to cart</button>
      )}
    </styles.StyledCartButtons>
  );
};

CartButtons.propTypes = {
  product: object.isRequired,
};

export default CartButtons;

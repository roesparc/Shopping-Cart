import { array, object, oneOf, oneOfType } from "prop-types";
import { useContext } from "react";
import { CartContext } from "../../contexts/CartContext";
import styles from "../../styles/StyledCartButtonsContainer";
import { FaMinus, FaPlus } from "react-icons/fa";

const CartButtonsContainer = ({ product, cartItems }) => {
  const { updateCart } = useContext(CartContext);

  return (
    <styles.StyledCartButtonsContainer data-testid="cart-buttons-container">
      <button
        aria-label="Decrease cart quantity"
        onClick={() => updateCart(product, "decrease")}
      >
        <FaMinus />
      </button>

      <styles.ProductQuantity aria-label="Product cart quantity" role="status">
        {cartItems
          ? cartItems.find((item) => item.id === product.id).cartQuantity
          : product.cartQuantity}
      </styles.ProductQuantity>

      <button
        aria-label="Increase cart quantity"
        onClick={() => updateCart(product, "increase")}
      >
        <FaPlus />
      </button>
    </styles.StyledCartButtonsContainer>
  );
};

CartButtonsContainer.propTypes = {
  product: object.isRequired,
  cartItems: oneOfType([array, oneOf([null])]),
};

export default CartButtonsContainer;

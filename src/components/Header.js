import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { RiShoppingCartFill } from "react-icons/ri";
import styles from "../styles/StyledHeader";

const Cart = () => {
  const { itemsQuantity, cartTotal, toggleCartOpen } = useContext(CartContext);

  return (
    <styles.StyledCart aria-label="Cart button" onClick={toggleCartOpen}>
      <RiShoppingCartFill />

      {itemsQuantity > 0 && (
        <>
          <styles.ItemsQuantity
            aria-label={`The cart has ${itemsQuantity} items`}
            role="status"
          >
            {itemsQuantity}
          </styles.ItemsQuantity>
          <styles.CartTotal
            aria-label={`The total of your cart is $${cartTotal}`}
            role="status"
          >
            {cartTotal > 999 ? "$999+" : `$${cartTotal}`}
          </styles.CartTotal>
        </>
      )}
    </styles.StyledCart>
  );
};

const Header = () => (
  <styles.StyledHeader>
    <Link to="/">
      <h1>Towel World</h1>
    </Link>

    <nav>
      <Link to="/">Home</Link>

      <Link to="/shop">Shop</Link>

      <Cart />
    </nav>
  </styles.StyledHeader>
);

export default Header;

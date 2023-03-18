import { useContext } from "react";
import { Link } from "react-router-dom";
import styles from "../styles/Header.module.css";
import { CartContext } from "../contexts/CartContext";
import { RiShoppingCartFill } from "react-icons/ri";

const Cart = () => {
  const { itemsQuantity, cartTotal, toggleCartOpen } = useContext(CartContext);

  return (
    <button
      aria-label="Cart button"
      className={styles.cart}
      onClick={toggleCartOpen}
    >
      <RiShoppingCartFill />

      {itemsQuantity > 0 && (
        <>
          <span
            aria-label={`The cart has ${itemsQuantity} items`}
            role="status"
            className={styles.itemsQuantity}
          >
            {itemsQuantity}
          </span>
          <span
            aria-label={`The total of your cart is $${cartTotal}`}
            role="status"
            className={styles.cartTotal}
          >
            {cartTotal > 999 ? "$999+" : `$${cartTotal}`}
          </span>
        </>
      )}
    </button>
  );
};

const Header = () => (
  <header className={styles.header}>
    <Link className={styles.title} to="/">
      <h1>Towel World</h1>
    </Link>

    <nav className={styles.nav}>
      <Link className={styles.home} to="/">
        Home
      </Link>

      <Link className={styles.shop} to="/shop">
        Shop
      </Link>

      <Cart />
    </nav>
  </header>
);

export default Header;

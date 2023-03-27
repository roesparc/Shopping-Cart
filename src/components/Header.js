import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import { RiShoppingCartFill } from "react-icons/ri";
import styles from "../styles/StyledHeader";
import StyledLink from "../styles/Elements/StyledLink";
import StyledButton from "../styles/Elements/StyledButton";

const Cart = () => {
  const { itemsQuantity, cartTotal, toggleCartOpen } = useContext(CartContext);

  return (
    <StyledButton aria-label="Cart button" onClick={toggleCartOpen} $biggerFont>
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
            aria-label={`The total of your cart is $${cartTotal.toFixed(2)}`}
            role="status"
          >
            {cartTotal > 999 ? "$999+" : `$${cartTotal.toFixed(2)}`}
          </styles.CartTotal>
        </>
      )}
    </StyledButton>
  );
};

const Header = () => (
  <styles.StyledHeader>
    <StyledLink to="/">
      <styles.NameLogo>Towel World</styles.NameLogo>
    </StyledLink>

    <styles.HeaderNav>
      <StyledLink to="/" $hover>
        Home
      </StyledLink>

      <StyledLink to="/shop" $hover>
        Shop
      </StyledLink>

      <Cart />
    </styles.HeaderNav>
  </styles.StyledHeader>
);

export default Header;

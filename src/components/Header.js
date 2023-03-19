import { useContext } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../contexts/CartContext";
import { RiShoppingCartFill } from "react-icons/ri";
import styled from "styled-components";

const Cart = () => {
  const { itemsQuantity, cartTotal, toggleCartOpen } = useContext(CartContext);

  return (
    <StyledCart aria-label="Cart button" onClick={toggleCartOpen}>
      <RiShoppingCartFill />

      {itemsQuantity > 0 && (
        <>
          <ItemsQuantity
            aria-label={`The cart has ${itemsQuantity} items`}
            role="status"
          >
            {itemsQuantity}
          </ItemsQuantity>
          <CartTotal
            aria-label={`The total of your cart is $${cartTotal}`}
            role="status"
          >
            {cartTotal > 999 ? "$999+" : `$${cartTotal}`}
          </CartTotal>
        </>
      )}
    </StyledCart>
  );
};

const Header = () => (
  <StyledHeader>
    <Link to="/">
      <h1>Towel World</h1>
    </Link>

    <Nav>
      <Link to="/">Home</Link>

      <Link to="/shop">Shop</Link>

      <Cart />
    </Nav>
  </StyledHeader>
);

export default Header;

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const StyledCart = styled.button`
  position: relative;
`;

const ItemsQuantity = styled.span`
  position: absolute;
  left: 1.5rem;
`;

const CartTotal = styled.span`
  position: absolute;
  left: 0;
  top: 1.5rem;
`;

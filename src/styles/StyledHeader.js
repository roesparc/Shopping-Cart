import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;

  > nav {
    display: flex;
    align-items: center;
    gap: 3rem;
  }
`;

const StyledCart = styled.button`
  position: relative;

  > svg {
    display: block;
  }
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

const styles = { StyledHeader, StyledCart, ItemsQuantity, CartTotal };

export default styles;

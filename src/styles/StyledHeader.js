import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.headerShadow};
  position: sticky;
  top: 0;
  background-color: ${({ theme }) => theme.colors.white};
  z-index: 1;
`;

const HeaderNav = styled.nav`
  display: flex;
  align-items: center;
  gap: 3rem;
`;

const NameLogo = styled.h1`
  font-family: ${({ theme }) => theme.fonts.logo};
  text-shadow: ${({ theme }) => theme.shadows.logoShadow};
`;

const ItemsQuantity = styled.span`
  position: absolute;
  left: -1rem;
  top: 2.2rem;
  font-size: 1rem;
  background-color: ${({ theme }) => theme.colors.mainTwo};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 50%;
  width: 1.8rem;
  height: 1.8rem;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CartTotal = styled.span`
  font-size: 1rem;
`;

const styles = { StyledHeader, HeaderNav, NameLogo, ItemsQuantity, CartTotal };

export default styles;

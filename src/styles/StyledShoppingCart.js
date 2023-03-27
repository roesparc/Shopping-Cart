import styled from "styled-components";

const StyledShoppingCart = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  width: 42rem;
  height: 100%;
  position: fixed;
  right: 0;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 3rem;
  transition: all 500ms cubic-bezier(0.69, 0.04, 0.53, 0.78) 0s;
  z-index: 3;

  h2 {
    font-size: 2.5rem;
    text-align: center;
  }

  h3 {
    font-size: 2rem;
    text-align: center;
  }
`;

const CartProducts = styled.ul`
  overflow: auto;
  padding: 0 2rem 0 0;
  margin-top: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const Product = styled.li`
  display: flex;
  align-items: center;

  a div p:first-child {
    font-weight: bold;
  }

  a div p:last-child {
    color: #c75959;
  }
`;

const ProductImage = styled.img`
  width: 12rem;
  height: 12rem;
  margin-right: 2rem;
`;

const PriceAndQuantity = styled.div`
  text-align: center;
`;

const Overlay = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #00000080;
  transition: all 700ms cubic-bezier(0.69, 0.04, 0.53, 0.78) 0s;
  z-index: 2;
`;

const styles = {
  StyledShoppingCart,
  CartProducts,
  Product,
  ProductImage,
  PriceAndQuantity,
  Overlay,
};

export default styles;

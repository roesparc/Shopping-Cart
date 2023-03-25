import { Link } from "react-router-dom";
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
  background-color: white;
  padding: 3rem;
  transition: all 500ms cubic-bezier(0.69, 0.04, 0.53, 0.78) 0s;
`;

const CartProducts = styled.ul`
  overflow: auto;
  padding: 0 2rem 0 0;
`;

const Product = styled.li`
  display: flex;
  align-items: center;
`;

const productLink = styled(Link)`
  display: flex;
  align-items: center;
  flex-grow: 1;
`;

const ProductImage = styled.img`
  width: 15rem;
  height: 15rem;
  margin-right: 2rem;
`;

const PriceAndQuantity = styled.div`
  text-align: center;

  > p {
    font-weight: bold;
  }
`;

const Overlay = styled.div`
  position: fixed;
  height: 100%;
  width: 100%;
  background-color: #00000080;
  transition: all 700ms cubic-bezier(0.69, 0.04, 0.53, 0.78) 0s;
`;

const styles = {
  StyledShoppingCart,
  CartProducts,
  Product,
  productLink,
  ProductImage,
  PriceAndQuantity,
  Overlay,
};

export default styles;

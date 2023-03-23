import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledShop = styled.ul`
  max-width: 90rem;
  padding: 3rem;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
`;

const Product = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;

  border: 1px solid;
  border-radius: 0.5rem;
  padding: 1rem;
`;

const ProductLink = styled(Link)`
  text-decoration: none;
  color: black;
`;

const ProductImageContainer = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
`;

const ProductImage = styled.img`
  display: block;
  width: 24rem;
  height: 24rem;
  transition: all 500ms ease;

  &:hover {
    transform: scale(1.1);
  }
`;

const ProductDetails = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const styles = {
  StyledShop,
  Product,
  ProductLink,
  ProductImageContainer,
  ProductImage,
  ProductDetails,
};

export default styles;

import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledProductDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  gap:3rem;
  max-width: 90rem;
  padding: 3rem;
  margin: 0 auto;
  }
`;

const BackToShopLink = styled(Link)`
  grid-column: 1/3;
  width: fit-content;
`;

const ProductImage = styled.img`
  width: 50rem;
  height: 50rem;
`;

const ProductDetails = styled.div`
  padding: 2rem;
  border: 1px solid grey;
  border-radius: 0.5rem;

  > p:last-of-type {
    font-weight: bold;
    margin: auto;
    width: fit-content;
`;

const styles = {
  StyledProductDetails,
  BackToShopLink,
  ProductImage,
  ProductDetails,
};

export default styles;

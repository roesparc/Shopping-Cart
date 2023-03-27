import styled from "styled-components";

const StyledShop = styled.ul`
  max-width: 90rem;
  padding: 3rem;
  margin: auto;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 3rem;
  animation: reveal 1s ease;
`;

const Product = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.mainBoxShadow};
  border-radius: 0.5rem;
  padding: 1rem;
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
  margin-top: 1rem;

  div p:first-child {
    font-weight: bold;
  }

  div p:last-child {
    color: #c75959;
  }
`;

const styles = {
  StyledShop,
  Product,
  ProductImageContainer,
  ProductImage,
  ProductDetails,
};

export default styles;

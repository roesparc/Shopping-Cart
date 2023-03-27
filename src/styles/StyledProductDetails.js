import styled from "styled-components";

const StyledProductDetails = styled.div`
  display: grid;
  grid-template-columns: repeat(2, auto);
  align-items: center;
  gap: 3rem;
  max-width: 90rem;
  padding: 3rem;
  margin: 0 auto;
  animation: reveal 1s ease;
`;

const ProductImage = styled.img`
  width: 40rem;
  height: 40rem;
`;

const ProductDetails = styled.div`
  padding: 2rem;
  border-radius: 0.5rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  box-shadow: ${({ theme }) => theme.shadows.mainBoxShadow};

  > h2 {
    font-size: 2rem;
  }

  > p:first-of-type {
    opacity: 0.8;
    text-align: center;
  }

  > p:last-of-type {
    font-weight: bold;
  }
`;

const styles = {
  StyledProductDetails,
  ProductImage,
  ProductDetails,
};

export default styles;

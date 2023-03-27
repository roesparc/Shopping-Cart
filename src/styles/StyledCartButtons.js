import styled from "styled-components";

const StyledCartButtons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.colors.main};
  border-radius: 0.5rem;
  overflow: hidden;
`;

const ProductQuantity = styled.p`
  width: 3rem;
  text-align: center;
  font-weight: bold;
`;

const styles = { StyledCartButtons, ProductQuantity };

export default styles;

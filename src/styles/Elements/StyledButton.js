import styled from "styled-components";

const StyledButton = styled.button`
  min-height: 38px;
  position: relative;
  padding: 0.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: ${({ theme }) => theme.fonts.main};
  font-size: ${({ $biggerFont }) => ($biggerFont ? "1.8rem" : "1.5rem")};
  color: ${({ $highlight, theme }) =>
    $highlight ? theme.colors.white : theme.colors.main};
  font-weight: ${({ $highlight }) => ($highlight ? "bold" : "normal")};
  background-color: ${({ $highlight, theme }) =>
    $highlight ? theme.colors.main : "inherit"};
  border: ${({ $highlight, theme }) =>
    $highlight ? `2px solid ${theme.colors.main}` : "1px solid"};
  border-radius: 0.5rem;
  cursor: pointer;
  transition: all 100ms ease-out;

  &:hover {
    background-color: ${({ $highlight, theme }) =>
      $highlight ? theme.colors.white : theme.colors.main};
    color: ${({ $highlight, theme }) =>
      $highlight ? theme.colors.main : theme.colors.white};
  }

  ${({ $homeBtn, theme }) =>
    $homeBtn &&
    `
    margin-top: 1rem;
    padding: 1rem 2rem;
    border: none;
    color: ${theme.colors.main};
    font-weight: bold;
    background-color: ${theme.colors.white};
  `}

  ${({ $cartBtn }) =>
    $cartBtn &&
    `
    border: none;
    border-radius: unset;
  `}

  ${({ $productDetailsBtn }) =>
    $productDetailsBtn &&
    `
    gap: 0.5rem;

    svg {
      font-size: 1.8rem;
    }
  `}

  ${({ $closeCartBtn, theme }) =>
    $closeCartBtn &&
    `
    align-self: end;
    font-size: 1.8rem;
    margin-bottom: -2rem;
    border: none;
    color: ${theme.colors.mainTwo};

    &:hover {
      background-color: ${theme.colors.mainTwo};
    }
  `}
`;

export default StyledButton;

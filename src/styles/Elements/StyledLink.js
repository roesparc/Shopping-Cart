import { Link } from "react-router-dom";
import styled from "styled-components";

const StyledLink = styled(Link)`
  text-decoration: none;
  color: inherit;
  position: relative;

  ${({ $hover, theme }) =>
    $hover &&
    `
    &:hover {
      &::after {
        content: '';
        position: absolute;
        top: 2.5rem;
        left: 0;
        width: 100%;
        height: 3px;
        background-color: ${theme.colors.main};
      }
    }
`}

  ${({ $cart }) =>
    $cart &&
    `
    display: flex;
    align-items: center;
    flex-grow: 1;
  `}

  ${({ $productDetails }) =>
    $productDetails &&
    `
    grid-column: 1/3;
    width: fit-content;
  `}
`;

export default StyledLink;

import styled from "styled-components";
import homeBg from "../assets/img/home_bg.jpg";

const StyledHome = styled.div`
  flex-grow: 1;
  background-image: url("${homeBg}");
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: reveal 1s ease;
`;

const Title = styled.h2`
  color: ${({ theme }) => theme.colors.white};
  font-weight: normal;
  font-size: ${({ as }) => (as === "h3" ? "2rem" : "4rem")};

  ${({ as, theme }) =>
    as === "h3" &&
    `
    color: ${theme.colors.main};
    text-shadow: 1px 1px 2px ${theme.colors.white};
    font-weight: bold;
    text-align: center;
    letter-spacing: 1rem;
    margin-bottom: -1rem;
  `}
`;

const styles = { StyledHome, Title };

export default styles;

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

  > a {
    margin-top: 2rem;
  }
`;

const Title = styled.h2`
  width: fit-content;
  color: white;
  font-weight: normal;
  font-size: ${({ as }) => (as === "h3" ? "2rem" : "4rem")};

  background-color: #00000033;
  padding: 0.5rem;
  border-radius: ${({ as }) =>
    as === "h3" ? "0.5rem 0.5rem 0 0" : "0 0.5rem 0.5rem 0.5rem"};
`;

const styles = { StyledHome, Title };

export default styles;

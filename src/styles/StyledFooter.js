import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0.5rem;
`;

const Author = styled.a`
  text-decoration: none;

  &:hover {
    text-decoration: underline;
  }
`;

const GithubLogo = styled(FaGithub)`
  transition: all 500ms ease;
  display: block;

  &:hover {
    transform: rotate(360deg) scale(1.2);
  }
`;

const styles = { StyledFooter, Author, GithubLogo };

export default styles;

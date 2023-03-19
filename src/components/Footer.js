import { FaGithub } from "react-icons/fa";
import styled from "styled-components";

const Footer = () => (
  <StyledFooter>
    <p>
      By <Author href="https://github.com/roesparc/">roesparc</Author>
    </p>
    <a href="https://github.com/roesparc/">
      <GithubLogo />
    </a>
  </StyledFooter>
);

export default Footer;

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

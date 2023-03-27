import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  :root {
    font-size: 12px;
    font-family: ${({ theme }) => theme.fonts.main};
  }

  * {
    margin: 0;
    padding: 0;
  }

  a, p {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.main};
  }

  h1, h2, h3, h4 {
    color: ${({ theme }) => theme.colors.main};
  }

  @keyframes reveal {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export default GlobalStyle;

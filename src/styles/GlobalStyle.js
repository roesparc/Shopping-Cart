import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
:root {
  font-size: 12px;
}

* {
  margin: 0;
  padding: 0;
}

button {
  cursor: pointer;
}
`;

export default GlobalStyle;

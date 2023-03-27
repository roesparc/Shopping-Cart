import { render } from "@testing-library/react";
import Footer from "../components/Footer";
import "jest-styled-components";
import { ThemeProvider } from "styled-components";
import theme from "../styles/Theme";

describe("Footer component", () => {
  test("Renders correct content and styles", () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <Footer />
      </ThemeProvider>
    );

    expect(container).toMatchSnapshot();
  });
});

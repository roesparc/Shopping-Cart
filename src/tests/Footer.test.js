import { render } from "@testing-library/react";
import Footer from "../components/Footer";
import "jest-styled-components";

describe("Footer component", () => {
  test("Renders correct static text and links", () => {
    const { container } = render(<Footer />);

    expect(container).toMatchSnapshot();
  });
});

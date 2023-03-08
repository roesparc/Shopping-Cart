import { render } from "@testing-library/react";
import Footer from "../components/Footer";

describe("Footer component", () => {
  test("Renders correct static text and links", () => {
    const { container } = render(<Footer />);

    expect(container).toMatchSnapshot();
  });
});

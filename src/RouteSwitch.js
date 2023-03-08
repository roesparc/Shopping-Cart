import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";

const RouteSwitch = () => {
  return (
    <>
      <BrowserRouter>
        <header>
          <h1>Towel Worl</h1>
        </header>

        <main></main>
      </BrowserRouter>

      <Footer />
    </>
  );
};

export default RouteSwitch;

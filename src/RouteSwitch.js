import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import { CartProvider } from "./contexts/CartContext";
import StyledRouteSwitch from "./styles/StyledRouteSwitch";

const RouteSwitch = () => (
  <StyledRouteSwitch>
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Main />
      </CartProvider>

      <Footer />
    </BrowserRouter>
  </StyledRouteSwitch>
);

export default RouteSwitch;

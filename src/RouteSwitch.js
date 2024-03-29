import { HashRouter } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Main from "./components/Main";
import ShoppingCart from "./components/ShoppingCart";
import { CartProvider } from "./contexts/CartContext";
import StyledRouteSwitch from "./styles/StyledRouteSwitch";

const RouteSwitch = () => (
  <StyledRouteSwitch>
    <HashRouter>
      <CartProvider>
        <Header />
        <Main />
        <ShoppingCart />
      </CartProvider>

      <Footer />
    </HashRouter>
  </StyledRouteSwitch>
);

export default RouteSwitch;

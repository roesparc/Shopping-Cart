import { CartProvider } from "../contexts/CartContext";
import Footer from "./Footer";
import Header from "./Header";

const Layout = ({ children }) => {
  return (
    <>
      <CartProvider>
        <Header />
        <main>{children}</main>
      </CartProvider>

      <Footer />
    </>
  );
};

export default Layout;

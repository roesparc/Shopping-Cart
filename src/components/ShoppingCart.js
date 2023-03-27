import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import CartButtons from "./shared/CartButtons";
import { AiOutlineClose } from "react-icons/ai";
import styles from "../styles/StyledShoppingCart";
import StyledLink from "../styles/Elements/StyledLink";
import StyledButton from "../styles/Elements/StyledButton";

const CartProducts = () => {
  const { cartItems, toggleCartOpen } = useContext(CartContext);

  return (
    <styles.CartProducts
      aria-label={`Your cart has ${cartItems.length} different products`}
    >
      {cartItems.map((item) => (
        <styles.Product
          aria-label={`Product: ${item.name} - ${item.color}`}
          key={item.id}
        >
          <StyledLink onClick={toggleCartOpen} to={`/shop/${item.id}`} $cart>
            <styles.ProductImage src={item.image} alt="Product" />

            <div>
              <p>{item.name}</p>
              <p>{item.color}</p>
            </div>
          </StyledLink>

          <styles.PriceAndQuantity>
            <p>${(item.price * item.cartQuantity).toFixed(2)}</p>
            <CartButtons product={item} />
          </styles.PriceAndQuantity>
        </styles.Product>
      ))}
    </styles.CartProducts>
  );
};

const ShoppingCart = () => {
  const { cartItems, cartOpen, cartTotal, toggleCartOpen } =
    useContext(CartContext);

  return (
    <>
      <styles.Overlay
        data-testid="shopping-cart-overlay"
        style={{ transform: `translateX(${cartOpen ? "0" : "100%"})` }}
        onClick={toggleCartOpen}
      />

      <styles.StyledShoppingCart
        data-testid="shopping-cart"
        style={{ transform: `translateX(${cartOpen ? "0" : "100%"})` }}
      >
        <StyledButton
          aria-label="Close cart"
          onClick={toggleCartOpen}
          $closeCartBtn
        >
          <AiOutlineClose />
        </StyledButton>

        <h2>{cartItems.length > 0 ? "My Cart" : "Your Cart is Empty"}</h2>

        {cartItems.length > 0 && (
          <>
            <CartProducts />

            <h3>Subtotal: ${cartTotal.toFixed(2)}</h3>

            <StyledButton
              onClick={() => window.alert("Bamboozled!")}
              $highlight
            >
              Checkout
            </StyledButton>
          </>
        )}
      </styles.StyledShoppingCart>
    </>
  );
};

export default ShoppingCart;

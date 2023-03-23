import { useContext } from "react";
import products from "../assets/productsData";
import CartButtonsContainer from "../components/shared/CartButtonsContainer";
import { CartContext } from "../contexts/CartContext";
import styles from "../styles/StyledShop";

const CartButtons = ({ product }) => {
  const { cartItems, updateCart } = useContext(CartContext);

  return (
    <>
      {cartItems.some((item) => item.id === product.id) ? (
        <CartButtonsContainer product={product} cartItems={cartItems} />
      ) : (
        <button onClick={() => updateCart(product, "add")}>Add to cart</button>
      )}
    </>
  );
};

const Shop = () => (
  <styles.StyledShop aria-label="Product list">
    {products.map((product) => (
      <styles.Product
        aria-label={`Product: ${product.name} - ${product.color}`}
        key={product.id}
      >
        <styles.ProductLink aria-label="View product" to={`${product.id}`}>
          <styles.ProductImageContainer>
            <styles.ProductImage
              aria-label="Product image"
              src={product.image}
              alt={product.name}
            />
          </styles.ProductImageContainer>

          <styles.ProductDetails aria-label="Product details" role="region">
            <div>
              <p>{product.name}</p>
              <p>{product.color}</p>
            </div>

            <p aria-label="Price">${product.price}</p>
          </styles.ProductDetails>
        </styles.ProductLink>

        <CartButtons product={product} />
      </styles.Product>
    ))}
  </styles.StyledShop>
);

export default Shop;

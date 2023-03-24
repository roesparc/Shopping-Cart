import products from "../assets/productsData";
import CartButtons from "../components/shared/CartButtons";
import styles from "../styles/StyledShop";

const Shop = () => (
  <styles.StyledShop aria-label="Product list">
    {products.map((product) => (
      <styles.Product
        aria-label={`Product: ${product.name} - ${product.color}`}
        key={product.id}
      >
        <styles.ProductLink aria-label="View product" to={`${product.id}`}>
          <styles.ProductImageContainer>
            <styles.ProductImage src={product.image} alt="Product image" />
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

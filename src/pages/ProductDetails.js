import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import products from "../assets/productsData";
import CartButtons from "../components/shared/CartButtons";
import styles from "../styles/StyledProductDetails";
import { IoArrowBackCircleSharp } from "react-icons/io5";
import StyledLink from "../styles/Elements/StyledLink";
import StyledButton from "../styles/Elements/StyledButton";

const ProductDetails = () => {
  const { id } = useParams();
  const [product, setProduct] = useState({});

  useEffect(() => {
    setProduct(() => products.find((product) => product.id === parseInt(id)));
  }, [id]);

  return (
    <styles.StyledProductDetails data-testid="product-details-container">
      <StyledLink to="/shop" $productDetails>
        <StyledButton $productDetailsBtn>
          <IoArrowBackCircleSharp /> Back
        </StyledButton>
      </StyledLink>

      <styles.ProductImage src={product.image} alt="Product Image" />

      <styles.ProductDetails aria-label="Product details" role="region">
        <h2>{`${product.name} ${product.color}`}</h2>
        <p>{product.description}</p>
        <p>{`$${product.price}`}</p>
        <CartButtons product={product} />
      </styles.ProductDetails>
    </styles.StyledProductDetails>
  );
};

export default ProductDetails;

import StyledButton from "../styles/Elements/StyledButton";
import StyledLink from "../styles/Elements/StyledLink";
import styles from "../styles/StyledHome";

const Home = () => (
  <styles.StyledHome>
    <div>
      <styles.Title as="h3">Wrap yourself in luxury</styles.Title>
      <styles.Title>The perfect towel for every occasion</styles.Title>
    </div>

    <StyledLink to="/shop">
      <StyledButton $homeBtn>Browse our collection</StyledButton>
    </StyledLink>
  </styles.StyledHome>
);

export default Home;

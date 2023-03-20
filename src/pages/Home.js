import { Link } from "react-router-dom";
import styles from "../styles/StyledHome";

const Home = () => (
  <styles.StyledHome>
    <div>
      <styles.Title as="h3">Wrap yourself in luxury</styles.Title>
      <styles.Title>The perfect towel for every occasion</styles.Title>
    </div>

    <Link to="/shop">
      <button>Browse our collection</button>
    </Link>
  </styles.StyledHome>
);

export default Home;

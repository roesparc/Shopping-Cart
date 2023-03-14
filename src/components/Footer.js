import styles from "../styles/Footer.module.css";
import { BsGithub } from "react-icons/bs";

const Footer = () => (
  <footer className={styles.footer}>
    <p>
      By{" "}
      <a className={styles.author} href="https://github.com/roesparc/">
        roesparc
      </a>
    </p>
    <a href="https://github.com/roesparc/">
      <BsGithub className={styles.githubLogo} />
    </a>
  </footer>
);

export default Footer;

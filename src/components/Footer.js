import styles from "../styles/Footer.module.css";

const Footer = () => (
  <footer className={styles.footer}>
    <p>
      By{" "}
      <a className={styles.author} href="https://github.com/roesparc/">
        roesparc
      </a>
    </p>
    <a href="https://github.com/roesparc/">
      <i className={`fa-brands fa-github ${styles.githubLogo}`}></i>
    </a>
  </footer>
);

export default Footer;

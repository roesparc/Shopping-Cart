import styles from "../styles/StyledFooter";

const Footer = () => (
  <styles.StyledFooter>
    <p>
      By{" "}
      <styles.Author
        aria-label="Author's GitHub Page"
        href="https://github.com/roesparc/"
      >
        roesparc
      </styles.Author>
    </p>

    <a aria-label="Author's GitHub Page" href="https://github.com/roesparc/">
      <styles.GithubLogo />
    </a>
  </styles.StyledFooter>
);

export default Footer;

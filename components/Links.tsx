import Linkedin from "./Icons/Linkedin";
import Github from "./Icons/Github";
import styles from "../styles/Links.module.scss";

const Links = (): JSX.Element => {
  return (
    <div className={styles.links}>
      <div className={styles.links_line}></div>
      <a
        className={styles.links_link}
        href="https://www.linkedin.com/in/zstrangeway/"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin />
      </a>
      <a
        className={styles.links_link}
        href="https://github.com/zstrangeway"
        target="_blank"
        rel="noreferrer"
      >
        <Github />
      </a>
    </div>
  );
};

export default Links;

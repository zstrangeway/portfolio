import Email from "./Icons/Email";
import Github from "./Icons/Github";
import Linkedin from "./Icons/Linkedin";
import Resume from "./Icons/Resume";
import styles from "../styles/Links.module.scss";

const Links = (): JSX.Element => {
  return (
    <div className={styles.links}>
      <div className={styles.links_line}></div>
      <a
        className={styles.links_link}
        aria-label="LinkedIn"
        href="https://www.linkedin.com/in/zstrangeway/"
        target="_blank"
        rel="noreferrer"
      >
        <Linkedin />
      </a>
      <a
        className={styles.links_link}
        aria-label="GitHub"
        href="https://github.com/zstrangeway"
        target="_blank"
        rel="noreferrer"
      >
        <Github />
      </a>
      <a
        className={styles.links_link}
        aria-label="Email"
        href="mailto:zac.strangeway@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <Email />
      </a>
      <a
        className={styles.links_link}
        aria-label="Resume"
        href="resume.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <Resume />
      </a>
    </div>
  );
};

export default Links;

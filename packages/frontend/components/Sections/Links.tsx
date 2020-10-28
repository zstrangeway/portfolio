import { EmailIcon, GithubIcon, LinkedinIcon, ResumeIcon } from "~/components";
import { LinksStyles as styles } from "~/styles";

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
        <LinkedinIcon />
      </a>
      <a
        className={styles.links_link}
        aria-label="GitHub"
        href="https://github.com/zstrangeway"
        target="_blank"
        rel="noreferrer"
      >
        <GithubIcon />
      </a>
      <a
        className={styles.links_link}
        aria-label="Email"
        href="mailto:zac.strangeway@gmail.com"
        target="_blank"
        rel="noreferrer"
      >
        <EmailIcon />
      </a>
      <a
        className={styles.links_link}
        aria-label="Resume"
        href="resume.pdf"
        target="_blank"
        rel="noreferrer"
      >
        <ResumeIcon />
      </a>
    </div>
  );
};

export default Links;

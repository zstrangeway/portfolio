import styles from "../styles/Hero.module.scss";
import Linkedin from "./Icons/Linkedin";
import Github from "./Icons/Github";

const Hero = (): JSX.Element => {
  const svgSize = "48px";
  return (
    <section className={styles.section}>
      <div className={styles.links}>
        <a
          href="https://www.linkedin.com/in/zstrangeway/"
          target="_blank"
          rel="noreferrer"
        >
          <Linkedin width={svgSize} height={svgSize} />
        </a>
        <a
          href="https://github.com/zstrangeway"
          target="_blank"
          rel="noreferrer"
        >
          <Github width={svgSize} height={svgSize} />
        </a>
      </div>
      <div className={styles.spacer}></div>
      <h1 className={styles.title}>
        Zachary
        <br />
        Strangeway
      </h1>
    </section>
  );
};

export default Hero;

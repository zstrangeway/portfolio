import styles from "../styles/Hero.module.css";

const Hero = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <h1>Zachary Strangeway</h1>
      <p>
        <a
          href="https://www.linkedin.com/in/zstrangeway/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>
      </p>
      <p>
        <a
          href="https://github.com/zstrangeway"
          target="_blank"
          rel="noreferrer"
        >
          Github
        </a>
      </p>
    </div>
  );
};

export default Hero;

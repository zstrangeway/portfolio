import styles from "../styles/Hero.module.scss";
import Linkedin from "./Icons/Linkedin";
import Github from "./Icons/Github";

const Hero = (): JSX.Element => {
  const svgSize = "48px";
  return (
    <section className={styles.hero}>
      <div className={styles.hero_title_wrapper}>
        <h1 className={styles.hero_title}>
          Zachary
          <br />
          Strangeway
        </h1>
        <h2 className={styles.hero_sub_title}>Senior Software Engineer</h2>
      </div>
    </section>
  );
};

export default Hero;

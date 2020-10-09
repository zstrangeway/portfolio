import styles from "../styles/Hero.module.scss";

const Hero = (): JSX.Element => {
  return (
    <section className={styles.hero}>
      <div className={styles.hero_container}>
        <div className={styles.hero_title_wrapper}>
          <h1 className={styles.hero_title}>
            Zachary
            <br />
            Strangeway
          </h1>
          <h2 className={styles.hero_sub_title}>Senior Software Engineer</h2>
        </div>
      </div>
    </section>
  );
};

export default Hero;

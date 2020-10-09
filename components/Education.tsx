import styles from "../styles/Education.module.scss";

const Education = (): JSX.Element => {
  return (
    <section className={styles.education}>
      <div className={styles.education_container}>
        <h2 className={styles.education_title}>Education</h2>
        <h3 className={styles.education_school}>Herzing University</h3>
        <p className={styles.education_degree}>B.S. Software Development</p>
        <p className={styles.education_dates}>2011 - 2014</p>
      </div>
    </section>
  );
};

export default Education;

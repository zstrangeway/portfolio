import styles from "../styles/Education.module.scss";

const Education = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <h2 className={styles.section_header}>Education</h2>
      <h3>Herzing University</h3>
      <p>B.S. Software Development</p>
      <p>2011 - 2014</p>
    </section>
  );
};

export default Education;

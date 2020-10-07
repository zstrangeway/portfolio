import styles from "../styles/Contact.module.scss";

const Contact = (): JSX.Element => {
  return (
    <section className={styles.section}>
      <h2 className={styles.section_header}>Contact</h2>
      <div className={styles.form}>
        <input className={styles.input} type="text" placeholder="Name" />
        <input className={styles.input} type="text" placeholder="Email" />
        <input className={styles.input} type="text" placeholder="Subject" />
        <textarea className={styles.input} placeholder="Message"></textarea>
      </div>
    </section>
  );
};

export default Contact;

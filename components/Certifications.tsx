import styles from "../styles/Certifications.module.css";

const Certifications = (): JSX.Element => {
  return (
    <div className={styles.container}>
      <h2>Certifications</h2>
      <ul>
        <li>AWS Certified Solutions Architect Associate</li>
        <li>AWS Certified Cloud Practitioner</li>
      </ul>
    </div>
  );
};

export default Certifications;

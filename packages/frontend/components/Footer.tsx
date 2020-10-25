import styles from "../styles/Footer.module.scss";

const Footer = (): JSX.Element => {
  const date = new Date();
  const year = date.getFullYear();

  return (
    <div className={styles.footer}>
      <div>Created by Zachary Strangeway</div>
      <div>- {year}</div>
    </div>
  );
};

export default Footer;

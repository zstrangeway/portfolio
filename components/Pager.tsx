import styles from "../styles/Pager.module.scss";

const Pager = (): JSX.Element => {
  return (
    <div className={styles.pager}>
      <div className={styles.pager_line} />
      <div className={styles.pager_indicator_wrapper}>
        <div className={styles.pager_indicator} />
        <div className={styles.pager_indicator} />
        <div className={styles.pager_indicator} />
        <div className={styles.pager_indicator} />
        <div className={styles.pager_indicator} />
      </div>
      <div className={styles.pager_line} />
    </div>
  );
};

export default Pager;

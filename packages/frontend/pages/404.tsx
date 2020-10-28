import { ErrorPageStyles as styles } from "~/styles";

const Custom404 = (): JSX.Element => {
  return (
    <div className={styles.error}>
      <div className={styles.error_message}>
        <h1>404</h1>
        <h2>This page could not be found</h2>
      </div>
      <a href="/">&larr; Return Home</a>
    </div>
  );
};

export default Custom404;

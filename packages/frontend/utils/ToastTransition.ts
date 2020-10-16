import { cssTransition } from "react-toastify";
import styles from "../styles/ToastTransition.module.scss";

const ToastTransition = cssTransition({
  enter: styles.toastAnimationIn,
  exit: styles.toastAnimationOut,
  duration: 250,
});

export default ToastTransition;

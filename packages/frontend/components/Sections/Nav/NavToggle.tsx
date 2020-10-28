import classNames from "classnames/bind";
import { NavStyles as styles } from "~/styles";

const cx = classNames.bind(styles);

type NavToggleProps = {
  active: boolean;
  onClick: () => void;
};

const NavToggle = ({ active, onClick }: NavToggleProps): JSX.Element => {
  return (
    <div
      className={cx({
        nav_toggle: true,
        active: active,
      })}
      onClick={onClick}
    >
      <div className={styles.nav_toggle_box}>
        <div className={styles.nav_toggle_line} />
        <div className={styles.nav_toggle_line} />
        <div className={styles.nav_toggle_line} />
      </div>
    </div>
  );
};

export default NavToggle;

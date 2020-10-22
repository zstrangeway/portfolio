import useNavItemActive from "../../hooks/useNavItemActive";
import { Section } from "../../types";
import styles from "../../styles/Nav.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type NavItemProps = {
  section: Section;
  onClick: (sectionId: string) => void;
};

const NavItem = ({ section, onClick }: NavItemProps): JSX.Element => {
  const isActive = useNavItemActive(section.id);
  const handleClick = () => {
    onClick(section.id);
  };

  return (
    <div
      className={cx({
        nav_item: true,
        active: isActive,
      })}
      onClick={handleClick}
    >
      <div className={styles.nav_item_dot} />
      <div className={styles.nav_item_label}>{section.label}</div>
    </div>
  );
};

export default NavItem;

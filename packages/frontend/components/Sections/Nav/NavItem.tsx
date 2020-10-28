import { Section } from "~/models";
import classNames from "classnames/bind";
import { NavStyles as styles } from "~/styles";
import { useNavItemActive } from "~/hooks";

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

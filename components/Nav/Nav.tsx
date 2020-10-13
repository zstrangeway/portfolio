import { Section } from "../../types";
import styles from "../../styles/Nav.module.scss";
import NavItem from "./NavItem";

type NavProps = {
  sections: Section[];
};

const Nav = ({ sections }: NavProps): JSX.Element => {
  return (
    <div className={styles.nav}>
      <div className={styles.nav_line} />
      <div className={styles.nav_item_wrapper}>
        {sections.map((section) => {
          return <NavItem key={section.id} section={section} />;
        })}
      </div>
      <div className={styles.nav_line} />
    </div>
  );
};

export default Nav;

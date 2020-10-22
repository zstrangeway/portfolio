import { useState } from "react";
import { Section } from "../../types";
import styles from "../../styles/Nav.module.scss";
import NavItem from "./NavItem";
import classNames from "classnames/bind";
import NavToggle from "./NavToggle";

const cx = classNames.bind(styles);

type NavProps = {
  sections: Section[];
};

const Nav = ({ sections }: NavProps): JSX.Element => {
  const [active, setActive] = useState(false);

  const handleToggle = () => {
    setActive(!active);
  };

  const handleClick = (sectionId: string) => {
    setActive(false);
    scrollTo(sectionId);
  };

  return (
    <>
      <NavToggle active={active} onClick={handleToggle} />
      <nav
        className={cx({
          nav: true,
          active: active,
        })}
      >
        <div className={styles.nav_line} />
        <div className={styles.nav_item_wrapper}>
          {sections.map((section) => {
            return (
              <NavItem
                key={section.id}
                section={section}
                onClick={handleClick}
              />
            );
          })}
        </div>
        <div className={styles.nav_line} />
      </nav>
    </>
  );
};

export default Nav;

const scrollTo = (sectionId: string) => {
  document.getElementById(sectionId).scrollIntoView();
};

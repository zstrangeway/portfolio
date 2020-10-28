import { NavItem, NavToggle } from "~/components";
import classNames from "classnames/bind";
import { sections } from "~/data";
import { NavStyles as styles } from "~/styles";
import { useState } from "react";

const cx = classNames.bind(styles);

const Nav = (): JSX.Element => {
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

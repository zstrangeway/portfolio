import { useEffect, useState } from "react";
import { Section } from "../../types";
import styles from "../../styles/Nav.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type NavItemProps = {
  section: Section;
};

const NavItem = ({ section }: NavItemProps): JSX.Element => {
  const handleClick = () => scrollTo(section.id);
  const isActive = useIsActive(section.id);

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

const scrollTo = (sectionId: string) => {
  document.getElementById(sectionId).scrollIntoView();
};

function useIsActive(sectionId: string): boolean {
  if (typeof window === "undefined") return; // Prevents "document is not defined" error
  const target = document.getElementById(sectionId);
  const [isActive, setIsActive] = useState(false);

  const options = {
    rootMargin: "-50%", // intersects with middle of window
  };

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsActive(entry.isIntersecting);
    }, options);
    observer.observe(target);
    return () => {
      observer.unobserve(target); // Cleanup
    };
  }, []);

  return isActive;
}

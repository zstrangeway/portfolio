import { Certification } from "../../types";
import styles from "../../styles/Certifications.module.scss";
import { useRef } from "react";
import useTween from "../../hooks/useTween";

type CertificationBadgeProps = {
  cert: Certification;
};

const CertificationBadge = ({ cert }: CertificationBadgeProps): JSX.Element => {
  const ref = useRef();
  useTween(ref, "fadeIn");

  return (
    <a
      ref={ref}
      className={styles.certifications_badge}
      href={cert.link}
      target="_blank"
      rel="noreferrer"
    >
      {/* <img className={styles.certifications_badge_image} src={cert.imageUrl} /> */}
      <picture>
        <source srcSet={`${cert.imageUrl}.webp`} />
        <source srcSet={`${cert.imageUrl}.png`} />
        <img
          className={styles.certifications_badge_image}
          src={`${cert.imageUrl}.png`}
          alt={cert.name}
        />
      </picture>
    </a>
  );
};

export default CertificationBadge;

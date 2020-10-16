import { Certification } from "../../types";
import styles from "../../styles/Certifications.module.scss";
import { useRef } from "react";
import useEnterTween from "../../hooks/useEnterTween";

type CertificationBadgeProps = {
  cert: Certification;
};

const CertificationBadge = ({ cert }: CertificationBadgeProps): JSX.Element => {
  const ref = useRef();
  useEnterTween(ref);

  return (
    <a
      ref={ref}
      className={styles.certifications_badge}
      href={cert.link}
      target="_blank"
      rel="noreferrer"
    >
      <img className={styles.certifications_badge_image} src={cert.imageUrl} />
    </a>
  );
};

export default CertificationBadge;

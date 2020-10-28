import { Certification } from "~/models";
import { CertificationsStyles as styles } from "~/styles";
import { useRef } from "react";
import { useTween } from "~/hooks";

type CertificationBadgeProps = {
  certification: Certification;
};

const CertificationBadge = ({
  certification,
}: CertificationBadgeProps): JSX.Element => {
  const ref = useRef();
  useTween(ref, "fadeIn");

  return (
    <a
      ref={ref}
      className={styles.certifications_badge}
      href={certification.link}
      target="_blank"
      rel="noreferrer"
    >
      {/* <img className={styles.certifications_badge_image} src={cert.imageUrl} /> */}
      <picture>
        <source srcSet={`${certification.imageUrl}.webp`} />
        <source srcSet={`${certification.imageUrl}.png`} />
        <img
          className={styles.certifications_badge_image}
          src={`${certification.imageUrl}.png`}
          alt={certification.name}
          height="200"
          width="200"
        />
      </picture>
    </a>
  );
};

export default CertificationBadge;

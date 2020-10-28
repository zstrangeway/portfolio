import CertificationBadge from "./CertificationBadge";
import styles from "../../styles/Certifications.module.scss";
import { certifications } from "../../data";

type CertificationsProps = {
  id: string;
};

const Certifications = ({ id }: CertificationsProps): JSX.Element => {
  return (
    <section id={id} className={styles.certifications}>
      <div className={styles.certifications_container}>
        <h2 className={styles.certifications_title}>Certifications</h2>
        <div className={styles.certifications_badge_wrapper}>
          {certifications.map((certification) => {
            return (
              <CertificationBadge
                key={certification.name}
                certification={certification}
              />
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

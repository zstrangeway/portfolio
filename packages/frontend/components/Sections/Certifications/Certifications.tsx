import { CertificationBadge } from "~/components";
import { certifications } from "~/data";
import { CertificationsStyles as styles } from "~/styles";

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
                key={certification.id}
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

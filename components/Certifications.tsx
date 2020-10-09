import { Certification } from "../types";
import styles from "../styles/Certifications.module.scss";

const Certifications = (): JSX.Element => {
  return (
    <section className={styles.certifications}>
      <div className={styles.certifications_container}>
        <h2 className={styles.certifications_title}>Certifications</h2>
        <div className={styles.certifications_badge_wrapper}>
          {certs.map((cert) => {
            return (
              <a
                key={cert.name}
                className={styles.certifications_badge}
                href={cert.link}
                target="_blank"
                rel="noreferrer"
              >
                <img
                  className={styles.certifications_badge_image}
                  src={cert.imageUrl}
                />
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Certifications;

const certs: Certification[] = [
  {
    name: "AWS Certified Cloud Practitioner",
    imageUrl: "aws-certified-cloud-practitioner.png",
    link:
      "https://www.youracclaim.com/badges/02a7a323-6e22-4d67-82a8-480420124bc2/public_url",
  },
  {
    name: "AWS Certified Solutions Architect Associate",
    imageUrl: "aws-certified-solutions-architect-associate.png",
    link:
      "https://www.youracclaim.com/badges/42ac440f-f2fb-4a77-b7a9-9679709ee9b1/public_url",
  },
];

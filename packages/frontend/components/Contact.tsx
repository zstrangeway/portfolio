import Button from "./Button";
import styles from "../styles/Contact.module.scss";
import { useRef } from "react";
import useEnterTween from "../hooks/useEnterTween";

type ContactProps = {
  id: string;
};

const Contact = ({ id }: ContactProps): JSX.Element => {
  const ref = useRef();
  useEnterTween(ref);

  const handleSubmit = () => {
    // TODO: Submit form
    console.log("submit form");
  };

  return (
    <section id={id} className={styles.contact}>
      <div className={styles.contact_container}>
        <h2 className={styles.contact_title}>Contact</h2>
        <div ref={ref} className={styles.contact_form}>
          <input
            className={styles.contact_form_input}
            type="text"
            placeholder="Name"
          />
          <input
            className={styles.contact_form_input}
            type="text"
            placeholder="Email"
          />
          <input
            className={styles.contact_form_input}
            type="text"
            placeholder="Subject"
          />
          <textarea
            className={styles.contact_form_textarea}
            placeholder="Message"
          ></textarea>
          <Button className={styles.contact_form_button} onClick={handleSubmit}>
            Submit
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;

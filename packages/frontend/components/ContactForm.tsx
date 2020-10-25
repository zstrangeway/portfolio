import Button from "./Button";
import styles from "../styles/ContactForm.module.scss";
import { useRef, useState } from "react";
import useTween from "../hooks/useTween";
import ContactService from "../services/contact";
import { toast } from "react-toastify";
import ToastTransition from "../utils/ToastTransition";
import { Contact } from "../types";
import { useForm, Controller, UnpackNestedValue } from "react-hook-form";
import FormField from "./FormField/FormField";

type ContactProps = {
  id: string;
};

toast.configure();
const contactService = new ContactService();

const ContactForm = ({ id }: ContactProps): JSX.Element => {
  const { handleSubmit, errors, control, reset } = useForm();
  const [loading, setLoading] = useState(false);
  const ref = useRef();
  useTween(ref, "fadeIn");
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const defaultValues: UnpackNestedValue<any> = {
    name: "",
    email: "",
    subject: "",
    message: "",
  };

  const onSubmit = async ({ email, name, subject, message }) => {
    const contact: Contact = { email, name, subject, message };

    try {
      setLoading(true);
      await contactService.sendContactForm(contact);
      reset(defaultValues);
      toast.success("Message Received!", {
        position: toast.POSITION.BOTTOM_CENTER,
        transition: ToastTransition,
      });
    } catch (err) {
      toast.error(err, {
        position: toast.POSITION.BOTTOM_CENTER,
        transition: ToastTransition,
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id={id} className={styles.contact}>
      <div className={styles.contact_container}>
        <h2 className={styles.contact_title}>Contact</h2>
        <form
          ref={ref}
          className={styles.contact_form}
          onSubmit={handleSubmit(onSubmit)}
        >
          <Controller
            as={FormField}
            name="name"
            type="text"
            placeholder="Name"
            control={control}
            loading={loading}
            errorMessage={errors?.name?.message}
            defaultValue={defaultValues.name}
            rules={{
              required: {
                value: true,
                message: "Name is required",
              },
            }}
          />
          <Controller
            as={FormField}
            name="email"
            type="text"
            placeholder="Email"
            control={control}
            loading={loading}
            errorMessage={errors?.email?.message}
            defaultValue={defaultValues.email}
            rules={{
              required: {
                value: true,
                message: "Email is required",
              },
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email must be valid email address",
              },
            }}
          />
          <Controller
            as={FormField}
            name="subject"
            type="text"
            placeholder="Subject"
            control={control}
            loading={loading}
            errorMessage={errors?.subject?.message}
            defaultValue={defaultValues.subject}
            rules={{
              required: {
                value: true,
                message: "Subject is required",
              },
            }}
          />
          <Controller
            as={FormField}
            name="message"
            type="textarea"
            placeholder="Message"
            control={control}
            loading={loading}
            errorMessage={errors?.message?.message}
            defaultValue={defaultValues.message}
            maxLength={1000}
            rules={{
              required: {
                value: true,
                message: "Message is required",
              },
              maxLength: {
                value: 1000,
                message: "Message must be shorter than 1000 characters",
              },
            }}
          />
          <Button
            className={styles.contact_form_button}
            type="submit"
            loading={loading}
          >
            Submit
          </Button>
        </form>
      </div>
    </section>
  );
};

export default ContactForm;

import FormFieldError from "./FormFieldError";
import styles from "../../styles/FormField.module.scss";

type FormFieldProps = {
  name: string;
  type: "text" | "textarea";
  placeholder: string;
  loading?: boolean;
  errorMessage?: string;
  onChange?: () => void;
  onBlur?: () => void;
  value?: string;
  maxLength?: number;
};

const FormField = ({
  loading,
  errorMessage,
  value,
  type,
  name,
  placeholder,
  onChange,
  onBlur,
  maxLength,
}: FormFieldProps): JSX.Element => {
  return (
    <div className={styles.form_field}>
      {type === "text" && (
        <input
          className={styles.form_field_text}
          type="text"
          name={name}
          placeholder={placeholder}
          disabled={loading}
          maxLength={maxLength}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
      )}
      {type === "textarea" && (
        <textarea
          className={styles.form_field_textarea}
          name={name}
          placeholder={placeholder}
          disabled={loading}
          maxLength={maxLength}
          onChange={onChange}
          onBlur={onBlur}
          value={value}
        />
      )}
      <div className={styles.form_field_meta}>
        <FormFieldError message={errorMessage} />
        {maxLength && (
          <p className={styles.form_error_counter}>
            {value.length}/{maxLength}
          </p>
        )}
      </div>
    </div>
  );
};

export default FormField;

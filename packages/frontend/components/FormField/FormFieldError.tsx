import Warning from "../Icons/Warning";
import styles from "../../styles/FormField.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type FormErrorProps = {
  message?: string;
};

const FormFieldError = ({ message }: FormErrorProps): JSX.Element => {
  return (
    <div
      className={cx({
        form_field_error: true,
        visible: message ?? false,
      })}
    >
      <p className={styles.form_error_message}>
        <Warning />
        {message}
      </p>
    </div>
  );
};

export default FormFieldError;

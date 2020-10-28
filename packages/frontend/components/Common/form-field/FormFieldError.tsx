import { WarningIcon } from "~/components";
import classNames from "classnames/bind";
import { FormFieldStyles as styles } from "~/styles";

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
        <WarningIcon />
        {message}
      </p>
    </div>
  );
};

export default FormFieldError;

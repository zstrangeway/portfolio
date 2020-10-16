import Loader from "./Loader";
import styles from "../styles/Button.module.scss";
import classNames from "classnames/bind";

const cx = classNames.bind(styles);

type ButtonProps = {
  className?: string;
  children?: React.ReactNode;
  type?: "submit" | "reset" | "button";
  loading?: boolean;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  type,
  loading,
}: ButtonProps) => (
  <button
    className={cx(className, { button: true })}
    onClick={onClick}
    type={type}
    disabled={loading}
  >
    <span
      className={cx({
        button_text: true,
        loading,
      })}
    >
      {children}
    </span>
    <div
      className={cx({
        button_loader_wrapper: true,
        loading,
      })}
    >
      <Loader />
    </div>
  </button>
);

export default Button;

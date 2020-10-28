import { ButtonLoader } from "~/components";
import classNames from "classnames/bind";
import { ButtonStyles as styles } from "~/styles";

const cx = classNames.bind(styles);

type ButtonProps = {
  className?: string;
  children?: React.ReactNode;
  type?: "submit" | "reset" | "button";
  loading?: boolean;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
  icon?: JSX.Element;
  iconLocation?: "left" | "right";
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
  type,
  loading,
  icon,
  iconLocation = "left",
}: ButtonProps) => (
  <button
    className={cx(className, {
      button: true,
      icon_left: iconLocation === "left",
      icon_right: iconLocation === "right",
    })}
    onClick={onClick}
    type={type}
    disabled={loading}
  >
    {iconLocation === "left" && icon}
    <span
      className={cx({
        button_text: true,
        loading,
      })}
    >
      {children}
    </span>
    {iconLocation === "right" && icon}
    <div
      className={cx({
        button_loader_wrapper: true,
        loading,
      })}
    >
      <ButtonLoader />
    </div>
  </button>
);

export default Button;

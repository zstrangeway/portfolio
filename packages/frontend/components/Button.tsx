import styles from "../styles/Button.module.scss";

type ButtonProps = {
  className?: string;
  children?: React.ReactNode;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
};

const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  className,
}: ButtonProps) => (
  <button className={`${className} ${styles.button}`} onClick={onClick}>
    {children}
  </button>
);

export default Button;

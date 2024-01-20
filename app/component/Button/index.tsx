import Link from "next/link";
import styles from "./index.module.scss";

type TProps = {
  children: string;
  className?: string;
};
const Button = ({ children, className }: TProps) => {
  return (
    <>
      <div className={`${className} ${styles.buttonBox}`}>{children}</div>
    </>
  );
};

export default Button;

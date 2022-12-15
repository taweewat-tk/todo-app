import { cx } from "@emotion/css";

type ButtonProps = {
  children: React.ReactNode;
  className?: string;
  type: "submit" | "button";
  onClick?: () => void;
};
const Button = ({ children, className, type, onClick }: ButtonProps) => {
  return (
    <button
      onClick={onClick}
      type={type}
      className={cx(
        "text-white focus:ring-4 focus:outline-none font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center",
        className
      )}
    >
      {children}
    </button>
  );
};
export default Button;

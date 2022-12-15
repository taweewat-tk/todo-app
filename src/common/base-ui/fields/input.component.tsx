import { cx } from "@emotion/css";
import { Fragment } from "react";
import { useField } from "react-final-form";

type InputProps = {
  label?: string;
  name: string;
  type: "text" | "password";
  className?: string;
  placeholder?: string;
  required?: boolean;
};
const Input = ({
  label,
  name,
  type,
  className,
  placeholder,
  required = false,
}: InputProps) => {
  const { input } = useField(name);
  return (
    <Fragment>
      {label && (
        <label htmlFor={name} className="text-black">
          {label}
        </label>
      )}
      <input
        {...input}
        type={type}
        id={name}
        className={cx(
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          className
        )}
        placeholder={placeholder}
        required={required}
      />
    </Fragment>
  );
};
export default Input;

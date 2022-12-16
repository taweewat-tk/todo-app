import { cx } from "@emotion/css";
import { Fragment } from "react";
import { Field } from "react-final-form";

type InputProps = {
  label?: string;
  name: string;
  type: "text" | "password";
  className?: string;
  placeholder?: string;
  required?: boolean;
};
const Input = ({ label, name, type, className, placeholder }: InputProps) => {
  const required = (value: string) => (value ? undefined : "is required.");

  return (
    <Fragment>
      <Field name={name} validate={required}>
        {({ input, meta }) => (
          <>
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
                "border text-sm rounded-lg block w-full p-2.5 bg-transparent border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500",
                className
              )}
              placeholder={placeholder}
            />
            {meta.error && meta.touched && (
              <span className="text-red-500 text-center mb-4 text-sm">
                {label} {meta.error}
              </span>
            )}
          </>
        )}
      </Field>
    </Fragment>
  );
};
export default Input;

import { cx } from "@emotion/css";
import { Fragment } from "react";
import { useField } from "react-final-form";

type TextareaProps = {
  name: string;
  label?: string;
  rows: number;
  className?: string;
};
const Textarea = ({ name, label, rows, className }: TextareaProps) => {
  const { input } = useField(name);
  return (
    <Fragment>
      {label && (
        <label htmlFor={name} className="text-black">
          {label}
        </label>
      )}
      <textarea
        {...input}
        id={name}
        rows={rows}
        className={cx(
          "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500",
          className
        )}
      />
    </Fragment>
  );
};
export default Textarea;

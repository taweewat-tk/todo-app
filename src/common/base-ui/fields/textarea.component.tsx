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
          "border text-sm rounded-lg block w-full p-2.5 bg-transparent border-gray-600 placeholder-gray-400 text-black focus:ring-blue-500 focus:border-blue-500",
          className
        )}
      />
    </Fragment>
  );
};
export default Textarea;

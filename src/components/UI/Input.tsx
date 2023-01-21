import React, { InputHTMLAttributes } from "react";
import classes from "./Input.module.css";

interface inputProps extends InputHTMLAttributes<HTMLInputElement> {
  id: string;
  label: string;
}

const Input = React.forwardRef<HTMLInputElement, inputProps>(
  ({ id, label, ...rest }, ref) => {
    return (
      <div className={classes.actions}>
        <label
          // className={classes.label}
          htmlFor={id}
        >
          {label}
        </label>
        <input
          // className={classes.input}
          type="text"
          ref={ref}
          id={id}
          {...rest}
        />
      </div>
    );
  }
);

export default Input;

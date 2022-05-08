import React, { useState } from "react";
import { Dropdown } from "../Dropdown/Dropdown";
import { isNumber, isValidEmail, isValidPostCode } from "../../../Validation";

import "./field.scss";

export const Field = ({
  label,
  setInput,
  type,
  required,
  dropdown,
  options,
  input,
  setError,
}) => {
  const [isError, setIsError] = useState(false);

  const inputHandler = (e) => {
    const value = e.target.value;
    const name = e.target.name;
    setInput((input) => ({ ...input, [name]: value }));
  };
  const validationHandler = (e) => {
    const value = e.target.value;
    setError((error) => ({ ...error, [label]: false }));
    setIsError(false);
    if (label === "Phone" && !isNumber(value)) {
      setError((error) => ({ ...error, [label]: true }));
      setIsError(true);
    }
    if (label === "Email" && !isValidEmail(value)) {
      setError((error) => ({ ...error, [label]: true }));
      setIsError(true);
    }
    if (label === "Post Code" && !isValidPostCode(value)) {
      setError((error) => ({ ...error, [label]: true }));
      setIsError(true);
    }
    if (required && value.length === 0) {
      setError((error) => ({ ...error, [label]: true }));
      setIsError(true);
    }
    if (!required) {
      setError((error) => ({ ...error, [label]: null }));
      setIsError(null);
    }
  };
  console.log(input[label]);
  console.log(input.length);

  return (
    <div className="field">
      <label>{`${label} ${
        required || label === "Email Opt Out" ? "" : "(Optional)"
      }`}</label>
      <div className="field-input">
        {dropdown && (
          <Dropdown
            label={label}
            options={options}
            onSelection={inputHandler}
          />
        )}
        {type === "textarea" && (
          <textarea
            className={`field-input-box ${
              isError && Object.keys(input).length > 0 && "error"
            }`}
            name={label}
            cols="30"
            rows="10"
            value={input[label] ? input[label] : ""}
            onChange={inputHandler}
            onBlur={validationHandler}
          />
        )}
        {type !== "textarea" && type !== "dropdown" && (
          <input
            className={`field-input-box ${
              isError && Object.keys(input).length > 0 && "error"
            }`}
            type={type}
            name={label}
            value={input[label] ? input[label] : ""}
            onChange={inputHandler}
            onBlur={validationHandler}
          />
        )}
        {isError && Object.keys(input).length > 0 && (
          <span className="material-symbols-outlined error-symbol">error</span>
        )}
      </div>
    </div>
  );
};

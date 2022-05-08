import React from "react";
import { Heading, Field } from "../../atoms";
import "./form.scss";

export const Form = ({ heading, fields, setInput, setError, input }) => {
  return (
    <div className="form">
      <div className="form-heading">
        <Heading text={heading} />
      </div>
      <div className="form-field">
        {fields?.map(({ label, type, required, dropdown, options }, idx) => (
          <div key={idx}>
            <Field
              label={label}
              setInput={setInput}
              type={type}
              input={input}
              dropdown={dropdown}
              options={options}
              required={required}
              setError={setError}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

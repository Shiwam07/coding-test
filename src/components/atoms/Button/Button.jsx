import React from "react";
import "./button.scss";

export const Button = ({ text, type, onClick, buttonDisabled }) => {
  return (
    <div>
      <button
        className={`button button-${type}`}
        onClick={onClick}
        disabled={buttonDisabled}
      >
        {text}
      </button>
    </div>
  );
};

import React from "react";

export const Dropdown = ({ options, onSelection, label }) => {
  return (
    <select
      className="dropdown"
      name={`${label}${label === "First Name" ? "-selection" : ""}`}
      onChange={onSelection}
    >
      {options.map((option) => (
        <option value={option} key={option}>
          {option}
        </option>
      ))}
    </select>
  );
};

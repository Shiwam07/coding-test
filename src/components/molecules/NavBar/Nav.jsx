import React from "react";
import { Button } from "../../atoms";
import "./nav.scss";

export const Nav = ({ onSaveClick, buttonDisabled, setInput }) => {
  return (
    <div className="nav">
      <div className="nav-img">
        <img src="./logo.png" alt="logo" />
      </div>
      <div className="nav-banner">
        <h2>Create Contact</h2>
        <div className="nav-banner-btn">
          <Button
            text={"Cancel"}
            onClick={() => setInput({})}
            type={"secondary"}
          />
          <Button
            text={"Save"}
            type={"primary"}
            onClick={onSaveClick}
            buttonDisabled={buttonDisabled}
          />
        </div>
      </div>
    </div>
  );
};

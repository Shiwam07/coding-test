import React from "react";
import "./modalLabel.scss";

export const ModalLabel = ({ label, input }) => {
  return (
    <div className="modalLabel">
      <div className="modalLabel-info">
        <p className="modalLabel-info-label">{label}</p>
        <p className="modalLabel-info-input">{input[label]}</p>
      </div>
    </div>
  );
};

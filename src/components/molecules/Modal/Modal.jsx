import React from "react";
import { ModalLabel, Heading } from "../../atoms";
import "./modal.scss";

export const Modal = ({ data, input, isShowModal }) => {
  return (
    <div className="modal">
      <div className="modal-contents">
        <span
          class="material-symbols-outlined"
          onClick={() => isShowModal(false)}
        >
          close
        </span>
        <section>
          <h2 className="modal-contents-heading">
            Saved
            <span class="material-symbols-outlined modal-contents-check">
              check
            </span>
          </h2>
          <p className="modal-contents-subHeading">
            Your contact details have been saved
          </p>
        </section>
        <section className="modal-contents-input">
          {data.map(({ heading, fields }) => (
            <>
              <Heading text={heading} />
              <div className="modal-contents-input-label">
                {fields.map(({ label }) => (
                  <ModalLabel label={label} input={input} />
                ))}
              </div>
            </>
          ))}
        </section>
      </div>
    </div>
  );
};

import { useState, useEffect } from "react";
import { Nav, Form, Modal } from "./components";
import data from "./data";
import "./App.css";

function App() {
  const [buttonDisabled, setButtonDisabled] = useState(true);
  const [input, setInput] = useState({});
  const [error, setError] = useState({ initial: null });
  const [showModal, isShowModal] = useState(false);

  console.log(input);
  useEffect(() => {
    const labels = data
      .map(({ fields }) => fields.filter((field) => field.required === true))
      .map((arr) => arr.map(({ label }) => label));
    const allLabels = [].concat.apply([], labels);
    const inputKeys = Object.keys(input);
    setButtonDisabled(
      Object.values(error)
        .filter((err) => err !== null)
        .some((e) => e === true) ||
        !allLabels.every((key) => inputKeys.includes(key))
    );
  }, [error, input]);
  const onSaveClick = () => {
    console.log(input);
    isShowModal(true);
  };

  return (
    <div className="app">
      <Nav
        onSaveClick={onSaveClick}
        setInput={setInput}
        buttonDisabled={buttonDisabled}
      />
      {data?.map(({ heading, fields }, idx) => (
        <div key={idx}>
          <Form
            heading={heading}
            fields={fields}
            setInput={setInput}
            input={input}
            onSaveClick={onSaveClick}
            setButtonDisabled={setButtonDisabled}
            setError={setError}
            error={error}
          />
        </div>
      ))}
      {showModal && (
        <Modal data={data} input={input} isShowModal={isShowModal} />
      )}
    </div>
  );
}

export default App;

import React, { useState } from "react";

const FormBuilder = ({ onSaveForm }) => {
  const [formFields, setFormFields] = useState([]);
  const [fieldLabel, setFieldLabel] = useState("");
  const [fieldType, setFieldType] = useState("text");
  const [errorMessage, setErrorMessage] = useState("");

  const addField = () => {
    if (fieldLabel.length !== 0) {
      setFormFields([...formFields, { type: fieldType, label: fieldLabel }]);
      setFieldLabel("");
      setErrorMessage("");
    } else {
      setErrorMessage("Field label cannot be empty");
    }
  };

  const saveForm = () => {
    onSaveForm(formFields);
  };

  return (
    <div className="container mt-4">
      <h2>Create a New Form</h2>
      <div className="mb-3">
        <input
          type="text"
          className="form-control"
          placeholder="Field Text"
          value={fieldLabel}
          onChange={(e) => setFieldLabel(e.target.value)}
        />
        <p className="text-danger mt-2">{errorMessage}</p>
      </div>

      <div className="mb-3">
        <select
          value={fieldType}
          className="form-select"
          onChange={(e) => setFieldType(e.target.value)}
        >
          <option value="text">Text</option>
          <option value="number">Number</option>
        </select>
      </div>
      <div className="mb-3">
        <button className="btn btn-primary me-2" onClick={addField}>
          Add Field
        </button>
        <button className="btn btn-success" onClick={saveForm}>
          Save Form
        </button>
      </div>

      <h3>Form Preview:</h3>
      <ul className="list-group">
        {formFields.length > 0 ? (
          formFields.map((field, index) => (
            <li className="list-group-item" key={index}>
              {field.label} ({field.type})
            </li>
          ))
        ) : (
          <p>No preview.</p>
        )}
      </ul>
    </div>
  );
};

export default FormBuilder;

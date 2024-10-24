import React, { useState } from "react";

const FormBuilder = ({ onSaveForm }) => {
  const [formFields, setFormFields] = useState([]);
  const [fieldLabel, setFieldLabel] = useState("");

  const addField = () => {
    if (fieldLabel.length !== 0) {
      setFormFields([...formFields, { type: "text", label: fieldLabel }]);
      setFieldLabel("");
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
          placeholder="Field Label"
          value={fieldLabel}
          onChange={(e) => setFieldLabel(e.target.value)}
        />
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
          <p>No prewiew.</p>
        )}
      </ul>
    </div>
  );
};

export default FormBuilder;

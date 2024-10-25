import React, { useState } from 'react';

const FormViewer = ({ form, onSubmit }) => {
  const [responses, setResponses] = useState({});

  //Updates the responses
  const handleChange = (label, value) => {
    setResponses({ ...responses, [label]: value });
  };

  //Calls the onSubmit function 
  const handleSubmit = () => {
    onSubmit(responses);
  };

  return (
    <div className="container mt-4">
      <h2>Submit Form</h2>
      {form.length > 0 ? (
        <form onSubmit={(e) => e.preventDefault()}>
          {form.map((field, index) => (
            <div className="mb-3" key={index}>
              <label className="form-label">{field.label}</label>
              {field.type === 'text' && (
                <input
                  type="text"
                  className="form-control"
                  onChange={(e) => handleChange(field.label, e.target.value)}
                />
              )}
              
            </div>
          ))}
          <button className="btn btn-primary" onClick={handleSubmit}>
            Submit
          </button>
        </form>
      ) : (
        <p>No form to display.</p>
      )}
    </div>
  );
};

export default FormViewer;

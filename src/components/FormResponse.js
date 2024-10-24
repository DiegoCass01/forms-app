import React from 'react';

const FormResponse = ({ responses }) => {
  return (
    <div className="container mt-4">
      <h2>Form Responses</h2>
      {Object.keys(responses).length > 0 ? (
        <ul className="list-group">
          {Object.keys(responses).map((key, index) => (
            <li className="list-group-item" key={index}>
              <strong>{key}:</strong> {responses[key]}
            </li>
          ))}
        </ul>
      ) : (
        <p>No responses submitted yet.</p>
      )}
    </div>
  );
};

export default FormResponse;

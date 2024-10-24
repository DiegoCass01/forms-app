import React, { useState } from 'react';
import FormBuilder from './components/FormBuilder';
import FormViewer from './components/FormViewer';
import FormResponse from './components/FormResponse';

const App = () => {
  const [form, setForm] = useState([]);
  const [responses, setResponses] = useState({});

  const handleFormSave = (newForm) => {
    setForm(newForm);
  };

  const handleFormSubmit = (formResponses) => {
    setResponses(formResponses);
  };

  return (
    <div className="App">
      <h1>Google Forms App</h1>
      <FormBuilder onSaveForm={handleFormSave} />
      <hr />
      <FormViewer form={form} onSubmit={handleFormSubmit} />
      <hr />
      <FormResponse responses={responses} />
    </div>
  );
};

export default App;

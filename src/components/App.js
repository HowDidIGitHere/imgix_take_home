import React, { useState } from 'react';
import '../styles/App.css';
import Imgix from "react-imgix";
import ImageManipulationForm from './forms/ImageManipulationForm';

function App() {

  const [formFields, setFormFields] = useState({
    txt: "",
    blend: "#4400bb"
  });

  const handleUserInput = type => {
    return (e) => {
      e.preventDefault();
      e.stopPropagation();
      setFormFields({ ...formFields, [type]: e.currentTarget.value });
    };
  };

  return (
    <div className="App">
      <header className="App-header">
        <Imgix 
          src="https://assets.imgix.net/unsplash/bridge.jpg" 
          sizes="60rem"
          imgixParams={{ 
            txt: formFields.txt,
            txtcolor: "white",
            blend: formFields.blend
          }}
          alt="golden-gate-bridge"
        />
        <ImageManipulationForm formFields={formFields} setFormFields={setFormFields} handleUserInput={handleUserInput} />
      </header>
    </div>
  );
}

export default App;

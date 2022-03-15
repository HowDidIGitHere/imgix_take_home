import React, { useState } from 'react';
import '../styles/App.css';
import Imgix from "react-imgix";
import ImageManipulationForm from './forms/ImageManipulationForm';

function App() {

  const [formFields, setFormFields] = useState({
    txt: "Check out this sweet bridge",
    txtcolor: "#fff",
    txtsize: "64",
    txtalign: "center middle",
    txtfit: "max",
    blend: "#4400bb",
    blendalpha: "50",
    blendmode: "normal",
  });

  return (
    <div className="App">
      <header className="App-header">
        <div className="image-wrapper">
          <Imgix 
            src="https://assets.imgix.net/unsplash/bridge.jpg" 
            imgixParams={formFields}
            alt="golden-gate-bridge"
          />
        </div>
        <ImageManipulationForm formFields={formFields} setFormFields={setFormFields} />
      </header>
    </div>
  );
}

export default App;

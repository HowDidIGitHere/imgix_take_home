import React, { useState } from 'react';
import '../styles/App.css';
import '../styles/image.css'
import Imgix from "react-imgix";
import ImageManipulationForm from './forms/ImageManipulationForm';

function App() {

  const [imgSettings, setImgSettings] = useState({
    txt: "Check out this sweet bridge!",
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
        <h1 className="title">See What Imgix Can Do!</h1>
        <div className="image-wrapper">
          <Imgix 
            src="https://assets.imgix.net/unsplash/bridge.jpg" 
            imgixParams={imgSettings}
            alt="golden-gate-bridge"
          />
          <ImageManipulationForm imgSettings={imgSettings} setImgSettings={setImgSettings} />
        </div>
      </header>
    </div>
  );
}

export default App;

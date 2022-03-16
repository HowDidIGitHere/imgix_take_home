import React, { useState } from "react";
import "../styles/App.css";
import Imgix from "react-imgix";
import ImageManipulationForm from "./forms/ImageManipulationForm";

function App() {
  const DEFAULT_IMGIX_WIDTH = 640;
  const [imgSettings, setImgSettings] = useState({
    txt: "Check out this sweet bridge!",
    txtcolor: "#fff",
    txtsize: "48",
    txtalign: "center middle",
    txtfit: "max",
    blend: "#4400bb",
    blendalpha: "50",
    blendmode: "normal"
  });

  return (
    <div className="App">
      <header className="App-header">
        <h1 className="title">See What Imgix Can Do!</h1>
        <div className="image-wrapper">
          <Imgix
            src="https://assets.imgix.net/unsplash/bridge.jpg"
            imgixParams={imgSettings}
            width={DEFAULT_IMGIX_WIDTH}
            alt="golden-gate-bridge"
          />
          <ImageManipulationForm
            imgSettings={imgSettings}
            setImgSettings={setImgSettings}
          />
        </div>
      </header>
    </div>
  );
}

export default App;

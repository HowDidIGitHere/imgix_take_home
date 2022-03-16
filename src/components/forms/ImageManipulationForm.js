import React, { useState } from "react";
import "../../styles/form.css"

export default function ImageManipulationForm(props) {

  const [tempVals, setTempVals] = useState({
    txt: props.imgSettings.txt,
    blend: props.imgSettings.blend
  });

  const handleUserInput = type => {
    return (e) => {
      e.preventDefault();
      e.stopPropagation();
      setTempVals({ ...tempVals, [type]: e.currentTarget.value });
    };
  };

  const handleSubmit = e => {
    e.preventDefault();
    e.stopPropagation();
    props.setImgSettings({ ...props.imgSettings, ...tempVals });
  };

  return (
    <form className="image-overlay-form">
      <label className="text-overlay" htmlFor="txt-input">Text</label>
      <textarea id="txt-input" cols="30" rows="4" placeholder="Add Text!" value={tempVals.txt} onChange={handleUserInput('txt')}></textarea>

      <label className="blend-color-overlay" htmlFor="blend-input">Blend Color</label>
      <div className="color-input-wrapper">
        <input id="blend-input" type="color" value={tempVals.blend} onChange={handleUserInput('blend')} />
        <p id="blend-value">
          {tempVals.blend}
        </p>
      </div>

      <button onClick={handleSubmit}>Make Changes!</button>
    </form>
  );
}
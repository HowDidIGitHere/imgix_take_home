import React, { useState } from "react";

export default function ImageManipulationForm(props) {

  const [tempVals, setTempVals] = useState({
    txt: props.formFields.txt,
    blend: props.formFields.blend
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
    props.setFormFields({ ...props.formFields, ...tempVals });
  };

  return (
    <form className="image-overlay-form">
      <label className="text-overlay">
        <p>Text:</p>
        <input type="text" value={tempVals.txt} placeholder="Add Text!" onChange={handleUserInput('txt')} />
      </label>

      <label className="blend-color-overlay">
        <p>Blend:</p>
        <input type="color" value={tempVals.blend} onChange={handleUserInput('blend')} />
      </label>

      <button onClick={handleSubmit}>Make Changes!</button>
    </form>
  );
}
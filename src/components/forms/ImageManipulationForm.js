import React from "react";

export default function ImageManipulationForm(props) {

  return (
    <form className="image-overlay-form">
      <label className="text-overlay">
        <p>Text</p>
        <input type="text" value={props.formFields.txt} placeholder="Add Text!" onChange={props.handleUserInput('txt')} />
      </label>

      <label className="blend-color-overlay">
        <p>Blend</p>
        <input type="color" value={props.formFields.blend} onChange={props.handleUserInput('blend')} />
      </label>
    </form>
  );
}
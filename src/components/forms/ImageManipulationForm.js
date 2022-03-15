import React from "react";

export default function ImageManipulationForm(props) {

  const handleUserInput = type => {
    return (e) => {
      e.preventDefault();
      e.stopPropagation();
      props.setFormFields({ ...props.formFields, [type]: e.currentTarget.value });
    };
  };

  return (
    <form className="image-overlay-form">
      <label className="text-overlay">
        <p>Text:</p>
        <input type="text" value={props.formFields.txt} placeholder="Add Text!" onChange={handleUserInput('txt')} />
      </label>

      <label className="blend-color-overlay">
        <p>Blend:</p>
        <input type="color" value={props.formFields.blend} onChange={handleUserInput('blend')} />
      </label>
    </form>
  );
}
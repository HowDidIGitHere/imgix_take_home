import React, { useState } from "react";

export default function ImageManipulationForm() {

  const [txt, setTxt] = useState("");
  const [blend, setBlend] = useState("#4400bb");

  const handleUserInput = type => {
    return (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (type === "txt") {
        setTxt(e.currentTarget.value);
      } else {
        setBlend(e.currentTarget.value);
      }
    };
  };

  return (
    <form className="image-overlay-form">
      <label className="text-overlay">
        <p>Text</p>
        <input type="text" value={txt} onChange={handleUserInput('txt')} />
      </label>

      <label className="blend-color-overlay">
        <p>Blend</p>
        <input type="color" value={blend} onChange={handleUserInput('blend')} />
      </label>
    </form>
  );
}
import React, { useEffect, useState } from "react";
import "../../styles/form.css";

export default function ImageManipulationForm(props) {
  const [tempVals, setTempVals] = useState({
    txt: "",
    blend: ""
  });

  useEffect(() => {
    const { txt, blend } = props.imgSettings;
    setTempVals({
      txt,
      blend
    });
  }, [props.imgSettings, props.imgSettings.txt, props.imgSettings.blend]);

  const handleUserInput = (type) => {
    return (e) => {
      e.preventDefault();
      e.stopPropagation();
      setTempVals({ ...tempVals, [type]: e.currentTarget.value });
    };
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();
    props.setImgSettings({ ...props.imgSettings, ...tempVals });
  };

  return (
    <form className="image-overlay-form" onSubmit={handleSubmit}>
      <div className="form-element-row">
        <label className="text-overlay" htmlFor="txt-input">
          Text
        </label>
        <textarea
          id="txt-input"
          placeholder="Add Text!"
          value={tempVals.txt}
          onChange={handleUserInput("txt")}
        ></textarea>
      </div>

      <div className="form-element-row">
        <label className="blend-color-overlay" htmlFor="blend-input">
          Blend Color
        </label>
        <div className="color-input-wrapper">
          <input
            id="blend-input"
            type="color"
            value={tempVals.blend}
            onChange={handleUserInput("blend")}
          />
          <p id="blend-value">{tempVals.blend}</p>
        </div>
      </div>

      <button className="button" type="submit">
        Make Changes!
      </button>
    </form>
  );
}

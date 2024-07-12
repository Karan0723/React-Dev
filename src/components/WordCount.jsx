import React, { useState } from "react";
import PropTypes from "prop-types";

export default function WordCount(props) {
  const [text, setText] = useState("");

  // TEXT TO UPPERRCASE
  const textClickUpperCase = () => {
    console.log("Text Clicked");
    let textNew = text.toUpperCase();
    setText(textNew);
    props.showAlert("UpperCase Has Been Updated", "primary");
  };

  // TEXT TO LOWERCASE
  const textClickLowerCase = () => {
    console.log("Text Clicked");
    let textNew = text.toLowerCase();
    setText(textNew);
    props.showAlert("LowerCase Has Been Updated", "primary");
  };

  // CLEAR TEXT
  const textClear = () => {
    setText("");
    props.showAlert("Text Has Been Cleared", "primary");
  };

  // COPY TEXT
  const textClickCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setText("Coppied!");
      })
      .catch(() => {
        setText("Coppied Failed");
      });

    props.showAlert("Text Has Been Coppied", "primary");
  };

  // REMOVE EXTRA SPACES
  const textRemove = () => {
    let newText = text.split(/ [ ]+/);
    setText(newText.join(" "));

    props.showAlert("Extra space has been removed", "primary");
  };

  // ADDING BLUE COLOR
  const textChange = (event) => {
    console.log("Text change");
    setText(event.target.value);
  };

  return (
    <div className="container">
      <div className="mb-3">
        <h1 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          Words And Characters Counter
        </h1>
        <textarea
          className={`form-control bg-${
            props.mode === "light" ? "light" : "light"
          }`}
          id="exampleFormControlTextarea1"
          rows="8"
          value={text}
          onChange={textChange}
        >
          {" "}
        </textarea>

        <button
          className={`btn btn-danger mt-3 mx-2`}
          onClick={textClickUpperCase}
        >
          Click To Change In Upper Case
        </button>

        <button
          className="btn btn-danger mt-3 mx-2"
          onClick={textClickLowerCase}
        >
          Click To Change In Lower Case
        </button>

        <button className="btn btn-danger mt-3 mx-2" onClick={textClickCopy}>
          Click To Copy Text
        </button>

        <button className="btn btn-danger mt-3 mx-2" onClick={textClear}>
          Click To Clear Text
        </button>

        <button className="btn btn-danger mt-3 mx-2" onClick={textRemove}>
          Click To Remove Extra Space
        </button>

        {/* <button className="btn btn-primary mt-3 mx-2" onClick={backgroundgBlue}>
          Click To Change Blue Color
        </button> */}

        <p className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          {text.split(" ").filter((word) => word !== "").length} Words And {text.length} Characters{" "}
        </p>

        <p className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          {" "}
          {0.008 * text.split(" ").length} Minutes To Read
        </p>

        <h1 className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          Preview
        </h1>
        <p className={`text-${props.mode === "light" ? "dark" : "light"}`}>
          {" "}
          {text.length > 0 ? text : "Enter something"}
        </p>
      </div>
    </div>
  );
}

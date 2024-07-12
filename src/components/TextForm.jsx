import React, { useState } from "react";

function Textform() {
  const [text, setText] = useState("Change Your Text In UpperCase");

  const handleClick = () => {
    console.log("Onclick Changed");
    let newText = text.toUpperCase();
    setText(newText);
  };

  const textUpper = (event) => {
    console.log("Onclick Changed");

    setText(event.target.value);
  };

  return (
    <div>
      <div class="mb-3">
        <h1>Onclick Uppercase Change Project</h1>

        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
          value={text}
          onChange={textUpper}
        ></textarea>

        <button className="btn btn-danger mt-3" onClick={handleClick}>
          Click To Change
        </button>
      </div>
    </div>
  );
}

export default Textform;

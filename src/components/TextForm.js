import React, { useState } from "react";

export default function TextForm(props) {
  const [text, setText] = useState("");
  const [wordCount, setWordCount] = useState(0);

  //   text = "new text"; // Wrong way to change the state
  //   setText("new text"); // Correct way to change the state

  const handleUpClick = () => {
    let newText = text.toUpperCase();
    setText(newText);
  };

  const handleLowClick = () => {
    let newText = text.toLowerCase();
    setText(newText);
  };

  const handleClearClick = () => {
    let newText = "";
    setText(newText);
  };

  const handleCopy = () => {
    let text = document.getElementById("myBox");
    text.select(); // The select() method is used to select the content of a text field.

    // The Window Navigator Object
    // The navigator object contains information about the browser.
    // The location object is a property of the window object.
    // The navigator object is accessed with:
    // window.navigator or just navigator

    // Navigator.clipboard
    // The Clipboard API adds to the Navigator interface the read-only clipboard property, which returns the Clipboard object used to read and write the clipboard's contents.

    // The Clipboard interface's writeText() property writes the specified text string to the system clipboard.

    navigator.clipboard.writeText(text.value);
  };

  const handleExtraSpaces = () => {
    let newText = text.split(/ +/);
    setText(newText.join(" "));
  };

  const handleOnChange = (event) => {
    setText(event.target.value);
    let wCount;

    if (
      event.target.value === "" ||
      event.target.value[event.target.value.length - 1] === " "
    ) {
      wCount = event.target.value.split(/ +/).length - 1;
      setWordCount(wCount);
    } else {
      wCount = event.target.value.split(/ +/).length;
      setWordCount(wCount);
    }

    // Changing value of wordCount if there is spaces in starting

    if (
      event.target.value.split(/ +/)[0] === "" &&
      event.target.value.split(/ +/)[1] === ""
    ) {
      setWordCount(0);
    } else if (
      event.target.value.split(/ +/)[0] === "" &&
      event.target.value.split(/ +/)[1] !== ""
    ) {
      setWordCount(wCount - 1);
    } else {
    }
  };

  return (
    <>
      <div className="container">
        <h1>{props.heading}</h1>
        <div className="mb-3">
          <textarea
            className="form-control"
            id="myBox"
            rows="8"
            value={text}
            onChange={handleOnChange}
          ></textarea>
        </div>
        <button className="btn btn-primary" onClick={handleUpClick}>
          Convert to Uppercase
        </button>
        <button className="btn btn-primary mx-2" onClick={handleLowClick}>
          Convert to Lowercase
        </button>
        <button className="btn btn-primary" onClick={handleClearClick}>
          Clear Text
        </button>
        <button className="btn btn-primary mx-2" onClick={handleCopy}>
          Copy Text
        </button>
        <button className="btn btn-primary" onClick={handleExtraSpaces}>
          Remove Extra Spaces
        </button>
      </div>
      <div className="container my-3">
        <h2>Your text summary</h2>
        <p>
          {wordCount} words and {text.length} characters
        </p>
        <p>{0.008 * text.split(" ").length} minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
      </div>
    </>
  );
}

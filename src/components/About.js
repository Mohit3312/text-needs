import React from "react";

export default function About(props) {
  // const [buttonText, setButtonText] = useState("Enable Dark Mode");

  // if (props.mode === "dark") {
  //   setMyStyle({
  //     color: "white",
  //     backgroundColor: "black",
  //   });
  // } else {
  //   setMyStyle({
  //     color: "black",
  //     backgroundColor: "white",
  //   });
  // }

  // const toggleStyle = () => {
  //   if (myStyle.color === "black") {
  //     setMyStyle({
  //       color: "white",
  //       backgroundColor: "black",
  //     });
  //     setButtonText("Enable Light Mode");
  //   } else {
  //     setMyStyle({
  //       color: "black",
  //       backgroundColor: "white",
  //     });
  //     setButtonText("Enable Dark Mode");
  //   }
  // };

  return (
    <div
      className="container my-3 py-3 border border-dark rounded"
      style={
        props.mode === "light"
          ? { color: "black", backgroundColor: "white" }
          : { color: "white", backgroundColor: "#9e9e9e54" }
      }
    >
      <h1>About Us</h1>
      <div
        className="accordion my-3 border border-dark rounded"
        id="accordionExample"
        style={
          props.mode === "light"
            ? { color: "black", backgroundColor: "white" }
            : { color: "white", backgroundColor: "black" }
        }
      >
        <div
          className="accordion-item"
          style={
            props.mode === "light"
              ? { color: "black", backgroundColor: "white" }
              : { color: "white", backgroundColor: "black" }
          }
        >
          <h2 className="accordion-header" id="headingOne">
            <button
              className="accordion-button"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseOne"
              aria-expanded="true"
              aria-controls="collapseOne"
              style={
                props.mode === "light"
                  ? { color: "black", backgroundColor: "white" }
                  : { color: "white", backgroundColor: "rgb(153 16 16 / 83%)" }
              }
            >
              <strong>Analyze Your text</strong>
            </button>
          </h2>
          <div
            id="collapseOne"
            className="accordion-collapse collapse show"
            aria-labelledby="headingOne"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              TextNeeds gives you a way to analyze your text quickly and
              efficiently.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={
            props.mode === "light"
              ? { color: "black", backgroundColor: "white" }
              : { color: "white", backgroundColor: "black" }
          }
        >
          <h2 className="accordion-header" id="headingTwo">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseTwo"
              aria-expanded="false"
              aria-controls="collapseTwo"
              style={
                props.mode === "light"
                  ? { color: "black", backgroundColor: "white" }
                  : { color: "white", backgroundColor: "rgb(153 16 16 / 83%)" }
              }
            >
              <strong>Free to use</strong>
            </button>
          </h2>
          <div
            id="collapseTwo"
            className="accordion-collapse collapse"
            aria-labelledby="headingTwo"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              TextNeeds is a free character counter tool that provides instant
              character count & word count statistics for a given text.
              TextNeeds reports the number of words and characters. Thus it is
              suitable for writing text with word/character limit.
            </div>
          </div>
        </div>
        <div
          className="accordion-item"
          style={
            props.mode === "light"
              ? { color: "black", backgroundColor: "white" }
              : { color: "white", backgroundColor: "black" }
          }
        >
          <h2 className="accordion-header" id="headingThree">
            <button
              className="accordion-button collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#collapseThree"
              aria-expanded="false"
              aria-controls="collapseThree"
              style={
                props.mode === "light"
                  ? { color: "black", backgroundColor: "white" }
                  : { color: "white", backgroundColor: "rgb(153 16 16 / 83%)" }
              }
            >
              <strong>Browser Compatible</strong>
            </button>
          </h2>
          <div
            id="collapseThree"
            className="accordion-collapse collapse"
            aria-labelledby="headingThree"
            data-bs-parent="#accordionExample"
          >
            <div className="accordion-body">
              This word counter software works in any web browsers such as
              Chrome, Firefox, Internet Explorer, Safari, Opera. It suits to
              count characters in facebook, blog, books, excel document, pdf
              document, essays, etc.
            </div>
          </div>
        </div>
      </div>

      {/* <button type="button" onClick={toggleStyle} className="btn btn-primary">
        {buttonText}
      </button> */}
    </div>
  );
}

import React from "react";

export default function Alert(props) {
  const capitalize = (word) => {
    let firstChar = word.toUpperCase().charAt(0);
    let restChar = word.slice(1);
    return firstChar + restChar;
  };

  return (
    props.alert && (
      <div
        className={`alert alert-${props.alert.type} alert-dismissible fade show`}
        role="alert"
      >
        <strong>{capitalize(props.alert.type)}</strong>: {props.alert.message}
      </div>
    )
  );
}

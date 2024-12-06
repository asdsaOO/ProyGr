import React from "react";

function TextAreaForm(props) {
  return (
    <>
      <div>
        <label htmlFor={props.id} className="form-label fs-6 text-dark fw-bold">{props.text}</label>
        <textarea
          name={props.name}
          className="form-control rounded-3 shadow-sm p-2 border-2"
          id={props.id}
          rows="4"
          disabled={props.disabled}
          value={props.value}
          onChange={props.onChange}
          defaultValue={props.defaultValue}
          style={{
            fontSize: "1rem", // Tamaño de texto moderado
          }}
        ></textarea>
      </div>
    </>
  );
}

export { TextAreaForm };

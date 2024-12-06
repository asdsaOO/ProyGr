import React from "react";

function InputComp(props) {
  return (
    <>
      <div>
        <label htmlFor={props.id} className="form-label fs-6 text-dark fw-bold">{props.text}</label>
        <input
          name={props.name}
          type={props.type}
          className="form-control rounded-3 shadow-sm p-2 border-2"
          id={props.id}
          placeholder={props.placeholder}
          defaultValue={props.defaultValue}
          value={props.value}
          onChange={props.onChange}
          style={{
            borderWidth: "2px", // Aumenta ligeramente el grosor del borde
            fontSize: "1rem", // Tamaño de texto más moderado
          }}
          readOnly={props.readOnly}
        />
      </div>
    </>
  );
}

export { InputComp };

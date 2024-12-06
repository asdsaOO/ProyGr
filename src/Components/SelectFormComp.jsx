import React from "react";

function SelectFormComp(props) {
  return (
    <div hidden={props.hide} >
      <label htmlFor={props.id} className="form-label fs-6 text-dark fw-bold">{props.text}</label>
      <select
        className="form-select rounded-3 shadow-sm p-2 border-2"
        aria-label="Default select example"
        id={props.id}
        name={props.name}
        onChange={props.onchange}
        defaultValue={props.defaultData ? props.defaultData.value : 0}
        style={{
          fontSize: "1rem", // Tamaño moderado del texto
        }}
      >
        <option value={props.defaultData ? props.defaultData.value : 0} hidden>
          {props.defaultData ? props.defaultData.text : props.text}
        </option>
        {
          props.options ? (
            props.options.map((option, index) => (
              <option key={index} value={option.value}>
                {option.text}
              </option>
            ))
          ) : null
        }
      </select>
    </div>
  );
}

export { SelectFormComp };

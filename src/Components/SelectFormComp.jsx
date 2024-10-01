import React from "react";

function SelectFormComp(props) {
  return (
    <div hidden={props.hide}>
      <label htmlFor={props.id} className="form-label">{props.text}</label>
      <select  className="form-select" aria-label="Default select example" id={props.id} name={props.name} onChange={props.onchange}>
        <option selected>Selecciona {props.text}</option>
        {
          props.options?(
          props.options.map((option, index) => (
              <option key={index} value={option.value}>{option.text}</option>
            )
          )
        ): null
        }
      </select>
    </div>
  )
}

export{SelectFormComp}
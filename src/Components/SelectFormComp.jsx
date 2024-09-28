import React from "react";

function SelectFormComp(props) {
  return (
    <>
      <label htmlFor={props.id} className="form-label">{props.text}</label>
      <select class="form-select" aria-label="Default select example" id={props.id} name={props.name}>
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
    </>
  )
}

export{SelectFormComp}
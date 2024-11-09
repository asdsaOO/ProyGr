import React from "react";

function SelectFormComp(props) {
  return (
    <div hidden={props.hide}>
      <label htmlFor={props.id} className="form-label">{props.text}</label>
      <select  className="form-select" aria-label="Default select example" id={props.id} name={props.name} onChange={props.onchange}>
        <option value={props.defaultData?props.defaultData.value:0} hidden>{props.defaultData?props.defaultData.text:props.text}</option>
        {
          props.options?(
          props.options.map((option, index) => (
              <option key={index} value={option.value} >{option.text}</option>
            )
          )
        ): null
        }
      </select>
    </div>
  )
}

export{SelectFormComp}
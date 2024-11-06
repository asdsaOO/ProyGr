import React from "react";

function TextAreaForm (props){
  return(
  <>
    <label htmlFor={props.id} className="form-label">{props.text}</label>
    <textarea name={props.name} className="form-control" id={props.id} rows="3" disabled={props.disabled} 
    value={props.value} onChange={props.onChange}></textarea>
  </>
  );

}

export {TextAreaForm}
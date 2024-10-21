import React from "react";

function TextAreaForm (props){
  return(
  <>
    <label htmlFor={props.id} className="form-label">{props.text}</label>
    <textarea name={props.name} className="form-control" id={props.id} rows="3" defaultValue= {props.value}></textarea>

  </>
  );

}

export {TextAreaForm}
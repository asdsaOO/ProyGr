import React from "react";

function TextAreaForm (props){
  return(
  <>
    <label htmlFor={props.id} className="form-label">{props.text}</label>
    <textarea name={props.id} className="form-control" id={props.id} rows="3">asdfasd</textarea>

  </>
  );

}

export {TextAreaForm}
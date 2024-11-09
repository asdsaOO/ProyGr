import React from "react";
function InputComp (props){
  return (
    <>
      <label htmlFor={props.id} className="form-label">{props.text}</label>
      <input name={props.name} type={props.type} className="form-control" id={props.id} placeholder={props.placeholder} defaultValue={props.defaultValue} 
             value={props.value} onChange={props.onChange}/>
    </>

  );

}

export {InputComp}
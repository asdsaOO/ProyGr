import React from "react";

function ButtonFormComp(props){
  return(

    <button className="btn btn-danger" type={props.type}>{props.texto}</button>
  );

}

export {ButtonFormComp}
import React, { useState } from "react";
function useModalCaller(value){
  const [active,setActive] = useState(false);
  const [data,setData] = useState(value);

  const activeModal=(Sdata)=>{
    setData(Sdata)
    setActive(true);
  
  }

  const closeModal=()=>{
    setActive(false)
  }

  return[data,active,activeModal,closeModal]
}


export{useModalCaller}
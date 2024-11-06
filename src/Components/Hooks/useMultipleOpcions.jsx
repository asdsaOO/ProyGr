import { useState } from "react";
function useMultipleOptions(data){
  const [items,setItems]=useState(data);

  const cambiarElemento= (index,value)=>{
    const itemsUp = [...items];
    itemsUp[index]=value;
    setItems(itemsUp);
  }

  return [items,cambiarElemento];

}

export{useMultipleOptions}
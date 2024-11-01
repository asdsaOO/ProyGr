import { useEffect, useState } from "react";

function useExclusiveToggle() {
  const [items,setItems]=useState([true,false,false]);
  const changevalues=(index)=>{

    switch (index){
      case 0:
        setItems([true,false,false]);
        break;
      case 1:
        setItems ([false,true,false]);
        break;
      case 2:
        setItems([false,false,true]);
        break;

    }
  }
  return [items,changevalues]
}

export { useExclusiveToggle };
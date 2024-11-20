import React from "react"
import { useState, useEffect } from "react"

function useFutureReloadable(action,input){
 const [cargando,setcarga] = useState(true);
 const [data, setdata]=useState([]);
 const handleData = (variable)=>{
  
  
  setcarga(true);
  action(variable?variable:null).then((resp)=>{
  setdata(resp);
  setcarga(false);
});
}
 useEffect(()=>{
  
  
  handleData(input);
 },[])

 return [cargando,data,handleData]

}

export{useFutureReloadable}
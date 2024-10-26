 import React from "react"
 import { useState, useEffect } from "react"
 
 function useFuture(action){
  const [cargando,setcarga] = useState(true);
  const [data, setdata]=useState([]);
  useEffect(()=>{
    action().then((resp)=>{
      setdata(resp);
      setcarga(false);
    });
    
  },[])

  return [cargando,data]

 }

 export{useFuture}
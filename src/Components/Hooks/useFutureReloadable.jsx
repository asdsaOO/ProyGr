import React from "react"
import { useState, useEffect } from "react"

function useFutureReloadable(action){
 const [cargando,setcarga] = useState(true);
 const [data, setdata]=useState([]);
 const handleData = ()=>{
  setcarga(true);
  action().then((resp)=>{
  setdata(resp);
  setcarga(false);
});
}
 useEffect(()=>{
  handleData();
 },[])

 return [cargando,data,handleData]

}

export{useFutureReloadable}
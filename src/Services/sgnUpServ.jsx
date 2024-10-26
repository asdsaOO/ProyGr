import React from "react";
import axios from "axios";
const url="http://localhost:3000/api/account";

async function registrarUsuario (data){
  console.log("registrar servicio");
  console.log(data);
  const response = (await axios.post(url+'/registrar',data)).data;
  return response;
}
async function listarRoles (){
  const response =(await axios.get(url+'/listarRoles')).data;
  return response;
}


export{registrarUsuario,listarRoles}
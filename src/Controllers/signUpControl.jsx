import React from "react";
import * as service from "../Services/sgnUpServ"
import { getError } from "../models/errResponse";

async function datosPagina (){
  const roles= await service.listarRoles();
  const rolesSelect = [];
  roles.forEach(element => {
    var objeto = {
      value:element.id,
      text:element.descripcion
    }
    rolesSelect.push(objeto);
    
  });
  const data = {
    "rolesSelect":rolesSelect
  }
  return data;
}


async function registrarUsuario (e){
  
  const dataform = new FormData(e.target);
  const dataObj=Object.fromEntries(dataform);
  console.log('datos enviados');
  console.log(dataObj);
  if(!verificarCorreo(dataObj.inpEmail)){
    return getError('el formato no es de un correo electronico');
  }else{
    const dataSend = {
      email:dataObj.inpEmail.trim(),
      nombre:dataObj.inpNombre.trim(),
      apellido:dataObj.inpApellido.trim(),
      idRol:dataObj.idRol,
      password:dataObj.inpPassword.trim(),
      celular:dataObj.inpCelular
    }
    console.log('datos a enviar');
    console.log(dataSend);
    const response = service.registrarUsuario(dataSend);
    console.log(response);
    
    return response;
  }
  
}
function verificarCorreo(correo){
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexCorreo.test(correo);

}

export{datosPagina,registrarUsuario}
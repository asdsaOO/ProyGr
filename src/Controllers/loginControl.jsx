import React from "react";
import * as service from '../Services/loginService';
import { getError } from "../models/errResponse";
import {jwtDecode} from 'jwt-decode';
import * as throwSwal from "../helpers/throwSwalA"

async function datosPagina() {
  const roles = await service.listarRoles();
  const rolesSelect = [];
  roles.forEach(element => {
    var objeto = {
      value: element.id,
      text: element.descripcion
    }
    rolesSelect.push(objeto);

  });
  const data = {
    "rolesSelect": rolesSelect
  }
  return data;
}

async function autenticarUsuario(e) {
  const dataForm = new FormData(e.target);
  const data = Object.fromEntries(dataForm);
  console.log('datos enviados');
  console.log(data);
  if (!verificarCorreo(data.inpEmail)) {
    return getError('el formato no es un correo electronico');
  } else {
    const dataSend = {
      email: data.inpEmail.trim(),
      password: data.inpPassword.trim(),
      idRol: data.idRol
    }
    const response = service.autenticarUsuario(dataSend);
    return response;
  }
}
async function obtenerDatosUsuario (){
  const idUsuario = obtenerId();
  const dataSend = {
    idUsuario:idUsuario
  }
  const resp = await service.obtenerDatosUsuario(dataSend);
  console.log(resp);
  
  return resp
}
function getUserRoleFromCookie() {
  const token = obtenerCookie('Nkauth'); // Reemplaza 'token' con el nombre de tu cookie
  if (token) {
    try {
      const decoded = jwtDecode(token); // Decodifica el token JWT
      return decoded.rol; // Devuelve el rol
    } catch (error) {
      console.error('Error al decodificar el token:', error);
    }
  } else {
    console.log('Token no encontrado en la cookie.');
    return null;
  }
}
function obtenerCookie (name){
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(';').shift();
  return null;
}
function obtenerId() {
  
  const token = obtenerCookie('Nkauth'); 
  if (token) {
    try {
      const decoded = jwtDecode(token); 
      
      return decoded.idUsuario; 
    } catch (error) {
      console.error('Error al decodificar el token:', error);
    }
  } else {
    console.log('Token no encontrado en la cookie.');
    return null;
  }
}
async function modificarDatosUsuario(e,password){
  e.preventDefault();
  try{
    const dataForm = new FormData (e.target);
    const dataObj= Object.fromEntries(dataForm);
    const rol= await getUserRoleFromCookie();
    const id = await obtenerId();
    const dataSend={
      id:id,
      celular:dataObj.inpCelular,
      email:dataObj.inpEmail.trim(),
      nombre:dataObj.inpNombre.trim(),
      apellido:dataObj.inpApellido.trim(),
      password:dataObj.inpPassword.trim(),
      passwordConfirm:password.trim(),
      idRol:rol
    }
    const resp =  await service.modificarDatosUsuario(dataSend);
    throwSwal.callSwal(resp,()=>{window.location.reload();},'actualizado exitosamente');
    
  }catch(e){
    console.log(e);
  }
}



function verificarCorreo(correo) {
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexCorreo.test(correo);

}

export { datosPagina,
        autenticarUsuario,
        getUserRoleFromCookie,
        obtenerId,
        obtenerDatosUsuario,
        modificarDatosUsuario }


import React from "react";
import * as service from '../Services/loginService';
import { getError } from "../models/errResponse";


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

function verificarCorreo(correo) {
  const regexCorreo = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regexCorreo.test(correo);

}

export { datosPagina,autenticarUsuario }


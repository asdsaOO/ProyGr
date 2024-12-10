import * as service from "../Services/studentsAdmServ";
import { getError } from "../models/errResponse";

async function datosPagina (estTipo){
  const estDataSend ={
    tipo:estTipo
  }
  try{
  const estudiantesData =  await service.listarEstudiantes(estDataSend);
  const data ={
    estudiantes: estudiantesData
  }
  return data;
}catch(e){
  console.log("error en la consulta: "+e);
  return getError ("Error: Al consultar el servicio")
}
}

async function habilitarEstudiante (data){
  console.log('llego controll');
  
  try{
  console.log('datos de controlador'+JSON.stringify(data));
  const dataSend={
    id:data.id,
    habilitado:data.habilitado
  }
  console.log('datos a enviar'+JSON.stringify(dataSend));
  const response = await service.habilitarEstudiante(dataSend);
  console.log(response);
  
  return response;
}catch(e){
  console.log(e);
  return getError('ERROR: Controlador');
}
}
async function eliminarEstudiante (data){
  console.log(data);
  
  
  try{
  console.log('datos de controlador'+JSON.stringify(data));
  const dataSend={
    idUsuario:data.id
  }
  console.log('datos a enviar'+JSON.stringify(dataSend));
  const response = await service.eliminarEstudiante(dataSend);
  console.log(response);
  
  return response;
}catch(e){
  console.log(e);
  return getError('ERROR: Controlador');
}
}

async function registroRapido(e){
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  const dataSend ={
    nombre:data.inpNombre.trim(),
    apellido:data.inpApellido.trim(),
    password:Math.floor(Math.random() * (999999 - 100000 + 1)) + 100000,
    idRol:4,
    email:data.inpEmail
  }
  const response = await service.registro_rapido(dataSend);
  return response;
}

export{datosPagina,habilitarEstudiante,registroRapido,eliminarEstudiante}
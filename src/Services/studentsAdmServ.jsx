import axios from "axios";
const url ='http://localhost:3000/api/users'
import * as secodaryservice from"../Services/sgnUpServ";

async function listarEstudiantes (data){
  const response = (await axios.get(url+"/estudiantes",{withCredentials:true, params:data})).data;
  console.log(response);
  return response
  
}
async function habilitarEstudiante (data){
  const response = (await axios.put(url+"/habilitarEstudiante",data,{withCredentials:true})).data;
  return response;
}

async function registro_rapido(data){
  const response = (await (axios.put('http://localhost:3000/api/account/registroRapido',data))).data;
  console.log(response);
  
  return response;
}

async function eliminarEstudiante(data){
  const response = (await (axios.post(url + "/eliminarEstudiante",data,{withCredentials:true}))).data;
  return response;
}
export {listarEstudiantes,habilitarEstudiante,registro_rapido,eliminarEstudiante}
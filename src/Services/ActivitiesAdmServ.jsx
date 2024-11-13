
import axios from "axios";
const url="http://localhost:3000/api/actividades";
const url2="http://localhost:3000/api/topics";
async function listarTemas (){
  const response = ((await axios.get(url2+"/listar",{withCredentials:true})).data);
  console.log(response);
  return response
}

async function listarSubtemas(data){
  const response =(await axios.put(url2+"/listarSubtemas",data,{withCredentials:true})).data;
  return response;
}
async function listarActividades(){
  const resp= (await (axios.get(url+"/listarActividades",{withCredentials:true}))).data;
  console.log(resp);
  return resp;
  
}
async function crearActividad (data){
  const resp = (await (axios.post(url+"/crearActividad",data,{withCredentials:true}))).data;
  return resp;
}

async function actualizarActividades(data){
  const resp = (await (axios.post(url+"/actualizarActividades",data,{withCredentials:true}))).data;
  return resp;
}
async function eliminarActividad (data){
  const resp= (await (axios.post(url+"/eliminarActividad",data,{withCredentials:true}))).data;
  return resp;

}

export{listarTemas,listarSubtemas,listarActividades,crearActividad,actualizarActividades,eliminarActividad}
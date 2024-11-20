import axios from "axios";
const url="http://localhost:3000/api/resultados";

async function listarRank(data){

  const resp = (await (axios.get(url+'/listarRank',{withCredentials:true,params:data}))).data;
  return resp;

}

async function cerrarAbrirTemporada (){
  const resp = (await (axios.post(url+'/cerrarAbrirTemporada',null,{withCredentials:true}))).data;
  return resp;
}

async function obtenerActividad (data){
  const resp = (await axios.post (url+'/registroActividad',data,{withCredentials:true})).data;
  return resp;

}

export{listarRank, cerrarAbrirTemporada,obtenerActividad}
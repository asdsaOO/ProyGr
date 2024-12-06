import axios from "axios";
const url="http://localhost:3000/api/resultados";
const url2="http://localhost:3000/api/modelo/entrenarModelo";

async function listarRank(data){

  const resp = (await (axios.get(url+'/listarRank',{withCredentials:true,params:data}))).data;
  return resp;

}

async function cerrarAbrirTemporada (){
  const resp = (await (axios.post(url+'/cerrarAbrirTemporada',null,{withCredentials:true}))).data;
  return resp;
}
async function obtenerDatosRango(data){
  const resp =(await (axios.get(url+'/obtenerDatosRango',{withCredentials:true, params:data}))).data;
  return resp;

}

async function obtenerActividad (data){
  const resp = (await axios.post (url+'/registroActividad',data,{withCredentials:true})).data;
  return resp;

}
async function listarDatosLeccion(data){
  const resp = (await axios.get (url+'/listarDatosLeccion',{withCredentials:true,params:data})).data;
  //console.log(resp);
  
  return resp;
}
async function obtenerDatosRendimiento(data){
  const resp = await axios.get(url+'/obtenerDatosRendimiento',{withCredentials:true,params:data});
  return resp.data;

}
async function obtenerClasificacionPersonal(data){
  const resp = await axios.get (url+'/obtenerClasificacionPersonal',{withCredentials:true,params:data});
  return resp.data

}
async function entrenarModelo(){
  const resp = await axios.post(url2,null,{withCredentials: true});
  return resp.data;
}

export{listarRank, 
       cerrarAbrirTemporada,
       obtenerActividad,
       listarDatosLeccion,
       obtenerDatosRendimiento,
       obtenerClasificacionPersonal,
       entrenarModelo,
       obtenerDatosRango
      }
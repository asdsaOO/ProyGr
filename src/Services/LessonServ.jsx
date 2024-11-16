import axios from "axios";
const url="http://localhost:3000/api/lessons";

async function obtenerLeccion(id){
  const data = {id:id}
  const resp = await axios.get(url+'/obtenerLeccion',{withCredentials:true,params:data});
  return resp.data;

}

async function guardarActividadesRealizadas(data){
  console.log(data);
  
  const resp = await axios.post(url+'/guardarLeccion',data,{withCredentials:true});
  return resp.data;
}

async function listarLeccionesRealizadas(data){
  const resp = await axios.get(url+'/listarLeccionesRealizadas',{withCredentials:true,params:data});
  return resp.data;
}

export {obtenerLeccion,guardarActividadesRealizadas,listarLeccionesRealizadas}
import axios from "axios";
const url="http://localhost:3000/api/lessons";

async function obtenerLeccion(id){
  const data = {id:id}
  const resp = await axios.get(url+'/obtenerLeccion',{withCredentials:true},data);
  return resp.data;

}

export {obtenerLeccion}
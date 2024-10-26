
import axios from "axios";
const url = "http://localhost:3000/api/topics";

async function agregarTemas(data){
  console.log("servicio");
  console.log(data);
  const datosEnviar = {
    tema:data.temaInp,
    descripcion:data.descripcionInp,
    indice:data.numeracionInp,
    tipo:data.tipo,
    idTema:data.idTema
  }
  console.log(datosEnviar);
  const response = (await axios.post(url+"/agregar",datosEnviar)).data;
  console.log(response);
  return response;
}

async function listarTemas (){
  const response = (await axios.get(url+"/listar")).data;
  console.log(response);
  return response
}
async function eliminarTema(data){
  console.log("servicio eliminar tema");
  console.log(data);
  const response = (await axios.delete(url+"/eliminar",{data:data})).data;
  return response;
}

async function modificarTema(data){
  try{
  console.log("servicio modificar tema");
  console.log(data);
  const response = (await axios.put(url+"/modificar",data)).data;
  console.log("respuesta servicio");
  console.log(response);
  return response
  }catch(e){
    console.log("ERRORSERVICE: "+e);
    return [{oMessage:"ERROR EN SERVICIOS: COMUNIQUESE CON EL SOPORTE", oBoolean:false}]
  }
}
export{agregarTemas,listarTemas,eliminarTema,modificarTema}

import axios from "axios";
const url = "http://localhost:3000/api/topics";

async function agregarTemas(data){
  console.log("servicio");
  console.log(data);
  const datosEnviar = {
    tema:data.temaInp,
    descripcion:data.descripcionInp,
    indice:data.numeracionInp,
    tipo:data.tipo
  }
  /*const datosEnviar={
    tema: "Nuevo Tema",
    descripcion: "Descripción del nuevo tema",
    indice: 1,
    tipo: "tema"
  }*/
  console.log(datosEnviar);
  const response = (await axios.post(url+"/agregar",datosEnviar)).data;
  console.log(response);
  return response;
  
  

}
export{agregarTemas}
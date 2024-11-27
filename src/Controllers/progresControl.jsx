import * as service from '../Services/ProgresoServ';
import * as throwSwal from "../helpers/throwSwalA"
import * as loginControll from "../Controllers/loginControl";
async function listarRank(idRango){
  try{
    const dataSend= {
      idrango:idRango
    }
    const resp= await service.listarRank(dataSend);
    console.log(dataSend);
    
    return resp;
  

  }catch(e){
    console.log(e);
    
  }

}

async function cerrarAbrirTemporada(){
  try{
    const resp = await service.cerrarAbrirTemporada();
    throwSwal.callSwal(resp,()=>{},'Se cerro la temporada y se actualizaron los rangos exitosamente');
  }catch(e){
    console.log(e);
    
  }
}

async function obtenerActividad (vidUsuario){
  const dataSend = {
    idUsuario:vidUsuario
  }
  const resp = await service.obtenerActividad(dataSend);
  console.log(dataSend);
  
  return resp;

}

async function obtenerDatosRendimiento (){
  const idUsuario = loginControll.obtenerId();
  const dataSend = {
    id_usuario:idUsuario
  }
  const resp = await service.obtenerDatosRendimiento(dataSend);
  console.log(resp);
  
  return resp;


}

async function obtenerClasificacionPersonal(){
  const idUsuario = loginControll.obtenerId();
  const dataSend = {
    idUsuario:idUsuario
  }
  const resp= await service.obtenerClasificacionPersonal(dataSend);
  return resp;
}
export{listarRank, 
       cerrarAbrirTemporada,
       obtenerActividad,
       obtenerDatosRendimiento,
       obtenerClasificacionPersonal
      }
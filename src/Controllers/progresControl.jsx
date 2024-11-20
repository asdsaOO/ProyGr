import * as service from '../Services/ProgresoServ';
import * as throwSwal from "../helpers/throwSwalA"
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
export{listarRank, cerrarAbrirTemporada,obtenerActividad}
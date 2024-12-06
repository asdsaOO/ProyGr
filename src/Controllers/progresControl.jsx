import * as service from '../Services/ProgresoServ';
import * as throwSwal from "../helpers/throwSwalA"
import * as loginControll from "../Controllers/loginControl";

async function rankDataPag (){
  const idUsuario = loginControll.obtenerId();
  const dataSend = {
    idUsuario:idUsuario
  }
  const datosRango = await service.obtenerDatosRango(dataSend);
  const datosPagina = {
    datosRango:datosRango[0]
  }
  console.log(datosRango);
  
  return datosPagina

}
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
  console.log(dataSend);
  
  const resp = await service.obtenerActividad(dataSend);
  console.log(dataSend);
  
  return resp;

}
async function obtenerActividadUsuario (){
  const idUsuario = loginControll.obtenerId(); 
  const dataSend = {
    idUsuario:idUsuario
  }
  console.log(dataSend);
  
  const resp = await service.obtenerActividad(dataSend);
  console.log(dataSend);
  
  return resp;

}

async function obtenerDatosRendimiento (e){

  const idUsuario = loginControll.obtenerId();
  const dataSend = {
    id_usuario:idUsuario,
  }
  if(e){
    e.preventDefault();
    const dataForm = new FormData(e.target);
    const filtroData = Object.fromEntries(dataForm);
    if(filtroData.inpFechaIni==='' ||filtroData.inpFechaFin===''){
      throwSwal.callSwal([{omessage:'Ingresa las 2 fechas',oboolean:false}],()=>{},'');
    }else{
      dataSend.fechaIni = filtroData.inpFechaIni;
      dataSend.fechaFin = filtroData.inpFechaFin;
    }
  }

  console.log(dataSend);
  const resp = await service.obtenerDatosRendimiento(dataSend);
  console.log(resp);
  
  return resp;
}
async function obtenerDatosRendimientoADM(data){
  const dataSend = {
    id_usuario:data.idUsuario,
  }
  if(data.e){
    data.e.preventDefault();
    const dataForm = new FormData(data.e.target);
    const filtroData = Object.fromEntries(dataForm);
    if(filtroData.inpFechaIni==='' ||filtroData.inpFechaFin===''){
      throwSwal.callSwal([{omessage:'Ingresa las 2 fechas',oboolean:false}],()=>{},'');
    }else{
      dataSend.fechaIni = filtroData.inpFechaIni;
      dataSend.fechaFin = filtroData.inpFechaFin;
    }
  }

  console.log(dataSend);
  const resp = await service.obtenerDatosRendimiento(dataSend);
  console.log(resp);
  
  return resp;


}
async function obtenerDatosRendimientoFiltro(e){
  e.preventDefault();
  const dataForm = new FormData(e.target);
  const data = Object.fromEntries(dataForm);
  console.log(data);

}

async function obtenerClasificacionPersonal(){
  const idUsuario = loginControll.obtenerId();
  const dataSend = {
    idUsuario:idUsuario
  }
  const resp= await service.obtenerClasificacionPersonal(dataSend);
  return resp;
}
async function entrenarModelo(){
  const resp = await service.entrenarModelo();
  throwSwal.callSwal(resp,()=>{},'Se actualizo el modelo exitosamente');
}
export{listarRank, 
       cerrarAbrirTemporada,
       obtenerActividad,
       obtenerDatosRendimiento,
       obtenerClasificacionPersonal,
       obtenerDatosRendimientoFiltro,
       entrenarModelo,
       rankDataPag,
       obtenerDatosRendimientoADM,
       obtenerActividadUsuario
      }
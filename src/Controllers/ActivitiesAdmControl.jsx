import React from "react";
import * as throwSwal from "../helpers/throwSwalA"
import * as services from "../Services/ActivitiesAdmServ"
async function datosPagina(){
  const titulos = await services.listarTemas();
  const actividades= await services.listarActividades();

  const titulosSelect = [];
  titulos.forEach((data)=>{
    var objeto = {
      value:data.id,
      text:data.titulo
    }
    titulosSelect.push(objeto)
  })
  const data ={
    "titulosSelect":titulosSelect,
    "actividades":actividades
  }
  return data;
}

async function listarSubtema(id_tema){
  try{
    id_tema=id_tema?id_tema:0;
    const dataSend = {
      id_tema:id_tema
    }
    const subtemas = await services.listarSubtemas(dataSend);
    const subtemasSelect=[];
    subtemas.forEach((item)=>{
      var objeto ={
        value:item.id,
        text:item.titulo
      }
      subtemasSelect.push(objeto);
    })

    return subtemasSelect

  }catch(e){
    console.log(e); 
  }

}
async function crearEleccionMultiple(e){
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  console.log(data);

  throwSwal.callSwal("datos recibidos",[{oboolean:1,omessage:"asdf"}],()=>{})
}
 async function crearCompletarFrase(e){
  e.preventDefault();
  const formData = new FormData(e.target);
  const data = Object.fromEntries(formData);
  console.log(data);
}

async  function crearHangManAct(e){
  e.preventDefault();
  console.log("crear ahorcado");
  
}

async function crearActividad (e){
  e.preventDefault();
  const formData = new FormData (e.target);
  const data = Object.fromEntries(formData);
  const dataSend ={
    idTipo:data.inpTipo,
    idTema:data.inpTema,
    idSubtema:data.inpSubtema,
    enunciado:data.inpEnunciado,
    descripcion:data.inpDescripcion,
    respuesta:data.inpRespuesta,
    opciones:data.inpOpcion1?[data.inpOpcion1,data.inpOpcion2,data.inpOpcion3]:null
  }
  console.log(dataSend);
  const resp = await (services.crearActividad(dataSend));

  throwSwal.callSwal(resp,()=>{},'Se Creo la actividad correctamente');

  //const resp = services.crearActividad(data);

}

async function listarActividades(){
  try{
    const resp = await services.listarActividades();
    return resp;
  }catch(e){
    console.log(e);
  }
}

export{crearEleccionMultiple,
       datosPagina,
       listarSubtema,
       crearCompletarFrase,
       crearHangManAct,
       crearActividad
       
      }
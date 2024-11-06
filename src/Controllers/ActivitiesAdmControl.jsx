import React from "react";
import * as throwSwal from "../helpers/throwSwalA"
import * as services from "../Services/ActivitiesAdmServ"
async function datosPagina(){
  const titulos = await services.listarTemas();
  const titulosSelect = [];
  titulos.forEach((data)=>{
    var objeto = {
      value:data.id,
      text:data.titulo
    }
    titulosSelect.push(objeto)
  })
  const data ={
    "titulosSelect":titulosSelect
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

export{crearEleccionMultiple,
       datosPagina,
       listarSubtema,
       crearCompletarFrase,
       crearHangManAct}
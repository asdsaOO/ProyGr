import * as services from '../Services/TopicsAdmServ'

async function datosPagina (){
  //datos del form
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
async function agregarTema(e){
  e.preventDefault();
  const formdata= new FormData(e.target);
  const dataObj=Object.fromEntries(formdata);
  //console.log(dataObj.temaInp);
  const response=await services.agregarTemas(dataObj);

  return response;
}
async function listarTemas(){
  const response = await services.listarTemas();
  return response;
}

async function eliminarTema(id,tipo){
  const enviar = {
    idTema:id,
    tipo:tipo
  }
  const response = await services.eliminarTema(enviar);
  return response;
}

async function actualizarTema(e){
  e.preventDefault();
  const formData = new FormData(e.target);
  const data=Object.fromEntries(formData);
  const dataSend={
    "id":data.inpId,
    "descripcion":data.inpDescripcion,
    "titulo":data.inpTitulo,
    "tipo":data.inpTipo
  }
  console.log("controlador datos recibidos");
  console.log(dataSend);

  const response = await services.modificarTema(dataSend);
  return response;

}
export {agregarTema,eliminarTema,listarTemas,datosPagina,actualizarTema}
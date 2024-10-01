import * as services from '../Services/TopicsAdmServ'

async function agregarTema(e){
  e.preventDefault();
  const formdata= new FormData(e.target);
  const dataObj=Object.fromEntries(formdata);
  //console.log(dataObj.temaInp);
  const response=await services.agregarTemas(dataObj);

  return response;
  
  

}

function eliminarTema(e){

}

export {agregarTema,eliminarTema}
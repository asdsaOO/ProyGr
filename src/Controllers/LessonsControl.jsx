import * as accountController from './loginControl';
import * as service from '../Services/LessonServ'

async function obtenerLeccion() {
  const idUs = await accountController.obtenerId();
  const resp = await service.obtenerLeccion(idUs);
  console.log(resp);
  
  return {
    idUsuario: idUs,
    actividades: resp
  }

}

async function guardarActividadesRealizadas(data) {
  try {
    const resp = await service.guardarActividadesRealizadas(data)
    console.log(resp);

  } catch (e) {
    console.log(e);

  }
}

async function listarLeccionesRealizadas() {

  try {
    const idUsuario = accountController.obtenerId();
    
    const dataSend = {
      idUsuario: idUsuario
    }
    
    
    const resp = await service.listarLeccionesRealizadas(dataSend);
    console.log(resp);
    return resp;
  } catch (e) {
    console.log(e);
  }
}


export { obtenerLeccion, guardarActividadesRealizadas,listarLeccionesRealizadas }
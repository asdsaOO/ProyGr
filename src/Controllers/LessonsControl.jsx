import * as accountController from './loginControl';
import * as service from '../Services/LessonServ'

async function obtenerLeccion(){
  const idUs = await accountController.obtenerId();
  const resp = await service.obtenerLeccion(idUs);
  return {
    idUsuario:idUs,
    actividades:resp
  }

}


export {obtenerLeccion}
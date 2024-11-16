import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { HangManGame } from '../../Components/games/HangManGame';
import { MultipleOptionsGame } from '../../Components/games/MultipleIptionsGame';
import { ButtonFormComp } from '../../Components/ButtonFormComp';
import { useNavigate } from 'react-router-dom';
import {useFutureReloadable} from '../../Components/Hooks/useFutureReloadable'
import * as control from '../../Controllers/LessonsControl'
import { LeccionesTableComp } from '../../Components/tables/LeccionesTableComp';

function LessonsPage (){
  const [cargandoLecciones,leccionesData,recargarLecciones]=useFutureReloadable(control.listarLeccionesRealizadas);

  const navigate = useNavigate();
  const generarLeccion = async()=>{
    const leccionv = await control.obtenerLeccion();
    console.log(leccionv);
    
    navigate('/studentHome/GameLesson',{state:leccionv})
  }
  return(
    <>
    <div className='row mb-4 mt-4'>
      <ButtonFormComp
        texto="iniciar leccion rapida"
        onClick={generarLeccion}
      />
    </div>
    <div className='row mb-4 mt-4'>
      {
        !cargandoLecciones?<LeccionesTableComp
                            data={leccionesData}
                          />:
        <a>cargando...</a>

      }


    </div>
    </>
  )
}

export{LessonsPage}
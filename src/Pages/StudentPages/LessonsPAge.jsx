import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { HangManGame } from '../../Components/games/HangManGame';
import { MultipleOptionsGame } from '../../Components/games/MultipleIptionsGame';
import { ButtonFormComp } from '../../Components/ButtonFormComp';
import { useNavigate } from 'react-router-dom';
import { useFutureReloadable } from '../../Components/Hooks/useFutureReloadable'
import * as control from '../../Controllers/LessonsControl'
import { LeccionesTableComp } from '../../Components/tables/LeccionesTableComp';
import { LessonsHistorialModal } from '../../Components/modales/LessonsHistorialModal';
import * as resultServ from '../../Services/ProgresoServ';
import { useModalCaller } from '../../Components/Hooks/useModalCaller';
import { CargandoModal } from '../../Components/modales/CargandoModal';
import { useFutureFetchData } from '../../Components/Hooks/useFutureFetchData';

function LessonsPage() {
  const [cargandoLecciones, leccionesData, recargarLecciones] = useFutureReloadable(control.listarLeccionesRealizadas);
  const [dataDetalle,activoDetalleLeccionModal,activarDetalleLeccionModal,desactivarDetalleLeccionModal]= useModalCaller();
  //cargas
  const [cargaConsumo,respuestaConsumo,ejecConsumo] = useFutureFetchData(); 

  const navigate = useNavigate();
  const generarLeccion = async () => {
    const leccionv = await ejecConsumo(control.obtenerLeccion,null);
    
    navigate('/studentHome/GameLesson', { state: leccionv })
  }
  return (
    <>
      <div className='row mb-1 mt-4 '>
        <ButtonFormComp
          texto="iniciar leccion rapida"
          onClick={generarLeccion}
        />
      </div>
      <div className='row mb-4 mt-4 border rounded border-dark p-2'>
        <h2>
          <span className="badge text-bg-secondary">Historial de Lecciones</span>
        </h2>
        {
          !cargandoLecciones ? <LeccionesTableComp
            data={leccionesData}
            activarModal={activarDetalleLeccionModal}
          /> :
            <a>cargando...</a>
        }
      </div>
      {
        activoDetalleLeccionModal?<LessonsHistorialModal
                                    cerrarModal={desactivarDetalleLeccionModal}
                                    idLeccion={dataDetalle}
                                  />:null
      }
      {
        cargaConsumo?<CargandoModal/>:null
      }

      
    </>
  )
}

export { LessonsPage }
import Carousel from 'react-bootstrap/Carousel';
import { CarouselImageComp } from '../../Components/CarouselImageComp';
import { ButtonFormComp } from '../../Components/ButtonFormComp';
import { useFutureReloadable } from '../../Components/Hooks/useFutureReloadable';
import * as controll from '../../Controllers/progresControl'
import PerformanceChartComp from '../../Components/charts/PerformanceChartComp';
import { RankTableStudent } from '../../Components/tables/RankTableStudent';

function ProgressPage() {
  const [cargaDatosRendimiento, rendimientoData, obtenerDatosRendimiento] = useFutureReloadable(controll.obtenerDatosRendimiento);
  const [cargaDatosRank,rankDatos,actualizarDatosRank]=useFutureReloadable(controll.obtenerClasificacionPersonal);

  return (
    <>
      <div className='row mt-4'>
        <div className='row mb-2 d-flex justify-content-center mb-2 gap-3'>
          <div className='col-auto'>
            <label htmlFor="inpFechaIni" className="inpFechaIni">Selecciona una fecha de inicio</label>
            <input type="date" className="form-control" id="inpFechaIni" name="inpFechaIni" />
          </div>
          <div className='col-auto'>
            <label htmlFor="inpFechaFin" className="inpFechaIni">Selecciona una fecha final</label>
            <input type="date" className="form-control" id="inpFechaFin" name="inpFechaFin" />
          </div>

        </div>
        <div className='row mb-4 d-flex justify-content-center mb-2 gap-3'>
          <div className='col-auto '>
            <ButtonFormComp
              texto="filtrar"
            />
          </div>
        </div>
        <div className='row mb-4'>
          {
            !cargaDatosRendimiento?<PerformanceChartComp data={rendimientoData}/>:<a>cargando...</a>
          }
        </div>
        <div className='row mb-4'>
          {
            !cargaDatosRank?<RankTableStudent
                            data={rankDatos}
                          />:<a>Cargando...</a>
          }
          


        </div>

      </div>
    </>
  )
}

export { ProgressPage }

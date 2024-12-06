import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { CarouselImageComp } from '../Components/CarouselImageComp';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { RankTableComp } from '../Components/tables/rankTableComp';
import { useFutureReloadable } from '../Components/Hooks/useFutureReloadable';
import * as control from '../Controllers/progresControl';
import * as loginControll from '../Controllers/loginControl';
import '../Style/Carrousel.css'
import { ButtonFormComp } from '../Components/ButtonFormComp';
import ActivityLineChartComp from '../Components/charts/ActivityLineChartComp';
import { CargandoModal } from '../Components/modales/CargandoModal';
import { useFutureFetchData } from '../Components/Hooks/useFutureFetchData';
import PerformanceChartComp from '../Components/charts/PerformanceChartComp';

function ProgressAdmPag() {
  const [rankCarga, rankData, recargarRank] = useFutureReloadable(control.listarRank, 1);
  const [actividadCarga, actividadData, recargaractividad] = useFutureReloadable(control.obtenerActividad, -1);
  const [rendimientoCarga,rendimientoData,recargarRendimiento]=useFutureReloadable(control.obtenerDatosRendimientoADM,{e:null,idUsuario:-1});
  const [grafica, setGrafica] = useState('actividad');
  /*

  */
  const [cargaConsumo, respuestaConsumo, ejecConsumo] = useFutureFetchData();

  const handleSelect = (selectedIndex, e) => {
    recargarRank(selectedIndex + 1);
  };
  return (
    <div className="row mb-4 mt-4">
      <div className="row mb-2">
        <div className="row">
          <div className="col-12 d-flex justify-content-center">
            <div className="btn-group" role="group" aria-label="Opciones">
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => setGrafica('actividad')}
              >
                Actividad semanal
              </button>
              <button
                type="button"
                className="btn btn-danger"
                onClick={() => setGrafica('rendimiento')}
              >
                Rendimiento
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='row mb-4'>
        {
          grafica==='actividad'?
          <ActivityLineChartComp
            data={actividadData}
          />:grafica==='rendimiento'?
          <div className="row">
              <form onSubmit={async(e)=>{ await recargarRendimiento({e:e,idUsuario:-1})}}>
                <div className="row mb-3 d-flex justify-content-center gap-2">
                  <div className="col-12 col-sm-5">
                    <label htmlFor="inpFechaIni" className="form-label">
                      Selecciona una fecha de inicio
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="inpFechaIni"
                      name="inpFechaIni"
                    />
                  </div>
                  <div className="col-12 col-sm-5">
                    <label htmlFor="inpFechaFin" className="form-label">
                      Selecciona una fecha final
                    </label>
                    <input
                      type="date"
                      className="form-control"
                      id="inpFechaFin"
                      name="inpFechaFin"
                    />
                  </div>
                </div>
                <div className="row mb-3 d-flex justify-content-center">
                  <div className="col-auto">
                    <ButtonFormComp texto="Filtrar" type="submit" />
                  </div>
                </div>
              </form>
              <div className="row mb-3">
                <div className="col-12 scroll-container">
                  {!rendimientoCarga ? (
                    <PerformanceChartComp data={rendimientoData} />
                  ) : (
                    <p>Cargando...</p>
                  )}
                </div>
              </div>
            </div>:
          
          <a>No se reconoce el chart</a>
        }
        

      </div>
      <div className="row">
        <Carousel
          interval={null} // Desactiva el cambio automático
          prevIcon={<BsChevronLeft size={30} color="black" />}
          nextIcon={<BsChevronRight size={30} color="black" />}
          onSelect={handleSelect}
          indicators={true} // Asegura que los indicadores sean visibles
        >
          <Carousel.Item id={1}>
            <CarouselImageComp text="Explorador Neuronal" src='/images/explorador.png' />
            <div style={{
              width: '200px', height: '100px', margin: '10px auto', color: 'black',
              textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis'
            }}>
              <h3 style={{ fontSize: '1.2em' }}>Explorador Neuronal</h3>
            </div>
          </Carousel.Item>
          <Carousel.Item id={2}>
            <CarouselImageComp text="Conquistador Sináptico" src='/images/conquistador.png' />
            <div style={{
              width: '200px', height: '100px', margin: '10px auto', color: 'black',
              textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis'
            }}>
              <h3 style={{ fontSize: '1.2em' }}>Conquistador Sináptico</h3>
            </div>
          </Carousel.Item>
          <Carousel.Item id={3}>
            <CarouselImageComp text="Maestro Neuroanatómico" src='/images/maestroNeuroanatomico.png' />
            <div style={{
              width: '200px', height: '100px', margin: '10px auto', color: 'black',
              textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis'
            }}>
              <h3 style={{ fontSize: '1.2em' }}>Maestro Neuroanatómico</h3>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
      <div className='row d-flex justify-content-center align-items-center' >
        <div className='col-auto'>
          <ButtonFormComp
            texto='Cerrar/Abrir temporada'
            onClick={(control.cerrarAbrirTemporada)}
          />
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
          <ButtonFormComp
            texto='Entrenar modelo'
            onClick={() => ejecConsumo(control.entrenarModelo, null)}
          />
        </div>

      </div>
      <div className="row mb-4">
        <div className="col-auto">
          {
            rankCarga ? <a>cargando...</a> :
              <RankTableComp
                data={rankData}
                setactividad={recargaractividad}
                setRendimiento={recargarRendimiento}
              />
          }
        </div>
      </div>
      {
        cargaConsumo ? <CargandoModal /> : null
      }

    </div>
  );
}

export { ProgressAdmPag };

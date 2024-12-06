import Carousel from 'react-bootstrap/Carousel';
import { CarouselImageComp } from '../../Components/CarouselImageComp';
import { ButtonFormComp } from '../../Components/ButtonFormComp';
import { useFutureReloadable } from '../../Components/Hooks/useFutureReloadable';
import * as controll from '../../Controllers/progresControl';
import * as loginControll from '../../Controllers/loginControl';
import PerformanceChartComp from '../../Components/charts/PerformanceChartComp';
import { RankTableStudent } from '../../Components/tables/RankTableStudent';
import ActivityLineChartComp from '../../Components/charts/ActivityLineChartComp';
import { useState } from 'react';

function ProgressPage() {
  const [cargaDatosRendimiento, rendimientoData, obtenerDatosRendimiento] = useFutureReloadable(controll.obtenerDatosRendimiento);
  const [cargaDatosRank, rankDatos, actualizarDatosRank] = useFutureReloadable(controll.obtenerClasificacionPersonal);
  const [cargarActividad, actividadData, actualizarActividad] = useFutureReloadable(controll.obtenerActividadUsuario);
  const [grafica, setGrafica] = useState('rendimiento');

  return (
    <>
      <div className="container-fluid mt-4">
        {/* Seguimiento */}
        <div className="row border rounded border-dark p-3 mb-3">
          <h2>
            <span className="badge text-bg-secondary">Seguimiento</span>
          </h2>
          <div className="row mb-2 mt-3">
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

          {grafica === 'rendimiento' && (
            <div className="row">
              <form onSubmit={obtenerDatosRendimiento}>
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
                  {!cargaDatosRendimiento ? (
                    <PerformanceChartComp data={rendimientoData} />
                  ) : (
                    <p>Cargando...</p>
                  )}
                </div>
              </div>
            </div>
          )}

          {grafica === 'actividad' && (
            <div className="row">
              <div className="col-12 scroll-container">
                {!cargarActividad ? (
                  <ActivityLineChartComp data={actividadData} />
                ) : (
                  <p>Cargando...</p>
                )}
              </div>
            </div>
          )}
        </div>

        {/* Tabla de posiciones */}
        
      </div>

      {/* Estilos personalizados */}
      <style jsx>{`
        .scroll-container {
          max-height: 300px; /* Tamaño compacto */
          overflow-y: auto;
          padding-right: 10px;
          border: 1px solid #ddd;
          border-radius: 4px;
        }

        @media (max-width: 576px) {
          .scroll-container {
            max-height: 200px; /* Más compacto en móviles */
          }
          .row {
            margin: 0; /* Reduce márgenes */
          }
          h2 {
            font-size: 1.2rem; /* Tamaño de encabezado más pequeño */
          }
        }
      `}</style>
    </>
  );
}

export { ProgressPage };

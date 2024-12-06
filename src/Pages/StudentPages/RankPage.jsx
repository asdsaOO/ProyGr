import { useFutureReloadable } from '../../Components/Hooks/useFutureReloadable';
import * as controll from '../../Controllers/progresControl';
import { RankTableStudent } from '../../Components/tables/RankTableStudent';
import { ImageComponent } from '../../Components/ImageComponent';

function RankPag() {
  const [cargaDatosRank, rankDatos] = useFutureReloadable(controll.obtenerClasificacionPersonal);
  const [cargaDatosPag, pagData] = useFutureReloadable(controll.rankDataPag);

  return (
    <div className="container-fluid mt-4">
      {/* Tabla de posiciones */}
      <div className="row border rounded border-dark p-3">
        <h2>
          <span className="badge text-bg-secondary">Tabla de posiciones</span>
        </h2>

        {/* Imagen y descripción */}
        <div className="row mt-3 mb-3 text-center">
          {cargaDatosPag || cargaDatosRank ? (
            <p>Cargando...</p>
          ) : (
            <>
              <div>
                {rankDatos?.[0]?.idrango === 1 ? (
                  <ImageComponent src="/images/eplorador.png" height="80px" width="80px" />
                ) : rankDatos?.[0]?.idrango === 2 ? (
                  <ImageComponent src="/images/conquistador.png" height="80px" width="80px" />
                ) : rankDatos?.[0]?.idrango === 3 ? (
                  <ImageComponent src="/images/maestroNeuroanatomico.png" />
                ) : null}
              </div>
              <p>{pagData?.datosRango?.descripcion || 'Descripción no disponible'}</p>
            </>
          )}
        </div>

        {/* Tabla de estudiantes */}
        <div className="row">
          <div className="col-12 scroll-container">
            {!cargaDatosRank ? (
              <RankTableStudent data={rankDatos} />
            ) : (
              <p>Cargando...</p>
            )}
          </div>
        </div>
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
    </div>
  );
}

export { RankPag };


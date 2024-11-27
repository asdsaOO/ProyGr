import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { CarouselImageComp } from '../Components/CarouselImageComp';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';
import { RankTableComp } from '../Components/tables/rankTableComp';
import { useFutureReloadable } from '../Components/Hooks/useFutureReloadable';
import * as control from '../Controllers/progresControl';
import '../Style/Carrousel.css'
import {ButtonFormComp} from '../Components/ButtonFormComp';
import ActivityLineChartComp from '../Components/charts/ActivityLineChartComp';

function ProgressAdmPag() {
  const [rankCarga, rankData, recargarRank] = useFutureReloadable(control.listarRank, 1);
  const [actividadCarga, actividadData, recargaractividad] = useFutureReloadable(control.obtenerActividad, -1);

  const handleSelect = (selectedIndex, e) => {
    recargarRank(selectedIndex+1);
  };

  return (
    <div className="row mb-4 mt-4">
      <div className='row mb-4'>
        <ActivityLineChartComp
          data={actividadData}
        />

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
            <CarouselImageComp text="Maestro Neuroanatómico" src='/images/maestro.png' />
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
          texto = 'Cerrar/Abrir temporada'
          onClick={(control.cerrarAbrirTemporada)}
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
              />
          }
        </div>
      </div>
    </div>
  );
}

export { ProgressAdmPag };

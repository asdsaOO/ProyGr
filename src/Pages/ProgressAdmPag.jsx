import React, { useState } from 'react';
import Carousel from 'react-bootstrap/Carousel';
import { CarouselImageComp } from '../Components/CarouselImageComp';
import { BsChevronLeft, BsChevronRight } from 'react-icons/bs';

function ProgressAdmPag() { // Estado para el índice actual

  // Función que maneja el cambio de item en el carrusel
  const handleSelect = (selectedIndex, e) => {
    
    console.log(selectedIndex+1); // Log para mostrar el cambio
  };

  return (
    <div className='row mt-4 mb-4'>
      <div className='col-12'>
        <Carousel
          interval={null} // Desactiva el cambio automático
          prevIcon={<BsChevronLeft size={30} color="black" />}
          nextIcon={<BsChevronRight size={30} color="black" />}
          onSelect={handleSelect} // Agrega el manejador de evento onSelect
        >
          <Carousel.Item id={1}>
            <CarouselImageComp text="Explorador Neuronal" src='/images/explorador.png'/>
            <div style={{
              width: '200px', height: '100px', margin: '10px auto', color: 'black',
              textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis'
            }}>
              <h3 style={{ fontSize: '1.2em' }}>Explorador Neuronal</h3>
            </div>
          </Carousel.Item>
          <Carousel.Item id={2}>
            <CarouselImageComp text="Conquistador Sináptico" src='/images/conquistador.png'/>
            <div style={{
              width: '200px', height: '100px', margin: '10px auto', color: 'black',
              textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis'
            }}>
              <h3 style={{ fontSize: '1.2em' }}>Conquistador Sináptico</h3>
            </div>
          </Carousel.Item>
          <Carousel.Item id={3}>
            <CarouselImageComp text="Maestro Neuroanatómico" src='/images/maestro.png'/>
            <div style={{
              width: '200px', height: '100px', margin: '10px auto', color: 'black',
              textAlign: 'center', overflow: 'hidden', textOverflow: 'ellipsis'
            }}>
              <h3 style={{ fontSize: '1.2em' }}>Maestro Neuroanatómico</h3>
            </div>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export { ProgressAdmPag };

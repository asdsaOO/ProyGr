import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { InputComp } from '../../Components/InputFormComp';
import { CarouselImageComp } from '../../Components/CarouselImageComp';
import * as control from '../../Controllers/loginControl';
import { useFutureReloadable } from '../../Components/Hooks/useFutureReloadable';
import SimpleCheckComp from '../../Components/SimpleCheckComp';
import { useState } from 'react';
import { ButtonFormComp } from '../../Components/ButtonFormComp';
import * as throwSwal from '../../helpers/throwSwalA';

function ProfilePage() {
  const [cargaDatosUsuario, datosUsuario, recargarDatosUsuario] = useFutureReloadable(control.obtenerDatosUsuario);
  const [modificar, setModificar] = useState(false);

  return (
    <div className='row mt-4'>
      {
        cargaDatosUsuario ? <a>cargando...</a> :
          <div className='row'>
            <div className='row'>
              <SimpleCheckComp
                text="Modificar datos"
                checked={modificar}
                onChange={() => setModificar(!modificar)} // Cambia el estado de modificar
              />
            </div>
            <form onSubmit={async(e)=>{
              throwSwal.callInputPassSwal(control.modificarDatosUsuario,e);
              }}>
            {/* Div que encapsula todos los inputs para aplicar el efecto de habilitar/deshabilitar */}
            <div className='row' style={!modificar ? { pointerEvents: 'none', opacity: 1 } : null}>
              <div className='col-4'>
                <CarouselImageComp
                  src='/images/nklogo.jpg'
                />
              </div>
              <div className='col-8'>
                <div className='row'>
                  <InputComp
                    text='Nombre:'
                    name='inpNombre'
                    defaultValue={datosUsuario[0].nombre}
                  />
                </div>
                <div className='row'>
                  <InputComp
                    text='Apellido:'
                    name='inpApellido'
                    defaultValue={datosUsuario[0].apellido}
                  />
                </div>
                <div className='row'>
                  <InputComp
                    text='E-MAIL:'
                    name='inpEmail'
                    defaultValue={datosUsuario[0].email}
                    readOnly={true}
                  />
                </div>
                <div className='row'>
                  <InputComp
                    text='Password:'
                    name='inpPassword'
                    type='password'
                    placeholder='Ingresa nuevo password si desea cambiar'
                  />
                </div>
                <div className='row mb-4'>
                  <InputComp
                    text='Celular:'
                    name='inpCelular'
                    defaultValue={datosUsuario[0].celular}
                  />
                </div>
                <div className='row'>
                  <ButtonFormComp
                    texto='Modificar datos'
                    hidden={!modificar}
                    type='submit'
                  />
                </div>
              </div>
            </div>
            </form>
          </div>
      }
    </div>
  );
}

export { ProfilePage };

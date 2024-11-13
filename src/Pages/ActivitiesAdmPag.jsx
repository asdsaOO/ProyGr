import React from "react";
import { TopicsAcordeonComp } from "../Components/TopicsAcordeonComp";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { CheckformComp } from "../Components/checkFormComp";
import { useExclusiveToggle } from "../Components/Hooks/useExclusiveToggle";
import { CompleteFormActComponent } from "../Components/CompleteFormActComp";
import { ChooseFormActComponent } from "../Components/ChooseFormActCompoment";
import * as control from "../Controllers/ActivitiesAdmControl"
import { ButtonFormComp } from "../Components/ButtonFormComp";
import { useFutureReloadable } from "../Components/Hooks/useFutureReloadable";
import { HangManFormActComponent } from "../Components/HangManFormActComponent";
import { ActivitiesTableComponent } from "../Components/tables/ActivitiesTableComponent";
import { UpdateActivitiesModal } from "../Components/modales/UpdateActivitiesModal";
import { useModalCaller } from "../Components/Hooks/useModalCaller";

function ActivitiesAdmPag() {
  const [itemscheck, activarcheck] = useExclusiveToggle();
  const [cargaPagina, datosPagina, recargarDatosPagina] = useFutureReloadable(control.datosPagina);
  const [dataUpModal,statusUpModal,activeUpModal0,closeUpModal]=useModalCaller(false);
  
  return (
   
    <div className="mb-4 col-12">
      <form onSubmit={(e)=>{
        control.crearActividad(e).then(()=>{
          recargarDatosPagina();

        });
        
      }}>
        <div className="row mb-4 mt-4  offset-1">
          <div className="col-3">
            <CheckformComp
              checked={itemscheck[0]}
              active={activarcheck}
              index={0}
              name="inpTipo"
              value={1}
              text="Eleccion-multiple"
            />
          </div>
          <div className="col-3">
            <CheckformComp
              checked={itemscheck[1]}
              active={activarcheck}
              index={1}
              name="inpTipo"
              value={2}
              text="Completar Frase"
            />
          </div>
          <div className="col-3">
            <CheckformComp
              checked={itemscheck[2]}
              active={activarcheck}
              index={2}
              name="inpTipo"
              value={3}
              text="El ahorcado"
            />
          </div>

        </div>
        {cargaPagina ?
          <a>Cargando...</a>
          : <div className="row border shadow rounded">
            <div className="row mb-3 mt-4 d-flex flex-column justify-content-center align-items-center">
              
              {
                itemscheck[0] ?<ChooseFormActComponent
                                titulos={datosPagina.titulosSelect}
                              /> :
                itemscheck[1] ?<CompleteFormActComponent
                                titulos={datosPagina.titulosSelect}
                              />:
                itemscheck[2] ?<HangManFormActComponent
                                titulos={datosPagina.titulosSelect}
                              />:
                null
              }
            </div>
            <div className="row mb-4 offset-1">
              <div className="col-auto">
                <ButtonFormComp
                  texto="Crear Actividad"
                  type="submit"
                />
              </div>
            </div>
          </div>
        }

      </form>
      <div className="mt-4">
      <div className="row border rounded">
        <div className="col-12">
        <ActivitiesTableComponent
          data={datosPagina.actividades}
          openUpModal={activeUpModal0}
          deleteItem={async(num)=>{
            await control.eliminarActividad(num);
            recargarDatosPagina();

          }}
        />
        </div>

      </div>
      </div>
      {
        statusUpModal?<UpdateActivitiesModal
                       closeModal={closeUpModal}
                       data={dataUpModal}
                       titulos={datosPagina.titulosSelect}
                       onSubmit={async(e)=>{
                         await control.actualizarActividad(e);
                         await recargarDatosPagina();

                       }}
                      />:null
      }
    </div>
  )
}

export { ActivitiesAdmPag }
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

function ActivitiesAdmPag() {
  const [itemscheck, activarcheck] = useExclusiveToggle();
  const [cargaPagina, datosPagina, recargarDatosPagina] = useFutureReloadable(control.datosPagina);

  return (
    <div className="mb-4 col-12">
      <form onSubmit={
        itemscheck[0] ? control.crearEleccionMultiple :
        itemscheck[1] ? control.crearCompletarFrase :
        itemscheck[2] ? control.crearHangManAct :
        null
      }>
        <div className="row mb-4 mt-4">
          <div className="col-3">
            <CheckformComp
              checked={itemscheck[0]}
              active={activarcheck}
              index={0}
              name="tipo"
              value={1}
              text="Eleccion-multiple"
            />
          </div>
          <div className="col-3">
            <CheckformComp
              checked={itemscheck[1]}
              active={activarcheck}
              index={1}
              name="tipo"
              value={2}
              text="Completar Frase"
            />
          </div>
          <div className="col-3">
            <CheckformComp
              checked={itemscheck[2]}
              active={activarcheck}
              index={2}
              name="tipo"
              value={3}
              text="El ahorcado"
            />
          </div>

        </div>
        {cargaPagina ?
          <a>Cargando...</a>
          : <div>
            <div className="row mb-4">
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
            <div className="row mb-4">
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

    </div>
  )
}

export { ActivitiesAdmPag }
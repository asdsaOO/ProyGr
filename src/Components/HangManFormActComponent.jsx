import React, { useState } from "react";
import { SelectFormComp } from "./SelectFormComp";
import { InputComp } from "./InputFormComp";
import { TextAreaForm } from "./TextAreaForm";
import { useFutureReloadable } from "./Hooks/useFutureReloadable";
import * as control from "../Controllers/ActivitiesAdmControl"
import { HangManInputsComp } from "./HangManInputsComp";

function HangManFormActComponent(props) {
  const [cargandoSubtemas, subtemas, recargarSubtemas] = useFutureReloadable(control.listarSubtema);
  const [palagraClave,setPalabraClave]=useState('');

  return (

    <div className="row mb-4">
      <div className="row mb-4">
        <div className="col-6">
          <InputComp
            text="Descripcion"
            placeholder="Ingrese el nombre de su actividad"
            name="inpDescripcion"
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-5">
          <SelectFormComp
            text="Seleccionar Titulo:"
            name="inpTema"
            options={props.titulos}
            onchange={(e) => recargarSubtemas(e.target.value)
            }
          />
        </div>
        <div className="col-5">
          {
            !cargandoSubtemas ?
              <SelectFormComp
                text="Subtitulo:"
                name="inpSubtema"
                options={subtemas}
              />
              :
              <a> cargando </a>
          }
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-5">
          <InputComp
            text="Pista"
            placeholder="Ingrese la pista"
            name="inpEnunciado"
          />
        </div>
        <div className="col-5">
          <InputComp
            text="Palabra clave"
            name="inpRespuesta"
            placeholder="ingresa la palabra clave"
            onChange={(e)=>setPalabraClave(e.target.value
            )}
          />
        </div>
      </div>
      <div className="row mb-3">
        <div class="container d-flex justify-content-center">
            <HangManInputsComp 
              word={palagraClave}
            />
        </div>

      </div>
    </div>
  )

}

export { HangManFormActComponent }
import React, { useState } from "react";
import { SelectFormComp } from "./SelectFormComp";
import { InputComp } from "./InputFormComp";
import { TextAreaForm } from "./TextAreaForm";
import { useFutureReloadable } from "./Hooks/useFutureReloadable";
import * as control from "../Controllers/ActivitiesAdmControl"
import { HangManInputsComp } from "./HangManInputsComp";

function HangManFormActComponent(props) {
  const [cargandoSubtemas, subtemas, recargarSubtemas] = useFutureReloadable(control.listarSubtema);
  const [palagraClave,setPalabraClave]=useState(props.data?props.data.respuesta:'');

  return (

    <div className="row mb-4">
      <div className="row mb-4">
        <div className="col-6">
          <InputComp
            text="Descripcion"
            placeholder="Ingrese el nombre de su actividad"
            name="inpDescripcion"
            defaultValue={props.data?props.data.descripcion:''}
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-6">
          <SelectFormComp
            text="Seleccionar Titulo:"
            name="inpTema"
            options={props.titulos}
            onchange={(e) => recargarSubtemas(e.target.value)
            }
          />
        </div>
        <div className="col-6">
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
        <div className="col-6">
          <InputComp
            text="Pista"
            placeholder="Ingrese la pista"
            name="inpEnunciado"
            defaultValue={props.data.enunciado}
          />
        </div>
        <div className="col-6">
          <InputComp
            text="Palabra clave"
            name="inpRespuesta"
            defaultValue={props.data.respuesta}
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
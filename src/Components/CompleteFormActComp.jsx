import React from "react";
import { SelectFormComp } from "./SelectFormComp";
import { InputComp } from "./InputFormComp";
import { TextAreaForm } from "./TextAreaForm";

function CompleteFormActComponent() {
  return (
    <div className="row mb-4">
      <div className="col-6">
        <InputComp
          text="Descripcion"
          placeholder="Ingrese el nombre de su actividad"
        />
        <InputComp
          text="Palabra Clave"
          placeholder="Ingrese la palabra complementaria"
        />
      </div>
      <div className="row mb-4">
        <div className="col-10">
          <TextAreaForm
            text="frase"
            placeholder="Ingrese la frase que de la actividad, recuerda poner _ donde deseas la palabra clave"
          />
        </div>
      </div>

      <div className="row mb-4">
        <div className="col-10">
          <TextAreaForm
            text="Frase generada"
          />

        </div>
      </div>

    </div>
  )
}

export{CompleteFormActComponent}
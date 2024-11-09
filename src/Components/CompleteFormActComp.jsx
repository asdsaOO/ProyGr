import React, { useState } from "react";
import { SelectFormComp } from "./SelectFormComp";
import { InputComp } from "./InputFormComp";
import { TextAreaForm } from "./TextAreaForm";
import { useFutureReloadable } from "./Hooks/useFutureReloadable";
import * as control from "../Controllers/ActivitiesAdmControl"

function CompleteFormActComponent(props) {
  const [textoGenerado, setTextoGenerado] = useState('');
  const [fraseOriginal, setFraseOriginal] = useState(''); // Estado para la frase original con los guiones bajos
  const [palabraClave, setPalabraClave] = useState('');
  ////////////////////////////////////////////////////////////////////////////////////////////////////////////////
  const [cargandoSubtemas, subtemas, recargarSubtemas] = useFutureReloadable(control.listarSubtema);

  const manejarFrase = (e) => {
    const frase = e.target.value;
    setFraseOriginal(frase); // Guarda la frase original con guiones bajos
    setTextoGenerado(frase.replace(/_/g, palabraClave)); // Genera la frase con la palabra clave actual
  };

  const manejarPalabraClave = (e) => {
    const nuevaPalabraClave = e.target.value.trim();
    setPalabraClave(nuevaPalabraClave);
    // Usa la frase original para generar el texto actualizado
    setTextoGenerado(fraseOriginal.replace(/_/g, nuevaPalabraClave));
  };

  return (
    <div className="row mb-4">
      <div className="row mb-4">
        <div className="col-6">
          <InputComp
            text="Descripcion"
            placeholder="Ingrese el nombre de su actividad"
            name="inpDescripcion"
            defaultValue={props.data.descripcion}
          />
        </div>
        <div className="col-4">
          <InputComp
            text="Palabra clave"
            placeholder="Ingrese la palabra clave"
            defaultValue={props.data?props.data.respuesta:''}
            onChange={manejarPalabraClave}
            name="inpRespuesta"
            
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-6">
          <SelectFormComp
            text="Seleccionar Titulo:"
            name="inpTema"
            defaultData={props.data?{value:props.data.idtema,text:props.data.tema}:undefined}
            options={props.titulos}
              onchange={(e)=>recargarSubtemas(e.target.value)
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
        <div className="col-10 offset-1">
          <TextAreaForm
            text="Frase"
            placeholder="Ingrese la frase que de la actividad, recuerda poner _ donde deseas la palabra clave"
            defaultValue = {props.data?props.data.enunciado:''}
            onChange={manejarFrase}
            name="inpEnunciado"
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-10 offset-1">
          <TextAreaForm
            text="Frase generada"
            disabled={true}
            value={textoGenerado.trim()}
            defaultValue={props.data?props.data.enunciado.replace(/_/g,props.data.respuesta):''}
          />
        </div>
      </div>
    </div>
  );
}

export { CompleteFormActComponent };

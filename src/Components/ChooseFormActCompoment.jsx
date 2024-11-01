import React, { useState } from "react";
import { SelectFormComp } from "./SelectFormComp";
import { InputComp } from "./InputFormComp";
import { TextAreaForm } from "./TextAreaForm";

function CompleteFormActComponent() {
  const [textoGenerado, setTextoGenerado] = useState('');
  const [palabraClave, setPalabraClave] = useState('');

  
  const manejarFrase = (e) => {
    const frase = e.target.value;
    // Reemplaza "_" con la palabra clave actual
    setTextoGenerado(frase.replace(/_/g, palabraClave));
  };

  const manejarPalabraClave = (e) => {
    const nuevaPalabraClave = e.target.value.trim();
    // Crea una expresión regular con la palabra clave actual
    const regex = new RegExp(palabraClave, 'g');

    // Actualiza el estado de la palabra clave
    setPalabraClave(nuevaPalabraClave);
    
    // Reemplaza la palabra clave actual en el texto generado con la nueva palabra clave
    setTextoGenerado((prevTextoGenerado) => prevTextoGenerado.replace(regex, nuevaPalabraClave));
  };

  return (
    <div className="row mb-4">
      <div className="row mb-4">
        <div className="col-6">
          <InputComp
            text="Descripcion"
            placeholder="Ingrese el nombre de su actividad"
          />
        </div>
        <div className="col-4">
          <InputComp
            text="Palabra clave"
            placeholder="Ingrese la palabra clave"
            onChange={manejarPalabraClave}
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-5">
          <SelectFormComp
            text="Seleccionar Titulo:"
            name="inpTitulo"
            options={[]}
          />
        </div>
        <div className="col-5">
          <SelectFormComp
            text="Seleccionar Subtitulo:"
            name="inpSubtitulo"
            options={[]}
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-10">
          <TextAreaForm
            text="Frase"
            placeholder="Ingrese la frase que de la actividad, recuerda poner _ donde deseas la palabra clave"
            onChange={manejarFrase}
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-10">
          <TextAreaForm
            text="Frase generada"
            disabled={true}
            value={textoGenerado.trim()}
          />
        </div>
      </div>
    </div>
  );
}

export { CompleteFormActComponent };

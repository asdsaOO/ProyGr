import React from "react";
import { TextAreaForm } from "../Components/TextAreaForm";
import { InputComp } from "../Components/InputFormComp";
import { SelectFormComp } from "../Components/SelectFormComp";

function TopicsAdmPag() {
  return (
    <div className="row mb-4 col-10">
      <div className="row mb-4">
        <div className=" col-xl-4 col-sm-12 col-4">
          <InputComp 
            text='Titulo del tema'
            placeholder='Ingresa el titulo'
            name='tituloInp'
            id='tituloInp'
          />
        </div>
        <div className="col-xl-3">
          <SelectFormComp
            options={
              [
                {value:1,text:"Tema Principal"},
                {value:2,text:"Tema Secundario"}
              ]
            }
            text="Tipo"
          />
        </div>
        <div className="col-xl-3">
          <SelectFormComp
            text="temas principales"
          />
        </div>
      </div>
      <div className="row mb-4">
        <TextAreaForm />

      </div>
    </div>
  )
}
export { TopicsAdmPag }
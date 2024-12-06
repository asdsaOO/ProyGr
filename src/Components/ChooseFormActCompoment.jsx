import React, { useState } from "react";
import { SelectFormComp } from "./SelectFormComp";
import { InputComp } from "./InputFormComp";
import { TextAreaForm } from "./TextAreaForm";
import { CheckformComp } from "./checkFormComp";
import { useExclusiveToggle } from "./Hooks/useExclusiveToggle";
import { useMultipleOptions } from "./Hooks/useMultipleOpcions";
import { ButtonFormComp } from "./ButtonFormComp";
import { callSwal } from "../helpers/throwSwalA";
import { useFutureReloadable } from "./Hooks/useFutureReloadable";
import * as control from "../Controllers/ActivitiesAdmControl";
function ChooseFormActComponent(props) {
  const [items, changeItems] = useExclusiveToggle();
  const [itemsValues, changeValues] = useMultipleOptions(props.data?props.data.opciones:[``, ``, ``]);
  const [cargandoSubtemas,subtemas,recargarSubtemas]=useFutureReloadable(control.listarSubtema);
  
  return (
    <div className="row mb-4 ">
        <div className="row mb-1 ">

          <div className="col-6">
            <InputComp
              text="Descripcion"
              placeholder="Ingresa descripcion"
              name="inpDescripcion"
              defaultValue={props.data?props.data.descripcion:''}
            />
          </div>

        </div>
        <div className="row mb-1">
          <div className="col-6">
            <SelectFormComp
              text="Titulo:"
              name="inpTema"
              defaultData={props.data?{value:props.data.idtema,text:props.data.tema}:undefined}
              options={props.titulos}
              onchange={(e)=>recargarSubtemas(e.target.value)
              }
              
            />
          </div>
          <div className="col-6">
            {
              !cargandoSubtemas?
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
        <div className="row mb-1">
          <div className="col-6">
            <InputComp
              text="Pregunta"
              placeholder="Ingresa la pregunta"
              name="inpEnunciado"
              defaultValue={props.data?props.data.enunciado:''}
            />
          </div>
        </div>
        <div className="row mb-1">
          <div className="row mb-1 ">
            <div className="col-auto pt-4 ">
              <CheckformComp
                index={0}
                active={changeItems}
                checked={items[0]}
                value={itemsValues[0]}
                name="inpRespuesta"
              />
            </div>
            <div className="col-auto ">
              <InputComp
                placeholder="Ingresa opcion 1"
                defaultValue ={props.data?itemsValues[0]:''}
                onChange={(e) => {
                  const value = e.target.value;
                  changeValues(0, value)
                }}
                name="inpOpcion1"
              />
            </div>
          </div>
          <div className="row mb-1">
            <div className="col-auto pt-4">
              <CheckformComp
                index={1}
                active={changeItems}
                checked={items[1]}
                value={itemsValues[1]}
                name="inpRespuesta"
              />
            </div>
            <div className="col-auto">
              <InputComp
                placeholder="Ingresa opcion 1"
                defaultValue ={props.data?itemsValues[1]:''}
                onChange={(e) => {
                  const value = e.target.value;
                  changeValues(1, value)
                }}
                name="inpOpcion2"
              />
            </div>
          </div>
          <div className="row mb-1">
            <div className="col-auto pt-4">
              <CheckformComp
                index={2}
                active={changeItems}
                checked={items[2]}
                value={itemsValues[2]}
                name="inpRespuesta"
              />
            </div>
            <div className="col-auto">
              <InputComp
                placeholder="Ingresa opcion 1"
                defaultValue ={props.data?itemsValues[2]:''}
                onChange={(e) => {
                  const value = e.target.value;
                  changeValues(2, value)
                }}
                name="inpOpcion3"
              />
            </div>
          </div>
        </div>
        
    </div>
  );
}

export { ChooseFormActComponent }

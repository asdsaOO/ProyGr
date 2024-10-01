import React from "react";
import { TextAreaForm } from "../Components/TextAreaForm";
import { InputComp } from "../Components/InputFormComp";
import { SelectFormComp } from "../Components/SelectFormComp";
import { TopicsAcordeonComp } from "../Components/TopicsAcordeonComp";
import { ButtonFormComp } from "../Components/ButtonFormComp";
import * as controller from "../Controllers/TopicsAdmControl"
import Swal from "sweetalert2";
import { useState } from "react";

function TopicsAdmPag() {
  const [tipoTema,setTipoTema]=useState("tema");
  
  const agregarTema = async (e)=>{
    const response= await controller.agregarTema(e);
    if(response[0].oboolean==true){
      Swal.fire({
        title: 'Error!',
        text: 'Se registro correctamente',
        icon: 'success',
        confirmButtonText: 'Cool'
      })


    }else{
      Swal.fire({
        title: 'Error!',
        text: 'Algo salio mal',
        icon: 'error',
        confirmButtonText: 'Cool'
      })
    }
    
  }
  return (
    <div className="mb-4 col-10">
      <div className="row">
        <form onSubmit={agregarTema} >
          <div className="row mb-4">
            <div className=" col-xl-4 col-sm-12 col-4">
              <InputComp
                text='Titulo del tema'
                placeholder='Ingresa el titulo'
                name='temaInp'
                id='temaInp'
              />
            </div>
            <div className="col-xl-3">
              <SelectFormComp
                onchange={(e)=>{setTipoTema(e.target.value) }}
                name="tipo"
                options={
                  [
                    { value: "tema", text: "Tema Principal" },
                    { value: "subtema", text: "Tema Secundario" }
                  ]
                }
                text="Tipo"
              />
            </div>
            <div className="col-xl-2">
              <InputComp
                type="number"
                text="numeracion"
                placeholder="Nro"
                name="numeracionInp"
                id="numeracionInp"
              />
            </div>
            <div className="col-xl-3">
              <SelectFormComp
                hide={tipoTema=="tema"?true:false}
                text="temas principales"
              />
            </div>
            
          </div>
          <div className="row mb-4">
            <TextAreaForm 
              text="Descripcion"
              name="descripcionInp"
              id="descripcionInp"
            />

          </div>
          <div className="row mb-4">
            <div className=" col-xl-4">
            <ButtonFormComp
              type="submit"
              texto="Crear nuevo Tema"
            />
            </div>
          </div>
        </form>
      </div>
      <div className="row mt-10">
        <TopicsAcordeonComp
          temas={[
            {
              "titulo": "tema1",
              "descripcion": "a",
              "numeracion": 1,
              "subtemas": [{
                "titulo": "subtema1",
                "descripcion": "a",
                "numeracion": 1,
              },
              {
                "titulo": "subtema1",
                "descripcion": "a",
                "numeracion": 2,
              }


              ]


            },
            {
              "titulo": "tema2",
              "descripcion": "b",
              "numeracion": 2
            }
          ]}
        />

      </div>
    </div>
  )
}
export { TopicsAdmPag }
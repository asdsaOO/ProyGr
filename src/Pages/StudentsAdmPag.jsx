import React from "react";
import { StudentsTable } from "../Components/StudentsTable";
import * as control from "../Controllers/studentsAdmControl"
import { useFuture } from "../Components/Hooks/useFuture";
import { useFutureReloadable } from "../Components/Hooks/useFutureReloadable";
import Swal from "sweetalert2";
import { ButtonFormComp } from "../Components/ButtonFormComp";
import { TextAreaForm } from "../Components/TextAreaForm";
import { InputComp } from "../Components/InputFormComp";
function StudentsAdmPag(){
  const [cargaPagina,datosPagina,recargarDatosPagina]=useFutureReloadable(control.datosPagina);
  const registroRapido= async(e)=>{
    e.preventDefault();
    const resp = await control.registroRapido(e);
    if(resp[0].oboolean){
      Swal.fire({
        title:'Se registro el estudiante',
        text: 'se envio el password generado a su correo electronico',
        icon:'success',
        confirmButtonText: 'aceptar'

      })
      recargarDatosPagina();

    }else{
      Swal.fire({
        title:'Error',
        text: 'Error: '+resp[0].omessage,
        icon:'error',
        confirmButtonText:'aceptar'
      })

    }
  }
  const habilitar_deshabiltiar= async(data)=>{
    console.log(data);
    const response = await control.habilitarEstudiante(data);
    if(response[0].oboolean){
      Swal.fire({
        title:'Cambio realizado',
        text: 'se cambio el estado de habilitado del estudiante',
        icon:'success',
        confirmButtonText: 'aceptar'

      })
      recargarDatosPagina();

      return response;
    }else{
      Swal.fire({
        title:'Error',
        text: 'Error: '+response[0].omessage,
        icon:'error',
        confirmButtonText:'aceptar'
      })
    }
  }
  return (
    <div className="mb-4 col-10">
      <form onSubmit={registroRapido}>
      <div className="row mb-3">
        <div className="col-5">
          <InputComp
            text="Nombre"
            name="inpNombre"
            placeholder="ingresa nombre del usuario"
          />
        </div>
        <div className="col-5">
          <InputComp
            text="Apellido"
            name="inpApellido"
            placeholder="Ingresa apellido"
          />
        </div>
      </div>
      <div className="row mb-4">
        <div className="col-7">
          <InputComp
            text="Correo Electronico"
            name="inpEmail"
            placeholder="Ingrese el correo"
          />

        </div>
        <div className="col-3">
          <InputComp
            text="Celular"
            name="inpCelular"
            placeholder="Ingrese celular"
          />
        </div>
      </div>
      <div className="row mb-4">
        <ButtonFormComp
          texto="Registrar Estudiante"
          type="submit"
        />
      </div>
      </form>
      <div className="row border" style={{ overflowX: 'auto' }}>
        {
          cargaPagina?(<a>cargando</a>)
          :<StudentsTable
            datos={datosPagina.estudiantes}
            modificarEstado={habilitar_deshabiltiar}
          />
        }
        

      </div>

    </div>
  
  )
}
export {StudentsAdmPag}
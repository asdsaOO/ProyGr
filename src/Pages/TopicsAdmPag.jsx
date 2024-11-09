import React from "react";
import { TextAreaForm } from "../Components/TextAreaForm";
import { InputComp } from "../Components/InputFormComp";
import { SelectFormComp } from "../Components/SelectFormComp";
import { TopicsAcordeonComp } from "../Components/TopicsAcordeonComp";
import { ButtonFormComp } from "../Components/ButtonFormComp";
import * as controller from "../Controllers/TopicsAdmControl"
import Swal from "sweetalert2";
import { useState } from "react";
import { useFuture } from "../Components/Hooks/useFuture";
import { UpdateTopicModal } from "../Components/modales/UpdateTopicModal";
import { useModalCaller } from "../Components/Hooks/useModalCaller";


function TopicsAdmPag() {
  //hoooooks
  const [cargaPagina, dataPag] = useFuture(controller.datosPagina);
  const [carga, temas_datos] = useFuture(controller.listarTemas);
  const [tipoTema, setTipoTema] = useState("tema");
  const [dataUpModal,statusUpModal,activeUpModal0,closeUpModal]=useModalCaller(false);
  ///////////////////////////////////////////////////////////////////////
  const eliminarTema= async (id,tipo)=>{
    const response = await controller.eliminarTema(id,tipo)
    if(response[0].oboolean==true){
      Swal.fire({
        title: 'Eliminado exitosamente',
        text: 'Se elimino el tema',
        icon: 'success',
        confirmButtonText: 'aceptar'
      }).then((result)=>result.isConfirmed?window.location.reload():bull)
    }else{
      Swal.fire({
        title:'Error',
        text:'no se pudo eliminar',
        icon:'error',
        confirmButtonText:'aceptar'
      })
    }
  }
  const agregarTema = async (e) => {
    const response = await controller.agregarTema(e);
    if (response[0].oboolean == true) {
      Swal.fire({
        title: 'Realizado con exito',
        text: 'Se registro correctamente',
        icon: 'success',
        confirmButtonText: 'aceptar'
      }).then((result)=>result.isConfirmed?window.location.reload():null)
    } else {
      Swal.fire({
        title: 'Error!',
        text: 'Algo salio mal',
        icon: 'error',
        confirmButtonText: 'ok'
      })
    }
  }
  const modificarTema=async(e)=>{
    const response = await controller.actualizarTema(e);
    if(response[0].oboolean==false){
      Swal.fire({
        title: 'Error!',
        text: response[0].oMessage?response[0].oMessage:'error inesperado',
        icon: 'error',
        confirmButtonText:'ok'

      })

    }else{
      Swal.fire({
        title: 'Realizado con exito',
        text: 'Se actualizo correctamente',
        icon: 'success',
        confirmButtonText: 'aceptar'
      }).then((result)=>{
        if(result.isConfirmed){
          window.location.reload();

        }
      
      })

    }

  }
  return (
    <div className="mb-4 col-10">
      {cargaPagina ? (<a>cargando</a>) : (
        <>        <div className="row">
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
                  onchange={(e) => { setTipoTema(e.target.value) }}
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
                  name="idTema"
                  options={dataPag.titulosSelect}
                  hide={tipoTema == "tema" ? true : false}
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
            {carga ? <a>cargando</a> : <TopicsAcordeonComp 
                                        temas={temas_datos} 
                                        eliminarTema={eliminarTema} 
                                        openUpModal={activeUpModal0}/>
            }
          </div>     
         </>
      )}
      {statusUpModal?<UpdateTopicModal
        closeModal={closeUpModal}
        data={dataUpModal}
        confirmUpdate={modificarTema}
      />:null}
      
      
    </div>
  )
}
export { TopicsAdmPag }
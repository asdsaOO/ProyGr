import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import LessonsHistorialTable from "../tables/LessonsHistorialTable";
import * as resService from "../../Services/ProgresoServ";
import { useFutureReloadable } from "../Hooks/useFutureReloadable";

function LessonsHistorialModal({idLeccion,cerrarModal}) {
  const [cargandoData,data,recargar]=useFutureReloadable(resService.listarDatosLeccion,{"idLeccion":idLeccion})
  return (
    <>
      <div
        className="modal fade show"
        id="lessonsHModal"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="false"
        style={{ display: "block" }}
      >
        <div className="modal-dialog modal-dialog-scrollable">
          <div className="modal-content">
            <div className="modal-header">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                Detalle de leccion
              </h1>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
                onClick={()=>cerrarModal()}
              ></button>
            </div>
            <div className="modal-body">
              {
                !cargandoData?<LessonsHistorialTable data={data}/>:<a>datos cargando....</a>
              }
              
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" onClick={()=>cerrarModal()}>
                OK
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}


export { LessonsHistorialModal }

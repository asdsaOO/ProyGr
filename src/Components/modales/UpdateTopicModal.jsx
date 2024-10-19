import React from "react";
import { InputComp } from "../InputFormComp";
import { TextAreaForm } from "../TextAreaForm";
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';


function UpdateTopicModal(props) {
return (
    <>
        <div className="modal fade show d-block" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
          <div className="modal-dialog">
            <form>
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">MODIFICAR TITULO</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.closeModal}></button>
              </div>
              <div className="modal-body">
                <div>
                  <InputComp
                   text="Titulo"
                   name="inpTitulo"
                   />

                </div>
                <div>
                  <TextAreaForm
                   text="Descripcion"
                   name="inpDescripcion"
                  />
                </div>
              </div>
              <div className="modal-footer">
                <button type="submit" className="btn btn-secondary" data-bs-dismiss="modal">MODIFICAR</button>
              </div>
            </div>
            </form>
          </div>
        </div>
    </>
  )
}
export{UpdateTopicModal}
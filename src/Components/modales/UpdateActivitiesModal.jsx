
import React from "react";
import { InputComp } from "../InputFormComp";
import { TextAreaForm } from "../TextAreaForm";
import 'bootstrap-icons/font/bootstrap-icons.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { CompleteFormActComponent } from "../CompleteFormActComp";
import { HangManFormActComponent } from "../HangManFormActComponent";
import { ChooseFormActComponent } from "../ChooseFormActCompoment";
function UpdateActivitiesModal(props) {
  return (
    <>
      <div className="modal fade show d-block" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog">
          <form onSubmit={(e)=>{
            props.onSubmit(e);
            props.closeModal();

          }} >
            <div className="modal-content">
              <div className="modal-header">
                <h1 className="modal-title fs-5" id="staticBackdropLabel">MODIFICAR TITULO</h1>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={props.closeModal}></button>
              </div>
              <div className="modal-body">
                <input name="inpIdActividad" value={props.data.id} hidden/>
                <input name="inpTipo" value={props.data.idtipo} hidden/>
                {
                  props.data.idtipo == 1 ? <ChooseFormActComponent
                    data={props.data}
                    titulos={props.titulos}
                  /> :
                    props.data.idtipo == 3 ? <HangManFormActComponent
                      data={props.data}
                      titulos={props.titulos}
                    /> :
                      props.data.idtipo == 2 ? <CompleteFormActComponent
                        data={props.data}
                        titulos={props.titulos}
                      /> :
                        <a>El id es desconocido</a>
                }
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
export { UpdateActivitiesModal }
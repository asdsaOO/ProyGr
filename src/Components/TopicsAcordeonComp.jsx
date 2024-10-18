import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { useFuture } from "./Hooks/useFuture";

function TopicsAcordeonComp(props) {  
  return (
    <>
      <div className="accordion" id="accordionPanelsStayOpenExample">
        {
          props.temas ? (
            props.temas.map((item, index) => (
              <div className="accordion-item" key={index}>
                <h2 className="accordion-header">
                  <button className="accordion-button" type="button" data-bs-toggle="collapse" 
                  data-bs-target={`#collapse-${index}`} aria-expanded="true" aria-controls={`collapse-${index}`}>
                    {item.numeracion}. {item.titulo}

                  </button>
                </h2>
                <div id={`collapse-${index}`} className="accordion-collapse collapse ">
                  <div className="accordion-body row">
                    <div className="col-10">
                      <p>{item.descripcion}</p>
                    </div>
                    <div className="col-2 mb-3" >
                      <button className="btn btn-danger">
                        <i className="bi bi-trash-fill"></i>
                      </button>
                      <button className="btn btn-warning">
                        <i className="bi bi-pencil-square"></i>
                      </button>
                    </div>

                    {item.subtitulos&&item.subtitulos.length>0 ? (
                      item.subtitulos.map((subItem, subIndex) => (
                        <div className="accordion" id="nestedAccordionOne">
                          <div className="accordion-item">
                            <h2 className="accordion-header">
                              <button className="accordion-button" type="button" data-bs-toggle="collapse" 
                              data-bs-target={`#collapse-s${subIndex}`} aria-expanded="true" aria-controls={`collapse-s${subIndex}`}>
                                {subItem.numeracion}. {subItem.titulo}
                              </button>
                            </h2>
                            <div id={`collapse-s${subIndex}`} className="accordion-collapse collapse ">
                              <div className="container accordion-body row">
                                <div className="col-10">
                                  <p>{subItem.descripcion}</p>
                                </div>
                                <div className="col-2">
                                  <button className="btn btn-danger" onClick={()=>{props.eliminarTema(subItem.id,"subtema")}}>
                                    <i className="bi bi-trash-fill"></i>
                                  </button>
                                  <button className="btn btn-warning" onClick={()=>props.openUpModal()}>
                                    <i className="bi bi-pencil-square"></i>
                                  </button>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      ))

                    ) : <a>No hay subtemas registrados....</a>}
                    {/* Fin del Segundo Nivel */}
                  </div>
                </div>
              </div>
            )
            ) 
          ) : <a>No hay temas</a>
          
        }
      </div>
    </>

  )
}

export { TopicsAcordeonComp }
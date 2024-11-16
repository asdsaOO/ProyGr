import React from "react";
import 'bootstrap-icons/font/bootstrap-icons.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

function ResultModal({ puntuacion, closeModal }) {
  const nivel = puntuacion > 80 ? "¡Excelente!" : puntuacion > 50 ? "¡Buen trabajo!" : "Sigue practicando";
  const barraColor = puntuacion > 80 ? "success" : puntuacion > 50 ? "warning" : "danger";

  return (
    <>
      <div className="modal fade show d-block" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
        <div className="modal-dialog modal-dialog-centered">
          <div className="modal-content">
            <div className="modal-header bg-primary text-white">
              <h1 className="modal-title fs-5" id="staticBackdropLabel">
                <i className="bi bi-trophy-fill me-2"></i> ¡Lección Completada!
              </h1>
              <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close" onClick={closeModal}></button>
            </div>
            <div className="modal-body text-center">
              <h3>{nivel}</h3>
              <p className="fs-5">Tu puntuación: <strong>{puntuacion}</strong></p>
              
              <div className="progress mb-4" style={{ height: "1.5rem" }}>
                <div
                  className={`progress-bar bg-${barraColor}`}
                  role="progressbar"
                  style={{ width: `${puntuacion}%` }}
                  aria-valuenow={puntuacion}
                  aria-valuemin="0"
                  aria-valuemax="100"
                >
                  {puntuacion}%
                </div>
              </div>
              
              <p className="text-muted">¡Sigue mejorando para alcanzar el próximo nivel!</p>
            </div>
            <div className="modal-footer">
              <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={closeModal}>
                Aceptar
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { ResultModal };

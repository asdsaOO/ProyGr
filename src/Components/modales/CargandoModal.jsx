import React from "react";
import { ImageComponent } from "../ImageComponent";

function CargandoModal() {
  return (
    <>
      <div
        className="modal fade show d-block"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
        style={{ backgroundColor: "rgba(0, 0, 0, 0.5)" }} // Fondo semitransparente
      >
        <div
          className="modal-dialog modal-dialog-centered"
          style={{ backgroundColor: "transparent", border: "none" }} // Contenedor transparente
        >
          <div
            className="modal-content"
            style={{
              backgroundColor: "transparent", // Cuerpo transparente
              boxShadow: "none", // Sin sombras
              border: "none", // Sin bordes
            }}
          >
            <div
              className="modal-body text-center"
              style={{
                color: "#000", // Color del texto
                backdropFilter: "none", // Desactiva desenfoque
              }}
            >
              <ImageComponent src="/images/nklogo.jpg" height="50px" width="50px" />
              <p style={{ color: "#fff", fontSize: "16px", margin: "10px 0" }}>Cargando</p>
              <ImageComponent src="/images/cargando.svg" height="20px" width="100px" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export { CargandoModal };

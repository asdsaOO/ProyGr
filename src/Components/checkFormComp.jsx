import React from "react";

function CheckformComp(props) {
  return (
    <div className="mb-4">
      <div className="form-check d-flex align-items-center">
        <input
          className="form-check-input"
          type="checkbox"
          value={props.value}
          id={props.id}
          name={props.name}
          checked={props.checked}
          onChange={(e) => {
            if (e.target.checked) {
              props.active(props.index);
            }
          }}
          style={{
            width: "1.5rem", // Tamaño del checkbox
            height: "1.5rem", // Tamaño del checkbox
            borderRadius: "0.25rem", // Bordes redondeados
            border: `2px solid ${props.checked ? "#FF5733" : "#ced4da"}`, // Borde rojo cuando está marcado
            backgroundColor: props.checked ? "#FF5733" : "#fff", // Fondo rojo cuando está marcado
            transition: "all 0.3s ease", // Transición suave para los cambios
            appearance: "none", // Eliminar la apariencia predeterminada del checkbox
            position: "relative", // Asegura que el checkbox se posicione correctamente
          }}
        />
        <label
          className="form-check-label fs-6 text-dark ms-2"
          htmlFor={props.id}
          style={{
            fontWeight: "500", // Negrita moderada
            cursor: "pointer", // Cambiar el cursor cuando se pasa por encima
          }}
        >
          {props.text}
        </label>
      </div>
    </div>
  );
}

export { CheckformComp };

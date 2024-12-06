import React, { useState } from "react";

function SimpleCheckComp({ id, name, text, onChange }) {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxChange = () => {
    const newValue = !isChecked;
    setIsChecked(newValue);
    onChange(newValue); // Notifica al componente padre
  };

  return (
    <div className="mb-4">
      <div className="form-check d-flex align-items-center">
        <input
          className="form-check-input"
          type="checkbox"
          id={id}
          name={name}
          checked={isChecked}
          onChange={handleCheckboxChange}
          style={{
            width: "1.5rem", // Tamaño del checkbox
            height: "1.5rem", // Tamaño del checkbox
            borderRadius: "0.25rem", // Bordes redondeados
            border: `2px solid ${isChecked ? "#FF5733" : "#ced4da"}`, // Borde rojo cuando está marcado
            backgroundColor: isChecked ? "#FF5733" : "#fff", // Fondo rojo cuando está marcado
            transition: "all 0.3s ease", // Transición suave para los cambios
            appearance: "none", // Eliminar la apariencia predeterminada del checkbox
            position: "relative", // Asegura que el checkbox se posicione correctamente
            cursor: "pointer", // Cambiar el cursor al pasar por encima
          }}
        />
        <label
          className="form-check-label fs-6 text-dark ms-2"
          htmlFor={id}
          style={{
            fontWeight: "500", // Negrita moderada
            cursor: "pointer", // Cambiar el cursor al pasar por encima
          }}
        >
          {text}
        </label>
      </div>
    </div>
  );
}

export default SimpleCheckComp;

import React, { useState, useEffect } from "react";
import { Button, Form, Alert } from "react-bootstrap";

const CompletarFrase = ({ enunciado, palabraClave, handleResult }) => {
  const [respuesta, setRespuesta] = useState("");
  const [esCorrecto, setEsCorrecto] = useState(null);
  const [mensaje, setMensaje] = useState("");

  // Resetear estado cuando cambie el enunciado o palabraClave
  useEffect(() => {
    setRespuesta(""); // Reiniciar la respuesta
    setEsCorrecto(null); // Resetear estado de corrección
    setMensaje(""); // Limpiar mensaje
  }, [enunciado, palabraClave]); // Dependencias de useEffect: enunciado y palabraClave

  const handleInputChange = (e) => {
    setRespuesta(e.target.value);
    setEsCorrecto(null); // Reseteamos el estado de la corrección cuando el usuario cambia la respuesta
  };

  const handleVerificar = () => {
    if (respuesta.trim().toLowerCase() === palabraClave.toLowerCase()) {
      handleResult(true);
      setEsCorrecto(true);
      setMensaje("¡Correcto! La palabra es correcta.");
    } else {
      setEsCorrecto(false);
      setMensaje("Incorrecto. Intenta de nuevo.");
      handleResult(false);
    }
  };

  // Modificación aquí: En lugar de mostrar la palabra clave, solo mostramos el input
  const enunciadoConInput = enunciado.split("_").map((part, index, array) => {
    if (index < array.length - 1) {
      return (
        <>
          {part}
          <Form.Control
            type="text"
            value={respuesta}
            onChange={handleInputChange}
            placeholder="Escribe la palabra"
            className="mx-2 d-inline w-auto"  // Estilo en línea y ajustable
            size="sm"  // Input más pequeño
          />
        </>
      );
    } else {
      return part;
    }
  });

  const styles = {
    container: {
      padding: '20px',
      fontFamily: 'Arial, sans-serif',
      textAlign: 'center',
      border: '1px solid #ccc', // Borde alrededor de toda la actividad
      borderRadius: '5px',
      boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)', // Sombreado para toda la actividad
      backgroundColor: '#f9f9f9',
      maxWidth: '600px', // Limitar el ancho si lo deseas
      margin: '0 auto', // Centrar la actividad
    },
    title: {
      fontSize: '24px',
      fontWeight: 'bold',
      marginBottom: '15px',
    },
    feedback: {
      marginTop: '15px',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <h3>Actividad: Completar la Frase</h3>
      <div className="mb-3">
        <p>{enunciadoConInput}</p>
      </div>
      <Button variant="primary" onClick={handleVerificar}>
        Verificar Respuesta
      </Button>
      {esCorrecto !== null && (
        <div className="mt-3">
          <Alert variant={esCorrecto ? "success" : "danger"}>{mensaje}</Alert>
        </div>
      )}
    </div>
  );
};

export default CompletarFrase;

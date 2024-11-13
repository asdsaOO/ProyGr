import React, { useState } from 'react';
import { Alert } from 'react-bootstrap'; // Usamos Alert para mostrar mensajes

function MultipleOptionsGame({ question, options, answer,handleResult }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [feedback, setFeedback] = useState('');
  const [alertVariant, setAlertVariant] = useState(''); // Para cambiar el color del alert

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    if (option === answer) {
      setFeedback('¡Correcto!');
      setAlertVariant('success');
      handleResult(true);
      
    } else {
      setFeedback('Incorrecto. Intenta nuevamente.');
      setAlertVariant('danger'); // Color rojo para incorrecto
      handleResult(false);
    }
  };

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
    optionsContainer: {
      display: 'flex',
      flexDirection: 'column', // Cambiado para mostrar las opciones verticalmente
      justifyContent: 'center',
      gap: '10px',
      marginTop: '10px',
    },
    optionButton: {
      padding: '10px 20px',
      cursor: 'pointer',
      border: '1px solid #ccc',
      borderRadius: '5px',
      backgroundColor: '#f0f0f0',
      transition: 'background-color 0.3s',
    },
    selected: {
      backgroundColor: '#ddd',
    },
    feedback: {
      marginTop: '15px',
      fontWeight: 'bold',
    },
  };

  return (
    <div style={styles.container}>
      <div style={styles.title}>Elección múltiple</div> {/* Título de la actividad */}
      <h2>{question}</h2>
      <div style={styles.optionsContainer}>
        {options.map((option, index) => (
          <button
            key={index}
            style={{
              ...styles.optionButton,
              ...(selectedOption === option ? styles.selected : {}),
            }}
            onClick={() => handleOptionClick(option)}
            disabled={selectedOption !== null}
          >
            {option}
          </button>
        ))}
      </div>
      {feedback && (
        <div className="mt-3">
          <Alert variant={alertVariant}>{feedback}</Alert>
        </div>
      )}
    </div>
  );
}

export { MultipleOptionsGame };

import React, { useState, useEffect } from 'react';
import { Alert } from 'react-bootstrap'; // Usamos Alert para mostrar mensajes
import styles from '../../Style/HangManInputs.module.css';

function HangManGame(props) {
  // Estados iniciales
  const [guesses, setGuesses] = useState(Array(props.word.length).fill(''));
  const [remainingAttempts, setRemainingAttempts] = useState(8);
  const [mensaje, setMensaje] = useState('');
  const [showHint, setShowHint] = useState(true); // Estado para siempre mostrar la pista
  const vertorWord = props.word.split('');

  // Resetear el estado cuando el componente se monte
  useEffect(() => {
    setGuesses(Array(props.word.length).fill(''));
    setRemainingAttempts(8);
    setMensaje('');
    setShowHint(true); // Puedes modificar este estado si lo necesitas
  }, [props.word]); // Se ejecuta cada vez que cambia la palabra

  const handleInputChange = (e, index) => {
    const guessedLetter = e.target.value.toLowerCase();
    const newGuesses = [...guesses];

    if (vertorWord[index] === guessedLetter) {
      // Letra correcta en la posición actual: desbloquear todas las ocurrencias
      vertorWord.forEach((letter, i) => {
        if (letter === guessedLetter) {
          newGuesses[i] = guessedLetter;
        }
      });
      setGuesses(newGuesses);
    } else {
      // Letra incorrecta, disminuir intentos
      setRemainingAttempts((prev) => prev - 1);
    }

    // Limpiar el input después de cada intento
    e.target.value = '';
  };

  // Lógica para mostrar el mensaje de éxito o derrota
  useEffect(() => {
    if (remainingAttempts === 0) {
      setMensaje(`Has perdido. La palabra era: ${props.word}`);
      props.handleResult(false); // Llamar con false si pierde
    } else if (guesses.join('') === props.word) {
      setMensaje('¡Felicidades! Has adivinado la palabra.');
      props.handleResult(true); // Llamar con true si adivina
    } else {
      setMensaje('');
    }
  }, [guesses, remainingAttempts, props.word]);

  const stylesContainer = {
    padding: '20px',
    fontFamily: 'Arial, sans-serif',
    textAlign: 'center',
    border: '1px solid #ccc',
    borderRadius: '5px',
    boxShadow: '0px 4px 6px rgba(0, 0, 0, 0.1)',
    backgroundColor: '#f9f9f9',
    maxWidth: '600px',
    margin: '0 auto',
  };

  return (
    <div style={stylesContainer}>
      <h1>Juego del Ahorcado</h1>
      <p>Intentos restantes: {remainingAttempts}</p>

      {/* Mostrar la pista siempre */}
      {showHint && (
        <div className="mb-3">
          <strong>Pista:</strong> {props.hint}
        </div>
      )}

      <div className={styles.wordContainer}>
        <label htmlFor="input-word">Adivina la palabra:</label>
        <div className={styles.inputWrapper}>
          {vertorWord.map((letter, index) => (
            <input
              type="text"
              maxLength="1"
              className={styles.letterInput}
              value={guesses[index]}
              key={index}
              onChange={(e) => handleInputChange(e, index)}
              disabled={remainingAttempts === 0 || guesses[index] !== ''}
            />
          ))}
        </div>
      </div>

      {mensaje && (
        <div className="mt-3">
          <Alert variant={remainingAttempts === 0 ? 'danger' : 'success'}>
            {mensaje}
          </Alert>
        </div>
      )}
    </div>
  );
}

export { HangManGame };

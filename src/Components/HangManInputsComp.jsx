import React, { useState } from 'react';
import styles from '../Style/HangManInputs.module.css';

function HangManInputsComp(props) {
  const vertorWord = props.word.split('');

  return (
    <div className={styles.container}>
      <h1>Juego del Ahorcado</h1>
      <div className={styles.wordContainer}>
        <label htmlFor="input-word">Palabra:</label>
        <div className={styles.inputWrapper}>
          {
            vertorWord.map((letter, index) => (
              <input
                type="text"
                id="input-word"
                maxLength="1"
                className={styles.letterInput} // Aplicar estilo modular
                value={letter}
                key={index}
                onChange={()=>{}}
              />
            ))
          }
        </div>
      </div>
    </div>
  );
}

export { HangManInputsComp };
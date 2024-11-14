import React, { useState, useEffect, useRef, forwardRef, useImperativeHandle } from 'react';

const Cronometro = forwardRef((_, ref) => {
  const [time, setTime] = useState(0);
  const [running, setRunning] = useState(true); // Estado para controlar si está corriendo o no
  const intervalRef = useRef(null);

  // Exponemos las funciones de control y el tiempo actual al componente padre
  useImperativeHandle(ref, () => ({
    obtenerTiempoEnSegundos: () => (time / 1000).toFixed(2), // Retorna el tiempo en segundos con dos decimales
    parar: () => {
      clearInterval(intervalRef.current);
      setRunning(false);
    },
    reiniciar: () => {
      setTime(0);
      if (!running) { // Solo reinicia el intervalo si estaba detenido
        intervalRef.current = setInterval(() => {
          setTime((prevTime) => prevTime + 10);
        }, 10);
        setRunning(true);
      }
    }
  }));

  useEffect(() => {
    // Inicia el cronómetro automáticamente al montarse
    intervalRef.current = setInterval(() => {
      setTime((prevTime) => prevTime + 10);
    }, 10);

    // Limpia el intervalo cuando el componente se desmonta
    return () => clearInterval(intervalRef.current);
  }, []);

  // Formatear el tiempo en minutos, segundos y milisegundos
  const formatTime = () => {
    const milliseconds = `0${(time % 1000) / 10}`.slice(-2);
    const seconds = `0${Math.floor((time / 1000) % 60)}`.slice(-2);
    const minutes = `0${Math.floor((time / 60000) % 60)}`.slice(-2);

    return `${minutes}:${seconds}:${milliseconds}`;
  };

  return <h1>{formatTime()}</h1>;
});

export default Cronometro;

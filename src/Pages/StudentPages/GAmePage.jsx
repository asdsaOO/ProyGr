
import { useLocation, useNavigate } from "react-router-dom";
import CompleteGame from "../../Components/games/CompleteGame";
import { HangManGame } from "../../Components/games/HangManGame";
import { ButtonFormComp } from "../../Components/ButtonFormComp";
import { MultipleOptionsGame } from "../../Components/games/MultipleIptionsGame";
import { useState, useEffect, useRef } from "react";
import { ResultModal } from "../../Components/modales/ResultModal";
import { useModalCaller } from "../../Components/Hooks/useModalCaller";
import CronometroComp from "../../Components/CronometroComp";
import * as control from "../../Controllers/LessonsControl";


function GamePage() {
  const cronometroRef = useRef(null);
  const [siguienteButtonStatus, setSiguienteButtonStatus] = useState(false);
  const navigation = useNavigate();
  const location = useLocation();
  const dataGame = location.state;
  const [numActividad, setNumActividad] = useState(0);
  const [actividad, setActividad] = useState({ ...dataGame.actividades[0] });
  const [puntuacion, setPuntuacion] = useState(0);
  const [data, estadoResultadoModal, activarModalResultado, cerrarResultadoModal] = useModalCaller('');

  const manejarResultado = (resultado) => {
    setPuntuacion((prev) => {
      const nuevaPuntuacion = resultado ? prev + 10 : prev;
      dataGame.puntaje = nuevaPuntuacion; // Asegurando que el puntaje total se actualice
      return nuevaPuntuacion;
    });
  
    // Aquí aseguramos que el resultado se guarde solo para la actividad actual
    const nuevaActividad = {
      ...actividad,
      resultado,
      tiempo: cronometroRef.current.obtenerTiempoEnSegundos(),
    };
  
    dataGame.actividades[numActividad] = nuevaActividad; // Actualizamos la actividad en dataGame
    setActividad(nuevaActividad); // Actualizamos la actividad en el estado
    cronometroRef.current.parar();
    setSiguienteButtonStatus(true);
  };
  const siguienteActividad = () => {
    setNumActividad((prevNum) => {
      const nuevoNum = prevNum + 1;
  
      if (nuevoNum >= dataGame.actividades.length) {
        activarModalResultado(); // Mostramos el modal si no hay más actividades
      } else {
        // Reiniciar el estado del juego antes de avanzar a la siguiente actividad
        setActividad({ ...dataGame.actividades[nuevoNum], resultado: null });
        setSiguienteButtonStatus(false);
      }
  
      return nuevoNum;
    });
  
    cronometroRef.current.reiniciar();
    setSiguienteButtonStatus(false);
  };

  useEffect(() => {
    if (numActividad < dataGame.actividades.length) {
      const actividadActual = { ...dataGame.actividades[numActividad] };
      setActividad(actividadActual); // Asegúrate de que la actividad se actualice con un nuevo objeto
    }
  }, [numActividad, dataGame.actividades]);

  return (
    <div className="container mt-4">
      <div className="row mb-3">
        <div className="col text-center">
          <CronometroComp ref={cronometroRef} />
        </div>
      </div>
      <div className="row mb-3">
        <div className="col text-center">
          <label className="fw-bold fs-5">{'Puntuación: ' + puntuacion}</label>
        </div>
      </div>
      <div className="row mb-4">
        <div className="col">
          {actividad.id_tipo === 1 ? (
            <MultipleOptionsGame
              question={actividad.enunciado}
              options={actividad.opciones}
              answer={actividad.respuesta}
              handleResult={manejarResultado}
            />
          ) : actividad.id_tipo === 2 ? (
            <CompleteGame
              enunciado={actividad.enunciado}
              palabraClave={actividad.respuesta}
              handleResult={manejarResultado}
            />
          ) : actividad.id_tipo === 3 ? (
            <HangManGame
              word={actividad.respuesta}
              hint={actividad.enunciado}
              handleResult={manejarResultado}
            />
          ) : (
            <p className="text-danger">No se reconoce el id del juego</p>
          )}
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          {siguienteButtonStatus && (
            <ButtonFormComp
              texto="Siguiente"
              onClick={siguienteActividad}
              className="btn btn-primary"
            />
          )}
        </div>
      </div>
      {estadoResultadoModal && (
        <ResultModal
          closeModal={() => {
            cerrarResultadoModal();
            control.guardarActividadesRealizadas(dataGame);
            navigation('/studentHome/Lessons');
          }}
          puntuacion={puntuacion}
        />
      )}
    </div>
  );
}

export { GamePage };

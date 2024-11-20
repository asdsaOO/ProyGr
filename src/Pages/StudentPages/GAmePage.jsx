import { useLocation, useNavigate } from "react-router-dom";
import CompleteGame from "../../Components/games/CompleteGame";
import { HangManGame } from "../../Components/games/HangManGame";
import CompletarFrase from "../../Components/games/CompleteGame";
import { ButtonFormComp } from "../../Components/ButtonFormComp";
import { MultipleOptionsGame } from "../../Components/games/MultipleIptionsGame";
import { useState, useEffect, useRef } from "react";
import { ResultModal } from "../../Components/modales/ResultModal";
import { useModalCaller } from "../../Components/Hooks/useModalCaller";
import CronometroComp from "../../Components/CronometroComp";
import * as control from "../../Controllers/LessonsControl"

function GamePage() {
  const cronometroRef = useRef(null);
  const [siguienteButtonStatus, setSiguienteButtonStatus] = useState(false);
  const navigation = useNavigate();
  const location = useLocation();
  const dataGame = location.state;
  const [numActividad, setNumActividad] = useState(0);
  const [actividad, setActividad] = useState({ ...dataGame.actividades[numActividad] });
  const [puntuacion, setPuntuacion] = useState(0);
  const [data, estadoResultadoModal, activarModalResultado, cerrarResultadoModal] = useModalCaller('');

  const manejarResultado = (resultado) => {
    if (resultado) {
      setPuntuacion((prev) => {
        const nuevaPuntuacion = prev + 10;
        dataGame.puntaje = nuevaPuntuacion;  // Asegurándote de actualizar correctamente el puntaje
        return nuevaPuntuacion;
      });
      dataGame.actividades[numActividad].resultado = true;
      dataGame.actividades[numActividad].tiempo = cronometroRef.current.obtenerTiempoEnSegundos();
    } else {
      dataGame.actividades[numActividad].resultado = false;
      dataGame.actividades[numActividad].tiempo = cronometroRef.current.obtenerTiempoEnSegundos();
    }
    cronometroRef.current.parar();
    setSiguienteButtonStatus(true);
    //dataGame.puntaje=puntuacion;
  };

  const siguienteActividad = () => {
    setNumActividad((prevNum) => {
      const newNum = prevNum + 1;
      if (newNum >= dataGame.actividades.length) {
        activarModalResultado();
        console.log(dataGame);
        
      }
      return newNum;
    });
    cronometroRef.current.reiniciar();
    setSiguienteButtonStatus(false);
  };

  useEffect(() => {
    if (numActividad < dataGame.actividades.length) {
      setActividad(dataGame.actividades[numActividad]);
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
          {
            actividad.id_tipo === 1 ? <MultipleOptionsGame
              question={actividad.enunciado}
              options={actividad.opciones}
              answer={actividad.respuesta}
              handleResult={manejarResultado}
            /> :
              actividad.id_tipo === 2 ? <CompletarFrase
                enunciado={actividad.enunciado}
                palabraClave={actividad.respuesta}
                handleResult={manejarResultado}
              /> :
                actividad.id_tipo === 3 ? <HangManGame
                  word={actividad.respuesta}
                  hint={actividad.enunciado}
                  handleResult={manejarResultado}
                /> : <p className="text-danger">No se reconoce el id del juego</p>
          }
        </div>
      </div>
      <div className="row">
        <div className="col text-center">
          {siguienteButtonStatus && 
            <ButtonFormComp
              texto="Siguiente"
              onClick={siguienteActividad}
              className="btn btn-primary"
            />
          }
        </div>
      </div>
      {estadoResultadoModal && 
        <ResultModal
          closeModal={() => { cerrarResultadoModal();control.guardarActividadesRealizadas(dataGame); navigation('/studentHome/Lessons'); }}
          puntuacion={puntuacion}
          guardar ={control}
        />
      }
    </div>
  );
}

export { GamePage };

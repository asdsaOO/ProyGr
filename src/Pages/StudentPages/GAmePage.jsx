import { useLocation, useNavigate } from "react-router-dom";
import CompleteGame from "../../Components/games/CompleteGame";
import { HangManGame } from "../../Components/games/HangManGame";
import CompletarFrase from "../../Components/games/CompleteGame";
import { ButtonFormComp } from "../../Components/ButtonFormComp";
import { MultipleOptionsGame } from "../../Components/games/MultipleIptionsGame";
import { useState } from "react";
import { ResultModal } from "../../Components/modales/ResultModal";
import { useModalCaller } from "../../Components/Hooks/useModalCaller";
import { useEffect,useRef } from "react";
import { Navigate } from "react-router-dom";
import CronometroComp from "../../Components/CronometroComp";


function GamePage() {
  const cronometroRef = useRef(null);


  const navigation= useNavigate();
  const location = useLocation();
  const dataGame = location.state;
  const [numActividad, setNumActividad] = useState(0);
  const [actividad, setActividad] = useState({ ...dataGame.actividades[numActividad] });
  const [puntuacion, setPuntuacion] = useState(0);
  const [data, estadoResultadoModal, activarModalResultado, cerrarResultadoModal] = useModalCaller('');

  const manejarResultado =(resultado)=>{
    if(resultado){
      setPuntuacion(prev=>prev+20);
      dataGame.actividades[numActividad].resultado=true;
      dataGame.actividades[numActividad].tiempo=cronometroRef.current.obtenerTiempoEnSegundos();
    }else{
      dataGame.actividades[numActividad].resultado=false;
      dataGame.actividades[numActividad].tiempo=cronometroRef.current.obtenerTiempoEnSegundos();

    }
    cronometroRef.current.parar();
    
  }

  const siguienteActividad = () => {
    
    setNumActividad((prevNum) => {
      const newNum = prevNum + 1;
      
      if (newNum >= dataGame.actividades.length) {
        console.log(dataGame);
        
        activarModalResultado(); 
      }
      return newNum; 
    });
    console.log(dataGame.actividades);
    cronometroRef.current.reiniciar();
    
  };

  useEffect(() => {
    if (numActividad < dataGame.actividades.length) {
      setActividad(dataGame.actividades[numActividad]);
    }
  }, [numActividad, dataGame.actividades]);

  return (
    <div>
      <div>
      <CronometroComp
        ref={cronometroRef}
      />
      </div>
      <div>
        <label>{'Puntuación: ' + puntuacion}</label>
      </div>
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
            /> : <a>no se reconoce el id del juego</a>
      }
      <ButtonFormComp
        texto="Siguiente"
        onClick={siguienteActividad}
      />
      {
        estadoResultadoModal ? <ResultModal
          closeModal={()=>{cerrarResultadoModal();navigation('/studentHome/Lessons')}}
          puntuacion={puntuacion}
        /> : null
      }
    </div>
  );
}

export { GamePage };

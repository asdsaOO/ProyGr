import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { HangManGame } from '../../Components/games/HangManGame';
import { MultipleOptionsGame } from '../../Components/games/MultipleIptionsGame';
import { ButtonFormComp } from '../../Components/ButtonFormComp';
import { useNavigate } from 'react-router-dom';
import * as control from '../../Controllers/LessonsControl'
function LessonsPage (){
  const navigate = useNavigate();
  const generarLeccion = async()=>{
    const leccionv = await control.obtenerLeccion();
    console.log(leccionv);
    
    navigate('/studentHome/GameLesson',{state:leccionv})
  }
  return(
    <div>
      <ButtonFormComp
        texto="iniciar leccion rapida"
        onClick={generarLeccion}
      />
    </div>
  )
}

export{LessonsPage}
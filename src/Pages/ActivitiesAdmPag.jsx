import React from "react";
import { TopicsAcordeonComp } from "../Components/TopicsAcordeonComp";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { CheckformComp } from "../Components/checkFormComp";
import { useExclusiveToggle } from "../Components/Hooks/useExclusiveToggle";
import { CompleteFormActComponent } from "../Components/CompleteFormActComp";

function ActivitiesAdmPag (){
  const [itemscheck,activarcheck]= useExclusiveToggle();
  
  return (
    <div className="mb-4 col-12">
      <div className="row mb-4 mt-4">
        <div className="col-3">
          <CheckformComp
            checked={itemscheck[0]}
            active={activarcheck}
            index={0}
          />
        </div>
        <div className="col-3">
          <CheckformComp
            checked={itemscheck[1]}
            active={activarcheck}
            index={1}
          />
        </div>
        <div className="col-3">
          <CheckformComp
           checked={itemscheck[2]}
           active={activarcheck}
           index={2}
          />
        </div>

      </div>
      <div className="row mb-4">
        <CompleteFormActComponent/>

      </div>

     
    </div>
  )
}

export{ActivitiesAdmPag}
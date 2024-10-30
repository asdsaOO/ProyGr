import React from "react";
import { TopicsAcordeonComp } from "../Components/TopicsAcordeonComp";
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { CheckformComp } from "../Components/checkFormComp";
import { useExclusiveToggle } from "../Components/Hooks/useExclusiveToggle";

function ActivitiesAdmPag (){
  const [checkEstados,cambio]= useExclusiveToggle();
  
  return (
    <div className="mb-4 col-12">
      <div className="row mb-4 mt-4">
        <div className="col-3">
          <CheckformComp
            checked={checkEstados[0]}
          />
        </div>
        <div className="col-3">
          <CheckformComp
            checked={checkEstados[1]}
          />
        </div>
        <div className="col-3">
          <CheckformComp
           checked={checkEstados[2]}
          />
        </div>

      </div>

     
    </div>
  )
}

export{ActivitiesAdmPag}
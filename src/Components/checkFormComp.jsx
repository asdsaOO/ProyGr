import React from "react";

function CheckformComp(props) {
  return (
    <div>
      <div className="form-check">
        <input className="form-check-input" type="checkbox" value={props.value} 
               id={props.id} name={props.name} checked={props.checked}
               onChange={(e)=>{
                if(e.target.checked){
                  props.active(props.index)

                }

               }}/>
        <label className="form-check-label" htmlFor="flexCheckDefault">
          {props.text}
        </label>
      </div>
    </div>
  )
}

export{CheckformComp}